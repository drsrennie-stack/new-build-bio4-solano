# Practice Along Setup Guide

How to connect the 37 case companion HTMLs to your prework pages so students can watch the deep-dive video on one side and draw along on the other.

## The architecture in one paragraph

You drop `practice-along.html` (and all 37 case HTMLs) into your `drsrennie-stack/new-build-bio4-solano` repo. On each prework page, you add one small "Draw along with the video" button. When a student clicks it, `practice-along.html` opens in a new tab with the video on the left and the matching case on the right, draggable divider between, drawing tools fully unlocked on the case side. The video lock and the explain-back gate on your prework page stay where they are — this is the practice surface for after they've earned access (or alongside it, your call).

## File layout (suggested)

```
new-build-bio4-solano/
├── index.html                    ← your existing course home
├── week-1.html ... week-8.html   ← your existing week landing pages
├── heart.html                    ← your existing prework pages
├── practice-along.html           ← NEW (the split-view player)
├── case-deep-dives/              ← NEW folder
│   ├── the-heart.html
│   ├── the-skull.html
│   ├── ...                       (all 37 case companions)
│   └── PRACTICE-ALONG-SETUP.md
└── (your videos hosted wherever they live now)
```

You can put the case HTMLs anywhere; just adjust the `case=` parameter in the button accordingly.

## Add the button to each prework page

Paste this snippet into the appropriate spot on each prework page (next to the existing Foundations / Deep Dive video buttons works well):

```html
<a class="resource-btn primary" target="_blank" rel="noopener"
   href="practice-along.html?video=YOUR_VIDEO_EMBED_URL&case=case-deep-dives/the-heart.html&topic=The%20Heart">
  Draw Along with the Video <span class="arrow" aria-hidden="true">&rarr;</span>
</a>
```

Three placeholders to fill per page:

1. `YOUR_VIDEO_EMBED_URL` — the embed URL of the deep-dive video for that prework page. For YouTube, that's `https://www.youtube.com/embed/VIDEO_ID`. For Vimeo, `https://player.vimeo.com/video/VIDEO_ID`. For Kajabi, use the embed URL Kajabi provides in the share menu.
2. `case-deep-dives/the-heart.html` — the relative path to the matching case companion. See the lookup table below.
3. `topic=The%20Heart` — the page title shown in the practice-along header (URL-encoded — replace spaces with `%20`).

## Lookup: Source Page → Case companion filename

| Week | Source Page (prework) | Case companion file |
|---|---|---|
| 1 | The Language of Anatomy | `language-of-anatomy.html` |
| 1 | Body Cavities & Regions | `body-cavities-and-regions.html` |
| 1 | Anatomy of the Cell | `anatomy-of-the-cell.html` |
| 1 | Histology: The Four Tissue Types | `histology-four-tissue-types.html` |
| 1 | The Integumentary System | `integumentary-system.html` |
| 2 | Bone Histology (Cartilage & Bone Microanatomy) | `bone-microanatomy.html` |
| 2 | The Skull | `the-skull.html` |
| 2 | The Vertebral Column and Thoracic Cage | `vertebral-column-thoracic-cage.html` |
| 2 | The Upper Extremity | `upper-extremity.html` |
| 2 | The Lower Extremity | `lower-extremity.html` |
| 2 | Articulations and Joints | `articulations-and-joints.html` |
| 2 | Muscle Structure & Sarcomeres | `muscle-structure-sarcomeres.html` |
| 2 | Fascicle Arrangement & Lever Systems | `fascicle-arrangement-lever-systems.html` |
| 3 | Blood | `blood.html` |
| 3 | The Heart | `the-heart.html` |
| 3 | The Cardiac Conduction System | `cardiac-conduction-system.html` |
| 3 | Blood Vessels, Structure & Types | `blood-vessels-structure-types.html` |
| 3 | Blood Vessel Disorders & Fetal Circulation | `blood-vessel-disorders-fetal-circulation.html` |
| 3 | The Respiratory System | `the-respiratory-system.html` |
| 4 | The Lymphatic System | `the-lymphatic-system.html` |
| 5 | The Alimentary Canal | `the-alimentary-canal.html` |
| 5 | The Accessory Digestive Organs | `accessory-digestive-organs.html` |
| 6 | The Urinary System | `the-urinary-system.html` |
| 6 | The Male Reproductive System | `male-reproductive-system.html` |
| 6 | The Female Reproductive System | `female-reproductive-system.html` |
| 6 | Pregnancy and Birth | `pregnancy-and-birth.html` |
| 6 | Endocrine Anatomy | `endocrine-anatomy.html` |
| 7 | Functional Organization and Nervous Tissue | `functional-organization-nervous-tissue.html` |
| 7 | Gross Anatomy & Neuronal Integration | `gross-anatomy-neuronal-integration.html` |
| 7 | CNS Meninges and CSF | `cns-meninges-and-csf.html` |
| 7 | The Brain | `the-brain.html` |
| 7 | The Brainstem | `the-brainstem.html` |
| 8 | The Spinal Cord | `the-spinal-cord.html` |
| 8 | The Cranial Nerves | `the-cranial-nerves.html` |
| 8 | The Peripheral Nervous System | `the-peripheral-nervous-system.html` |
| 8 | The Nerve Plexuses | `the-nerve-plexuses.html` |
| 8 | The Autonomic Nervous System | `the-autonomic-nervous-system.html` |

