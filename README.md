# Portfolio website

A fast, responsive personal portfolio built with plain HTML, CSS and JavaScript. It has no build step and no dependencies.

## Features

- Hero section with a typing role rotator and call-to-action buttons
- About section with a photo slot, a short bio and three service cards
- Skills grouped into categories
- Project grid with category filters (All / Web / Design / Apps)
- Experience and education timeline
- Contact form that opens the visitor's email app, plus a direct email link
- Light and dark themes: follows the system setting, and the toggle choice is remembered
- Mobile menu, sticky header, highlights the current section in the menu, fades content in on scroll
- Accessible: skip link, keyboard focus styles, ARIA labels, honours `prefers-reduced-motion`
- Custom 404 page and SVG favicon

## Project structure

```
index.html        # all page content
404.html          # not-found page
css/style.css     # styles and theme colors
js/main.js        # theme, menu, filters, animations, contact form
assets/           # favicon, and your photo / résumé go here
```

## Make it yours

Every place you need to change is marked with an `EDIT:` comment in `index.html`.

1. **Name, title and description.** Edit the `<title>`, the meta tags, the hero heading, the logo and the footer.
2. **Roles.** Edit the `data-roles` list on the `.role-rotator` element in the hero.
3. **Links.** Replace the LinkedIn URL and every `hello@example.com`. That includes the `data-email` attribute on the contact form.
4. **Photo.** Add `assets/me.jpg` and replace the `<div class="avatar">` with `<img src="assets/me.jpg" alt="Portrait of …">`.
5. **Résumé.** Add `assets/resume.pdf`, or delete the "Download résumé" button.
6. **Projects.** Edit or copy the `<article class="project">` cards.
   - `data-category` sets which filters a card appears under. You can list several, separated by spaces: `web`, `design`, `app`.
   - The thumbnail colors come from `--g1` and `--g2`. To use a screenshot instead, add `<img src="assets/project.jpg" alt="">` inside `.project-thumb`.
   - Point the Live and Code links to the real URLs.
7. **Skills and experience.** Edit the chip lists and the timeline entries.
8. **Colors.** Change `--accent` and `--accent-2` for both themes at the top of `css/style.css`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy

**GitHub Pages:** push to your default branch, then go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch** and pick your branch with the `/ (root)` folder. The site goes live at `https://<username>.github.io/<repo>/`.

**Netlify / Vercel / Cloudflare Pages:** import the repository. Leave the build command empty and set the output directory to the root (`/`).
