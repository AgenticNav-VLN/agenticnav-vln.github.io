# AgenticNav project page

A static, dependency-free research website for AgenticNav.

- Public website: https://agenticnav-vln.github.io/
- Paper: https://arxiv.org/abs/2606.10577
- Deploy: GitHub Pages, main branch, repository root.

## Content

The five approved current two-dimensional robot experiments are long-range navigation,
Building 22, kitchen fridge, trash bin, and table tennis. Every experiment is complete
at a constant ten times the recorded speed. The 25-second hero uses selected sections
of the long-range experiment. Older demos and three-dimensional experiments are excluded.

Instruction text is rendered by the page and synchronized with the video. Video files
have no instruction burned into the image. Building 22 recall windows and target
tracking boxes are rendered by the page from the original timing and coordinates.
The kitchen and Building 22 source footage and recalled sign reuse the previously
approved anonymized assets. Original source files are never overwritten.

## Editing and rebuilding

- `index.html`: complete page, including an embedded copy of the demo manifest.
- `static/css/index.css`: responsive layout; Calibri bold italic, system fallbacks.
- `static/js/index.js`: player, synchronized instructions, accessible tool tabs, method walkthrough.
- `static/js/demos.json`: media and timing manifest. All times are on the exported video clock.
- `scripts/prepare_media.py`: export approved source footage from the sibling paper workspace.
- `scripts/build_site.py`: generate public and anonymous HTML and copy matching research assets.
- `scripts/check_site.py`: references, identities, timeline and media validation.

Run from the outer workspace:

```powershell
python agenticnav.github.io/scripts/prepare_media.py
python agenticnav.github.io/scripts/build_site.py
python agenticnav.github.io/scripts/check_site.py
python -m http.server 8765 --bind 127.0.0.1
```

Media preparation needs Python, Pillow, and FFmpeg. The build also needs PyMuPDF.
A build writes the sibling anonymous site's `docs` directory as well as this site.
The anonymous publication identifier and management URL are intentionally kept out of
this public repository. All anonymous media references are relative to that site.

Videos load on demand. If a host does not support byte-range requests, a user-initiated
seek loads that same local video into a browser blob so instruction seeking still works.
For anonymous hosts with an opaque-origin sandbox, the same MP4 bytes also have a
classic-script transport (`*.media.js`), loaded only after an instruction seek requires it.
This stays within the site's own resources and does not require relaxed host permissions.
The background pauses offscreen; reduced-motion and data-saving preferences disable its
automatic playback. Keyboard users can operate the player, instructions, tabs, and walkthrough.

The previous site used the Academic Project Page Template. The current design and
interaction implementation are custom, with a video hero inspired by the supplied reference.
