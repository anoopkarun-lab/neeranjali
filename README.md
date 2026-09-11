# Neeranjali website

A static, multi-page website ready for GitHub Pages. No build step or server is required.

## Pages
- `index.html` — home / cinematic introduction
- `experience.html` — approach drive + drone film
- `plots.html` — conceptual layout + plot characteristics + master plan
- `gallery.html` — video and photo gallery
- `location.html` — location matrix + Google Maps link
- `contact.html` — contact details + WhatsApp enquiry form

## Publish on GitHub Pages
1. Create a new GitHub repository (for example `neeranjali`).
2. **Extract the ZIP first. Do not upload the ZIP file itself.** Upload the **contents of this folder** to the repository root.
3. Commit the files.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then Save.
7. GitHub will show the public site URL after deployment.

## Local web-optimised videos
The site now plays bundled MP4 files directly with the browser's native HTML5 video player:
- `assets/videos/approach-drive.mp4` — 540×960 portrait, H.264/AAC, ~6.8 MB
- `assets/videos/drone-view.mp4` — 854×480 landscape, H.264/AAC, ~6.0 MB

The drone file has been physically rotated into the correct landscape orientation, so no CSS rotation workaround or Google Drive preview player is required. Both files use `faststart` metadata for quicker progressive playback on GitHub Pages.

These web versions are also small enough for GitHub's browser-based file upload flow. The downloadable brochure has been compressed for web delivery as well. If you later add much larger videos, use a local Git clone + push, Git LFS, or a dedicated video/CDN host.

## Adding more videos
Convert additional `.MOV` or large phone videos to `.mp4` using H.264 video + AAC audio, enable `faststart`, and place them in `assets/videos/`. Then add a matching entry to `videoMeta` in `assets/js/main.js` and use `data-video="your-key"` on the video card or button.

## Images
The included site imagery is optimized as WebP for faster page loads. The PDF brochure is included in `downloads/`.

## Contact form
The form is intentionally serverless. Submitting it opens WhatsApp to Anoop (`+91 94955 71201`) with a pre-filled enquiry. No user data is stored by the website.
