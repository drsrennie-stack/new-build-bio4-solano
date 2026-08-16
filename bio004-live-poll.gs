/**
 * BIO 004 live poll backend
 * Dr. Sharilyn Rennie, August 2026
 *
 * Paste this into script.google.com, run setup() once, then deploy it as a
 * web app. Full instructions are in live-poll-setup.md.
 *
 * WHY EVERYTHING IS A GET
 * -----------------------
 * A JSON POST from a browser triggers a CORS preflight, and an Apps Script
 * web app cannot answer a preflight. That is the wall people hit and give up
 * at. Every call here is a GET with query parameters, which is a simple
 * request and skips the preflight entirely. The page also supports a JSONP
 * fallback through the callback parameter, so if CORS still misbehaves on
 * campus wifi the poll keeps working.
 *
 * WHAT IS STORED
 * --------------
 * One row per vote: timestamp, room, question, option, and a random device
 * token the student's own browser made up. No names. No student IDs. No email.
 * The token exists only so a student can change their answer before you lock,
 * and it means nothing outside this sheet. Canvas stays the system of record
 * for anything graded.
 */

/* ============================================================
   SET THIS BEFORE YOU DEPLOY
   ============================================================ */

/** Anything you like. It stops a student from locking or revealing the poll
 *  from their phone. Type it once into the presenter view and it is
 *  remembered on that laptop. Change it and every presenter view has to be
 *  told again. */
var PRESENTER_KEY = 'change-me-before-you-deploy';

/** How many options a question can have. Four covers everything you run. */
var MAX_OPTIONS = 6;

/* ============================================================
   RUN THIS ONCE
   ============================================================ */

/**
 * Creates the spreadsheet and both tabs, then logs the link. Run it from the
 * editor with the Run button. Approve the permission prompt the first time.
 * It is your own account making your own spreadsheet.
 */
function setup() {
  var ss = SpreadsheetApp.create('BIO 004 live poll data');
  var votes = ss.getActiveSheet();
  votes.setName('votes');
  votes.appendRow(['timestamp', 'room', 'question', 'option', 'token']);
  votes.setFrozenRows(1);

  var state = ss.insertSheet('state');
  state.appendRow(['room', 'question', 'open', 'revealed', 'updated']);
  state.setFrozenRows(1);

  PropertiesService.getScriptProperties().setProperty('SHEET_ID', ss.getId());

  Logger.log('Spreadsheet created. Keep this link:');
  Logger.log(ss.getUrl());
  Logger.log('Now deploy: Deploy > New deployment > Web app,');
  Logger.log('Execute as Me, Who has access Anyone. Copy the /exec URL.');
  return ss.getUrl();
}

/* ============================================================
   THE WEB APP
   ============================================================ */

function doGet(e) {
  var p = (e && e.parameter) ? e.parameter : {};
  var out;
  try {
    out = route(p);
  } catch (err) {
    out = { ok: false, error: String(err) };
  }
  return reply(out, p.callback);
}

/** Apps Script cannot answer a CORS preflight, so a JSONP wrapper is offered
 *  as a fallback. The page tries plain fetch first and only falls back when
 *  the browser refuses. */
