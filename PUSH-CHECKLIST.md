# Study With Me, push checklist

Everything you need to put it live, and what to redeploy. Repo is `drsrennie-stack/new-build-bio4-solano` (GitHub Pages).

## 1. Push to GitHub Pages (repo root, same folder as index.html)

Core tools:

- [ ] `study-session-signup.html` (the schedule + signup tool)
- [ ] `study-with-me-hours.html` (the student hours tracker)

Add-to-phone app files (needed for the signup tool's home-screen icon):

- [ ] `manifest.webmanifest`
- [ ] `icon-192.png`
- [ ] `icon-512.png`
- [ ] `apple-touch-icon.png`

Weekly hubs with the Study With Me tiles (from the `week-hubs-updated` folder):

- [ ] `week-1-hub.html` through `week-8-hub.html`

After it publishes, the links resolve on their own:

- Schedule: `https://drsrennie-stack.github.io/new-build-bio4-solano/study-session-signup.html`
- Hours: `https://drsrennie-stack.github.io/new-build-bio4-solano/study-with-me-hours.html`

The "Log my hours" button on the schedule page opens the hours tool automatically once both files are in the same folder.

## 2. Google Apps Script (only if you want confirmation emails)

The signup + date fix are already deployed. To turn on the email that sends students their link:

- [ ] Open the project at script.google.com/home/projects
- [ ] Re-paste `apps-script-backend.gs`, Save
- [ ] Run `getSheet` once and approve the new "send email as you" permission
- [ ] Deploy, Manage deployments, Edit (pencil), New version, Deploy
- [ ] The web app URL stays the same, so nothing changes in the HTML

## 3. Kajabi (iframe embed)

Kajabi allows scripts in a custom-code block, so use the auto-resizing iframe below. Paste it into a Custom Code block on your `student-hosting-schedule` page. It sizes itself to the content, no scrollbar.

```html
<iframe id="ssg-frame"
  src="https://drsrennie-stack.github.io/new-build-bio4-solano/study-session-signup.html"
  title="BIO 004 Study With Me schedule"
  style="width:100%;border:0;min-height:1200px;"
  scrolling="no" allowfullscreen></iframe>
<script>
  window.addEventListener("message", function (e) {
    var d = e.data;
    if (d && d.type === "setHeight" && d.id === "study-session-signup") {
      var f = document.getElementById("ssg-frame");
      if (f && d.height) f.style.height = d.height + "px";
    }
  });
</script>
```

## 4. Set your values before you push (quick check inside the files)

- [ ] `study-with-me-hours.html`, top of the script: `TERMS` (weeks, weeklyCap, required) and `MAX_HOST_PER_WEEK`. Confirm the full-semester required hours (set to 36 for now).
- [ ] `study-session-signup.html`, top of the script: `API_URL` is set. `ZOOM_LINK` can stay blank (hosts use their own links).
- [ ] `apps-script-backend.gs`, top: `SHEET_ID` is set.

## 5. Post-them-anywhere assets (optional, use where you like)

- `study-with-me-card.png` (marketing card) and `study-with-me-qr.png` / `study-with-me-qr-plain.png` (QR to the schedule) for Mastery OS, slides, email
- `study-session-flyer.pdf` (printable flyer)
- `study-with-me-host-guide.html` (host guide, link it or embed it)

## 6. Verify after pushing

- [ ] Open the schedule URL, post a test session, sign up, confirm the popup shows the link (and the email arrives if you did step 2)
- [ ] Open the hours URL, add an entry, pick a term, check the weekly cap and progress
- [ ] On a phone, open the schedule URL and try Share, Add to Home Screen
- [ ] Delete your test rows in the Sessions tab when done

Dr. Sharilyn Rennie
