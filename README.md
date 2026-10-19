# sshekhar.in: personal portfolio

A plain HTML, CSS and JavaScript portfolio for Sumit Shekhar. No build step, no framework, no
backend, no API keys. It runs on GitHub Pages.

## Files

```
index.html        All page content and sections
style.css         Styles, light and dark themes, responsive layout
script.js         Contact details (CONFIG), theme toggle, footer year
404.html          Page shown for unknown URLs
robots.txt        Crawler rules and sitemap location
sitemap.xml       Sitemap for search engines
CNAME             Custom domain for GitHub Pages (sshekhar.in)
.nojekyll         Tells GitHub Pages to serve files as-is
assets/favicon.svg
assets/images/    Screenshots, video thumbnails and placeholder images
```

## Editing the site

Every detail you have not supplied is in square brackets, for example `[Project one title]`.
Replace each one. Search the files for `[` to find them all.

| What | Where |
|---|---|
| Hero text | `index.html`, section `hero` |
| Selected projects (title, description, tools, screenshot) | `index.html`, section `projects`. Each `<article class="project">` is one project. |
| Project screenshots | Put images in `assets/images/`, then change the `src` of each project image. Keep the `alt` text accurate. |
| Video portfolio thumbnails and titles | `index.html`, section `videos`. Each `<figure class="video-item">` is one video. |
| Skills and tools | `index.html`, section `skills` |
| About text | `index.html`, section `about` |
| Contact details (email, phone, YouTube, LinkedIn, Instagram) | The `CONFIG` object at the top of `script.js`. Leave a value empty until you have it. |
| Your domain and canonical URLs | `index.html` (canonical and Open Graph tags), `sitemap.xml`, `robots.txt`, `CNAME` |

Project and video links are shown as "add when ready" text until you have real URLs. Add a link
as `<a href="https://...">` only when the URL is real. Do not use `href="#"`, because that
creates a dead link.

### Adding a social preview image

1. Create a 1200 x 630 JPG or PNG and save it as `assets/images/og-image.jpg`.
2. In `index.html`, uncomment the `og:image` line in the `<head>`.

### Contact details

Open `script.js` and fill in the values in `CONFIG`:

```js
const CONFIG = {
  email: "you@example.com",
  phone: "+91 00000 00000",
  youtube: "https://www.youtube.com/@yourchannel",
  linkedin: "https://www.linkedin.com/in/yourprofile",
  instagram: "https://www.instagram.com/yourhandle",
};
```

Emails become `mailto:` links and phone numbers become `tel:` links. Social links open in a new tab.

## Preview on your computer

Open `index.html` in a browser, or run a local server from this folder:

```bat
cd /d "C:\path\to\portfolio"
python -m http.server 8000
```

Then open http://localhost:8000 in your browser. Press Ctrl+C in the window to stop the server.

## Publish on GitHub Pages with sshekhar.in

### 1. Create the repository and push the files

1. Create a new public repository on GitHub. Any name works, for example `portfolio`.
2. Upload every file in this folder, including `CNAME`, `.nojekyll` and the `assets` folder.
   Keep the files at the top level of the repository, not inside a subfolder.

### 2. Turn on Pages

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose branch `main` and folder `/ (root)`, then click **Save**.
4. Under **Custom domain**, enter `sshekhar.in` and click **Save**. The `CNAME` file keeps this
   value in sync.

### 3. Point your domain at GitHub (at your domain registrar)

DNS settings are changed where you bought the domain. Use these records for the apex domain
`sshekhar.in`:

| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

Changes can take from a few minutes to 48 hours to spread. GitHub's current IP addresses are
listed in its official documentation ("Managing a custom domain for your GitHub Pages site"),
so check there if the values above have changed.

### 4. Enforce HTTPS

When the DNS check passes, tick **Enforce HTTPS** in **Settings → Pages**. The certificate is
issued by GitHub automatically.

### 5. Verify

- Open https://sshekhar.in and check that every menu link scrolls to the right section.
- Open https://sshekhar.in/does-not-exist to see the 404 page.
- Open https://sshekhar.in/robots.txt and https://sshekhar.in/sitemap.xml.
- Run Google Lighthouse (Chrome DevTools → Lighthouse) and check the Performance, Accessibility,
  Best Practices and SEO scores.

## Accessibility and performance notes

- Semantic landmarks, one `h1`, a skip link, visible focus rings and descriptive `alt` text.
- Colours are set for light and dark themes. The theme follows your system setting, and the
  button in the header overrides it. The choice is saved in your browser.
- Motion is limited to a subtle underline, and it is removed for users who prefer reduced motion.
- System fonts only, so there are no external font requests. Images use `loading="lazy"`.
- The site works without JavaScript. Only the theme toggle, contact-link generation and footer
  year need it.

## Before you go live

- [ ] Replace every bracketed placeholder.
- [ ] Add real screenshots and video thumbnails, with accurate `alt` text.
- [ ] Fill in `CONFIG` in `script.js`, or leave it empty if you don't want a detail shown yet.
- [ ] Check that every claim about projects, clients, results and qualifications is accurate.
- [ ] Add `og-image.jpg` and uncomment the `og:image` tag if you want link previews.
- [ ] Test on a phone and a laptop, in both light and dark themes.