function reply(obj, callback) {
  var json = JSON.stringify(obj);
  if (callback) {
    return ContentService
      .createTextOutput(callback + '(' + json + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

function route(p) {
  var action = p.action || '';
  var room = String(p.room || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
  var q = String(p.question || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 40);

  if (action === 'ping') {
    return { ok: true, message: 'The poll backend is awake.' };
  }
  if (!room) return { ok: false, error: 'No room code.' };

  if (action === 'vote')    return vote(room, q, p);
  if (action === 'tally')   return tally(room, q);
  if (action === 'current') return current(room);
  if (action === 'set')     return setState(room, q, p);
  if (action === 'clear')   return clearVotes(room, q, p);

  return { ok: false, error: 'Unknown action: ' + action };
}

/**
 * What the room is doing right now. This is what a student's phone asks for
 * every couple of seconds, so their screen follows the projector without them
 * touching anything. The current question is simply the most recently changed
 * one for that room.
 */
function current(room) {
  var rows = book().getSheetByName('state').getDataRange().getValues();
  var best = null, bestTime = 0;
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0] !== room) continue;
    var t = rows[i][4] ? new Date(rows[i][4]).getTime() : 0;
    if (t >= bestTime) { bestTime = t; best = rows[i]; }
  }
  if (!best) return { ok: true, question: '', open: false, revealed: false };
  return { ok: true, question: best[1],
           open: best[2] === true || best[2] === 'TRUE',
           revealed: best[3] === true || best[3] === 'TRUE' };
}

function book() {
  var id = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
  if (!id) throw new Error('Run setup() first, the sheet does not exist yet.');
  return SpreadsheetApp.openById(id);
}

/* ---------- votes ---------- */

function vote(room, q, p) {
  var opt = parseInt(p.option, 10);
  var token = String(p.token || '').replace(/[^A-Za-z0-9]/g, '').slice(0, 24);
  if (!q) return { ok: false, error: 'No question.' };
  if (!token) return { ok: false, error: 'No device token.' };
  if (isNaN(opt) || opt < 0 || opt >= MAX_OPTIONS) {
    return { ok: false, error: 'Option out of range.' };
  }

  var st = readState(room, q);
  if (!st.open) return { ok: false, error: 'locked', locked: true };

  var lock = LockService.getScriptLock();
  lock.waitLock(8000);
  try {
    var sh = book().getSheetByName('votes');
    var rows = sh.getDataRange().getValues();
    /* One vote per device per question. A student who changes their mind
       before the lock updates their row instead of adding a second one. */
    for (var i = rows.length - 1; i >= 1; i--) {
      if (rows[i][1] === room && rows[i][2] === q && rows[i][4] === token) {
        sh.getRange(i + 1, 4).setValue(opt);
        sh.getRange(i + 1, 1).setValue(new Date());
        return { ok: true, changed: true };
      }
    }
    sh.appendRow([new Date(), room, q, opt, token]);
    return { ok: true, changed: false };
  } finally {
    lock.releaseLock();
  }
}

function tally(room, q) {
  var st = readState(room, q);
  var counts = [];
  for (var k = 0; k < MAX_OPTIONS; k++) counts.push(0);
  var total = 0;

  if (q) {
    var rows = book().getSheetByName('votes').getDataRange().getValues();
    for (var i = 1; i < rows.length; i++) {
      if (rows[i][1] === room && rows[i][2] === q) {
        var o = parseInt(rows[i][3], 10);
        if (!isNaN(o) && o >= 0 && o < MAX_OPTIONS) { counts[o]++; total++; }
      }
    }
  }
  return { ok: true, room: room, question: q, open: st.open, revealed: st.revealed,
           counts: counts, total: total };
}

/* ---------- presenter controls ---------- */

function setState(room, q, p) {
  if (String(p.key || '') !== PRESENTER_KEY) return { ok: false, error: 'Wrong presenter key.' };
  if (!q) return { ok: false, error: 'No question.' };
  var open = p.open === '1';
  var revealed = p.reveal === '1';
  writeState(room, q, open, revealed);
  return { ok: true, open: open, revealed: revealed };
}

function clearVotes(room, q, p) {
  if (String(p.key || '') !== PRESENTER_KEY) return { ok: false, error: 'Wrong presenter key.' };
  if (!q) return { ok: false, error: 'No question.' };
  var lock = LockService.getScriptLock();
  lock.waitLock(8000);
  try {
    var sh = book().getSheetByName('votes');
    var rows = sh.getDataRange().getValues();
    var removed = 0;
    for (var i = rows.length - 1; i >= 1; i--) {
      if (rows[i][1] === room && rows[i][2] === q) { sh.deleteRow(i + 1); removed++; }
    }
    writeState(room, q, true, false);
    return { ok: true, removed: removed };
  } finally {
    lock.releaseLock();
  }
}

/* ---------- state tab ---------- */

function readState(room, q) {
  if (!q) return { open: false, revealed: false };
  var rows = book().getSheetByName('state').getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0] === room && rows[i][1] === q) {
      return { open: rows[i][2] === true || rows[i][2] === 'TRUE',
               revealed: rows[i][3] === true || rows[i][3] === 'TRUE' };
    }
  }
  /* A question nobody has opened yet is closed, so a student who guesses a
     room code cannot stuff a poll that is not running. */
  return { open: false, revealed: false };
}

function writeState(room, q, open, revealed) {
  var sh = book().getSheetByName('state');
  var rows = sh.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0] === room && rows[i][1] === q) {
      sh.getRange(i + 1, 3, 1, 3).setValues([[open, revealed, new Date()]]);
      return;
    }
  }
  sh.appendRow([room, q, open, revealed, new Date()]);
}

/* ============================================================
   HOUSEKEEPING
   ------------------------------------------------------------
   Run wipeEverything() at the end of a term, or any time you want the
   sheet empty. Nothing in here identifies a student, but there is no
   reason to keep it either.
   ============================================================ */

function wipeEverything() {
  var ss = book();
  var v = ss.getSheetByName('votes');
  if (v.getLastRow() > 1) v.deleteRows(2, v.getLastRow() - 1);
  var s = ss.getSheetByName('state');
  if (s.getLastRow() > 1) s.deleteRows(2, s.getLastRow() - 1);
  Logger.log('Cleared.');
}
