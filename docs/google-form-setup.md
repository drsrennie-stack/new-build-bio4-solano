# TBL Team Generator: Google Form setup

This sets up the survey students fill out in class. You have two ways to build it. The fast way (Apps Script) builds the whole Form and the response spreadsheet for you in about 30 seconds. The manual way is below it if you prefer clicking.

The question wording here matches what the generator app expects, so the CSV will map automatically.

---

## Fast way: auto-build with Apps Script

1. Go to https://script.google.com and click **New project**.
2. Delete the placeholder code, paste the whole script below, and click **Save**.
3. Click **Run**. Approve the permission prompt the first time (it is your own account creating your own form).
4. The execution log prints two links: the **live form** (share or project this in class) and the **responses spreadsheet**.

```javascript
function buildTBLForm() {
  var form = FormApp.create('TBL Team Survey')
    .setDescription('Two minutes. Your answers are used only to build balanced teams for this course. Dr. Sharilyn Rennie')
    .setCollectEmail(false)
    .setProgressBar(true);

  form.addTextItem()
    .setTitle('Your full name')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Highest degree you have completed')
    .setChoiceValues([
      "Bachelor's degree or higher in a STEM field (biology, chemistry, physics, math, engineering)",
      "Bachelor's degree or higher in a non-STEM field",
      "Associate degree or some college credit",
      "High school diploma or currently completing prerequisites"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Healthcare training or licensure')
    .setChoiceValues([
      "Licensed allied health professional: RN, LVN/LPN, respiratory therapist (RRT), paramedic, radiology/imaging tech, sonographer, physical therapist assistant (PTA), occupational therapy assistant, or surgical tech",
      "Entry-level patient care: CNA, patient care tech (PCT), medical assistant, or EMT-Basic",
      "No healthcare experience"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('On a team, I prefer to...')
    .setChoiceValues([
      "Lead and organize the group",
      "Help plan and keep us organized, but not necessarily lead",
      "Contribute and follow the group's plan",
      "No strong preference"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('How comfortable are you with technology and learning new apps?')
    .setChoiceValues([
      "Very comfortable, I enjoy tech",
      "Comfortable",
      "Neutral",
      "I prefer to avoid tech when I can"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Which sounds more like you?')
    .setChoiceValues([
      "More introverted (I recharge alone and often prefer to listen)",
      "Somewhere in between",
      "More extroverted (I recharge around people and often prefer to talk)"
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('When are you generally free to meet outside of class? (check all that apply)')
    .setChoiceValues([
      "Weekday mornings",
      "Weekday afternoons",
      "Weekday evenings",
      "Weekends"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('About how many hours per week do you work for pay?')
    .setChoiceValues([
      "I don't work for pay right now",
      "Under 10 hours",
      "10 to 20 hours",
      "20 to 30 hours",
      "More than 30 hours"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Gender (optional, used only to avoid leaving anyone as the lone member of a group)')
    .setChoiceValues(["Woman","Man","Non-binary","Prefer not to say"])
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('Is English an additional language for you? (optional, used only for balanced teams)')
    .setChoiceValues(["Yes","No","Prefer not to say"])
    .setRequired(false);

  var ss = SpreadsheetApp.create('TBL Team Survey (Responses)');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  Logger.log('LIVE FORM (share this): ' + form.getPublishedUrl());
  Logger.log('EDIT FORM: ' + form.getEditUrl());
  Logger.log('RESPONSES SHEET: ' + ss.getUrl());
}
```

After students respond, open the responses spreadsheet and do **File > Download > Comma-separated values (.csv)**. That CSV loads straight into team-generator.html.

---

## Licensed allied health: who counts

The generator treats these as the "licensed clinician" tier (named so students self-select correctly):

- Registered nurse (RN), LVN / LPN
- Respiratory therapist (RRT)
- Paramedic
- Radiology / imaging tech, sonographer
- Physical therapist assistant (PTA)
- Occupational therapy assistant (COTA)
- Surgical tech

Entry-level care tier (real exposure, lower responsibility): CNA, patient care tech (PCT), medical assistant, EMT-Basic.

If a student has both a degree and a license, the tool counts their strongest qualification, so nobody is double-counted or under-counted.

---

## Manual way: question list

If you would rather build the Form by hand, create these questions in this order. Question type is in brackets.

1. Your full name [short answer, required]
2. Highest degree you have completed [multiple choice, required]
   - Bachelor's degree or higher in a STEM field (biology, chemistry, physics, math, engineering)
   - Bachelor's degree or higher in a non-STEM field
   - Associate degree or some college credit
   - High school diploma or currently completing prerequisites
3. Healthcare training or licensure [multiple choice, required]
   - Licensed allied health professional: RN, LVN/LPN, respiratory therapist (RRT), paramedic, radiology/imaging tech, sonographer, physical therapist assistant (PTA), occupational therapy assistant, or surgical tech
   - Entry-level patient care: CNA, patient care tech (PCT), medical assistant, or EMT-Basic
   - No healthcare experience
4. On a team, I prefer to... [multiple choice, required]
   - Lead and organize the group
   - Help plan and keep us organized, but not necessarily lead
   - Contribute and follow the group's plan
   - No strong preference
5. How comfortable are you with technology and learning new apps? [multiple choice, required]
   - Very comfortable, I enjoy tech
   - Comfortable
   - Neutral
   - I prefer to avoid tech when I can
6. Which sounds more like you? [multiple choice, required]
   - More introverted (I recharge alone and often prefer to listen)
   - Somewhere in between
   - More extroverted (I recharge around people and often prefer to talk)
7. When are you generally free to meet outside of class? (check all that apply) [checkboxes, required]
   - Weekday mornings / Weekday afternoons / Weekday evenings / Weekends
8. About how many hours per week do you work for pay? [multiple choice, required]
   - I don't work for pay right now / Under 10 hours / 10 to 20 hours / 20 to 30 hours / More than 30 hours
9. Gender (optional) [multiple choice, optional]: Woman / Man / Non-binary / Prefer not to say
10. Is English an additional language for you? (optional) [multiple choice, optional]: Yes / No / Prefer not to say

---

## Running it tomorrow

1. Project the live form link or drop it in your LMS. Students fill it in the first few minutes.
2. Watch responses land in the sheet. When everyone is in, download the CSV.
3. Open team-generator.html, load the CSV, confirm the column mapping (it auto-guesses), set members per team, click **Generate teams**.
4. Project the result. Re-roll if you want a different valid arrangement. Download or print the roster.

Built for Dr. Sharilyn Rennie.
