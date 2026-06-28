# Live Clicker Questions: Setup Instructions

How to turn the 5 DOK-3 clicker slides into a live, timed, response-collecting activity for your fall in-person class. The deck already handles the questions, the 60-second timer, and the justified answer key. What it cannot do on its own is **collect and lock student responses**, because it is a static web page with no server behind it. That part needs a live-polling tool. This guide covers how to set that up.

Date: for the fall live sections. The online recorded version works as-is (timer + answer key); no polling tool needed for recording.

---

## The short version

1. Pick a polling tool (Slido or Poll Everywhere recommended).
2. Build the same 5 questions in the tool (copy them from the deck's answer-key slides).
3. In class: show the deck's question slide, open that question's poll in the tool, and press the deck's **Start 60 seconds** at the same time.
4. When the timer hits 0:00, **close/lock the poll** in the tool. No one can answer or change after that.
5. Show the live result bar, then advance to the deck's answer-key slide and walk through the justification.

The deck's timer is the visible clock; the tool is what actually collects answers and enforces the lock.

---

## Choosing a tool

| Tool | Lock after time | No-app web link | QR code | Free tier | Notes |
|------|-----------------|-----------------|---------|-----------|-------|
| **Slido** | Yes (deactivate poll) | Yes | Yes | Limited polls/event | Clean, easy locking; good first choice |
| **Poll Everywhere** | Yes (lock responses) | Yes | Yes | Small classes free | Strong classroom features |
| **Mentimeter** | Yes (close) | Yes | Yes | Limited questions/presentation | Polished visuals |
| **Google Forms** | Manual close only | Yes | Yes (share link) | Unlimited | Free and simple, but no built-in timer/auto-lock; weakest for live timing |

For the "answer only during the window, then locked" experience you described, use **Slido** or **Poll Everywhere**.

---

## Step-by-step (Slido or Poll Everywhere)

1. **Create an event/presentation** for the unit (e.g., "BIO 004 Blood Vessels").
2. **Add 5 multiple-choice polls**, one per question. Copy the prompt and the four options A-D straight from the deck's answer-key slides so the wording matches. (Do not mark the correct answer as visible; you reveal that on the deck slide afterward.)
3. **Get the join info:** the tool gives you one event QR + link, or a QR per question. Students join with no app by tapping the link.
4. **Run it in class, per question:**
   - Show the deck's clicker slide (A-D options visible).
   - In the tool, **activate** that question's poll.
   - Press **Start 60 seconds** on the deck slide.
   - Students submit on phones or laptops (the link works on both).
   - At 0:00, **deactivate / lock** the poll in the tool. Locked = no new or changed answers.
5. **Reveal:** show the live results bar in the tool, then advance to the deck's **answer-key** slide and explain why the correct option is right and the others are wrong.

### No-smartphone students
The poll link is a normal web page. Students without a phone open the same link on a laptop or shared device and click their answer. (Or pair them up.)

---

## Optional: I can wire the deck to show the QR on "Start"

When you have the poll links, I can update each clicker slide so that pressing **Start 60 seconds** also reveals **that question's QR code and a clickable link** right on the slide. You would give me:

- The 5 poll URLs (one per question), or one event URL if the tool uses a single join code.

Then the flow becomes: press Start, the QR appears, the clock runs, students join and answer, you lock the poll at 0:00.

---

## If you want the all-in-one version (no third-party tool)

A custom backend (e.g., Firebase) can make the deck itself collect answers and hard-lock at 0:00, with no outside tool. This is the elaborate route: it needs a free Firebase project, a small amount of configuration, and ongoing upkeep. Tell me if you want to go that way and I will scope it out and build it.

---

## For the online recorded version (right now)

No polling tool needed. Record yourself reading each question, start the 60-second timer on screen so viewers can pause and think, then advance to the answer-key slide and explain. The deck already does all of this offline.

Dr. Sharilyn Rennie
