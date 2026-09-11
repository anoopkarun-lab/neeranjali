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
2. Upload **the contents of this folder** to the repository root.
3. Commit the files.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then Save.
7. GitHub will show the public site URL after deployment.

## Google Drive videos
The site embeds these shared Drive videos using Google Drive's preview player:
- Approach / drive: `132fHfk3wX1OS71qmmRNikA3xJ6RykXp2`
- Scenic drone: `14OL0zx6yKRPvOmWKGDLzs9GfCUqp4U1x`

For visitors to play them, the Drive files must remain shared as **Anyone with the link → Viewer**.

## Adding more videos from the Drive folder
Google Drive folder contents could not be downloaded programmatically in the generation environment, so the two explicitly supplied videos are embedded and the brochure/site photographs are bundled locally.

For the best GitHub Pages experience, convert additional `.MOV` files to `.mp4` (H.264 video + AAC audio), place them under `assets/media/`, and use a standard HTML `<video>` element. MOV playback is not reliable across Chrome/Android/Windows.

Alternatively, for another public Drive video, use the existing pattern in the HTML:
```html
<article class="video-card" data-video-id="GOOGLE_DRIVE_FILE_ID">...</article>
```
The JavaScript automatically opens the Drive preview in a modal.

## Images
The included site imagery is optimized as WebP for faster page loads. The PDF brochure is included in `downloads/`.

## Contact form
The form is intentionally serverless. Submitting it opens WhatsApp to Anoop (`+91 94955 71201`) with a pre-filled enquiry. No user data is stored by the website.
