# Compliance notes: Module 4 and Module 5 lecture notes (written notes format)

Project: BIO 004 Module 4 and Module 5 lecture notes. Files: 17 html pages (bio004-m4-*-lecture-notes.html, bio004-m5-*-lecture-notes.html), their 17 two-column PDFs in notes/, and the two combined packets BIO004-M4-Lecture-Notes-Packet.pdf and BIO004-M5-Lecture-Notes-Packet.pdf. Date: October 19, 2026.

## Target
WCAG 2.2 AA met on every page. AAA contrast on body text.

## Contrast audit
| Text | Background | Ratio | Result |
|---|---|---|---|
| Black body text | White | 21:1 | AAA |
| Navy #08101F header text | White | 18.9:1 | AAA |
| Maroon #7A2A22 eyebrow, section headings, question labels, links | White | 8.5:1 | AAA |
| Table header text (#000) | Navy-tint #ECEFF4 | 18.1:1 | AAA |
| Focus ring maroon #7A2A22 | White | 8.5:1 | AA 2.4.13 |

## Structure
- One h1 per page, one h2 per competency with the competency number in the heading, h3 for subsections. Every competency section opens with the official competency wording ("You should be able to") so the page doubles as the study guide.
- Landmarks: header, main (id main), skip link to #main.
- Tables carry thead with scope="col" and row headers with scope="row". Definition lists for term and definition pairs. Ordered lists for every traced path.
- Worked questions: options are list items with the letter in the text, stems bold, options not bold, A to D stacked.
- No italics, no em or en dashes, no "Given not Googled". Temperatures: none appear.
- The PDF link on each page names the new tab; rel="noopener".
- Iframe height sender before the closing body tag.

## Completeness
- Automated check: every content word of each competency's wording appears in that competency's section (verbs and filler excluded). All 97 competencies pass (97 to 132 and 133 to 193).
- Automated check: every structure on the Module 4 and Module 5 lab structure lists (excluding the lower limb muscle charts, which belong to the lab packet) appears in the notes for that module. The pelvic vessels on the Module 5 reproductive lists are covered in the Module 4 blood flow document (competency 126).
- Content source: the Module 4 and Module 5 course notes packets (BIO004-Module4-Packet.html, BIO004-Module5-Packet.html), the note sheet keys, and Dr. Rennie's own Module 4 lecture notes. Where sources disagree, the packet wording is used and the alternative noted.

## Print
Each PDF prints two columns, Letter, with page x of y in the footer. The packets add a cover and a contents page listing every competency with its page. Section headings span both columns; table rows and question cards do not split.

## Keyboard and screen reader
Reading order is document order. Visible 3px maroon focus ring. Structure reviewed (headings, landmarks, table headers). Live VoiceOver pass still on the end-of-semester list.

Reviewer: Dr. Sharilyn Rennie