## Worked example for `heart.html`

If your video is hosted on YouTube at `https://www.youtube.com/watch?v=ABC123`, the embed URL is `https://www.youtube.com/embed/ABC123`. The button you'd add to your `heart.html` prework page:

```html
<a class="resource-btn primary" target="_blank" rel="noopener"
   href="practice-along.html?video=https://www.youtube.com/embed/ABC123&case=case-deep-dives/the-heart.html&topic=The%20Heart">
  Draw Along with the Video <span class="arrow" aria-hidden="true">&rarr;</span>
</a>
```

## What students see

When they click, `practice-along.html` opens in a new tab:

- **Header bar** (navy with gold accent): "Practice · Draw Along" + topic name, plus three buttons: **Swap sides**, **Reset 50/50**, **Case full screen**.
- **Left pane**: your deep-dive video, fullscreen-capable.
- **Right pane**: the case companion, scrollable, with all draw zones live (Dark/Light canvas toggle, Fine pencil, all colors).
- **Draggable divider** between them. Mobile / narrow screens stack vertically (top = video, bottom = case).

The case companion in the right pane works exactly as it does standalone: students can scroll through the sections, read the case, and draw on either dark or light canvas with the full tool set. They can sketch what you're sketching, or pause and try it without watching, or come back later to practice.

## About the lock

The lock you've described (students must watch the video before other tools unlock) is on your **prework page**, where the gated tools (Study, Quiz me, spaced recall cards) live. The `practice-along.html` and the case companion are intentionally **NOT gated** — drawing alongside your demonstration is meant to be open. If you ever want to gate them too, you can wrap the button itself in your existing explain-back gate so the button doesn't appear until the video is watched.

## Optional: course directory page

`course-index.html` (also in your outputs folder) lists all 37 cases linked directly to their case companion HTMLs. Useful as a one-page browseable catalog. Drop it in the repo and link from your course home if you want students to be able to find a specific case without navigating week by week.

## Quick troubleshooting

- **Video doesn't appear in left pane** → confirm you're using the EMBED URL (not the share URL). YouTube's "Copy link" gives you the watch URL; you want the embed URL from the Share → Embed dialog.
- **"Refused to display in a frame" error** → some hosts (rare) block embedding. Check the video host's embed settings. YouTube, Vimeo, and Kajabi all allow embed by default.
- **Case companion scrolls inside iframe but page doesn't** → expected behavior. The case companion has its own scroll. Drag the divider if students need more space on either side.
- **Apple Pencil pressure not working on the case canvas** → confirm students are using Safari on iPad (not Chrome). Pointer events with pressure are best supported in Safari.

— Dr. Sharilyn Rennie
