# Meard website

Non-profit AI lab landing site for [Meard](https://github.com/Meard-AI).

## Stack

- **Vite** — bundler and dev server
- **Tailwind CSS v4** — `@tailwindcss/vite` + CSS-first `@theme` tokens
- **HTMX 2** — mobile nav, tools partial load/refresh, contact confirmation swap

## Design

- Visual world: **Jacquard punch loom** (midnight silk, gold weft, cream punch cards)
- Product truth: `PRODUCT.md`
- Design system: `DESIGN.md`

## Develop

```bash
npm install
npm run dev
```

Open http://127.0.0.1:5173/

## Build

```bash
npm run build
npm run preview
```

## HTMX partials

| Path | Role |
|------|------|
| `public/partials/tools.html` | Tool cards (loaded on page load + Refresh) |
| `public/partials/contact-sent.html` | Post-submit confirmation panel |

## Replace before production

- Confirm contact email (`hello@meard.ai` is a placeholder)
- Swap any legal entity name when ready
