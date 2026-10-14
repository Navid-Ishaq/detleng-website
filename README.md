# DeTLeng Foundation Website

The main DeTLeng domain for data engineering, automation, analytics and practical digital systems.

## Visitor journey

The website explains DeTLeng's services and working method, then routes project inquiries to the secure Automation Desk:

`https://automation.detleng.com/#desk`

The Automation Desk sends the inquiry to DeTLeng and a confirmation to the visitor. Legacy inquiry `mailto:` actions are upgraded in the browser by the shared modernization layer.

## Shared files

- `css/design-system.css` — brand tokens, responsive layout and the 2026 foundation refresh.
- `site-modern.js` — shared navigation CTA, inquiry routing, contact gateway, pricing CTA and ecosystem footer behavior.
- `chat-widget.js` — existing production AI assistant. Its endpoint and request behavior are intentionally unchanged.

All active pages load `site-modern.js` before `chat-widget.js`. The modernization is designed to preserve the chatbot while keeping repeated navigation and conversion behavior consistent across the static site.

## Local preview

From the repository root, run a static server and open `index.html` through it. For example:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:4173/index.html`.

## Deployment

This repository is deployed separately through GitHub Pages and the custom domain in `CNAME`. Local changes must be reviewed before the repository owner commits and pushes them.
