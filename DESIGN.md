---
name: Meard
description: Jacquard punch-loom visual system for a local-first non-profit AI lab
colors:
  midnight-silk: "#0B1330"
  warp-shadow: "#0A0D14"
  shuttle-indigo: "#27344F"
  steel-blue: "#455368"
  gold-weft: "#D4AF37"
  gold-weft-soft: "#E8C96A"
  punch-card-cream: "#F2EBD6"
  punch-card-ink: "#1A1A14"
  silk-highlight: "#152040"
typography:
  display:
    fontFamily: "'IBM Plex Mono', ui-monospace, monospace"
    fontSize: "clamp(2.25rem, 6vw, 4.25rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "0.04em"
  motif:
    fontFamily: "'IBM Plex Mono', ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.18em"
  body:
    fontFamily: "'Source Serif 4', 'Iowan Old Style', Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  ledger:
    fontFamily: "'IBM Plex Mono', ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.gold-weft}"
    textColor: "{colors.warp-shadow}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.gold-weft-soft}"
    textColor: "{colors.warp-shadow}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.gold-weft}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  card-tool:
    backgroundColor: "{colors.shuttle-indigo}"
    textColor: "{colors.punch-card-cream}"
    rounded: "{rounded.sm}"
    padding: "20px 24px"
  punch-strip:
    backgroundColor: "{colors.punch-card-cream}"
    textColor: "{colors.punch-card-ink}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
---

# Design System — Meard

## Overview

Meard’s site is a **jacquard punch loom**: open tools are punched instruction cards; local-first capability is the gold weft that only appears when those instructions fire on hardware you own. Midnight silk is the ground. Gold weft is signal and ornament. Punch-card cream is the instruction surface. The world is textile-machine, not SaaS glass, not neon AI void.

**Mode:** Persuade (lab landing for funders/partners, with GitHub + contact actions).

**Brand mark:** Fluid blue **M** monogram. Prefer it on cream punch-card strips or as a steel-blue/shuttle-indigo embroidery on silk; do not recolor it to neon. A monochrome gold silhouette of the M is allowed as woven motif only when the full-color mark would break the weft palette.

## Colors

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Ground | midnight-silk | `#0B1330` | Page ground, hero silk |
| Deep | warp-shadow | `#0A0D14` | Footer, deepest panels |
| Panel | shuttle-indigo | `#27344F` | Tool cards, inset bays |
| Muted | steel-blue | `#455368` | Secondary labels, icons |
| Accent | gold-weft | `#D4AF37` | Headlines, primary CTAs, woven motifs |
| Soft accent | gold-weft-soft | `#E8C96A` | Hover, highlights |
| Instruction | punch-card-cream | `#F2EBD6` | Punch strips, alternate bands |
| Ink | punch-card-ink | `#1A1A14` | Text on cream |

Color strategy: **Committed** — gold weft owns large display and CTA mass on midnight silk; cream bands interrupt at loom-row scale (full-width instruction strips).

Do not introduce purple glow, electric cyan neon, or warm cream-serif “AI editorial” defaults that fight this system.

## Typography

- **Display / motif titles:** IBM Plex Mono, medium weight, wide tracking, often set in gold on silk. Pixel-dot or cross-stitch *ornament* may decorate titles; body copy stays crisp and readable.
- **Body / loom notes:** Source Serif 4 on silk (cream text) and on cream (dark ink) for funder-readable mission prose.
- **Ledger / card rows:** IBM Plex Mono for binary-looking rows, repo metadata, pin tables, row indices.

Avoid default “AI startup” faces (Inter as display, Space Grotesk, Syne, Playfair) unless a single UI chrome need forces a system stack fallback.

## Layout

- **Banded loom sequence:** full-width horizontal bands alternate silk / cream like warp lifts and card rows.
- **Punch-card header:** top strip with hole-grid pattern and navigation; logo left, actions right.
- **Module grid:** tools as content cards with punched-hole side rails (left column of dots).
- **Reading order:** mission thesis → local-first belief → research foci → open tools (real repos) → contact.
- **Spacing:** more space above section titles than below; section rhythm ~64–96px; card internal padding 20–24px.
- **Responsive:** punch strip becomes stacked rows; tool grid 1→2→3 columns; display type clamps; never stretch punched-hole units into non-circles.

## Elevation & Depth

Depth comes from **material change**, not drop shadows: silk vs cream, gold fill vs gold outline, woven SVG motif vs flat type. Minimal shadows; optional soft gold glint on primary buttons only. Active cards may use a 1px gold weft border; idle cards use steel-blue hairlines.

## Shapes

Near-zero radius (2–4px). Rectilinear loom geometry. Ornament is **woven**: diamond borders, hole grids, binary row patterns, geometric bird or M motif in gold stipple—not glassmorphism, not blobs.

## Components

- **Primary button:** solid gold weft, dark text, diamond endcaps optional (`◆ label ◆`).
- **Secondary button:** gold outline on silk or dark outline on cream.
- **Nav:** cream punch strip or thin gold links on silk; active = gold underline or filled cell.
- **Tool cards:** shuttle-indigo panels, cream titles, ledger meta (lang, license), punched hole column, link to GitHub.
- **Punch row table:** monospaced rows of 0/1 or filled/empty dots illustrating “instruction → capability.”
- **Contact:** cream band with form or mailto; no fake newsletter metrics.

## Do's and Don'ts

**Do**

- Show real Meard-AI repos with accurate one-line descriptions.
- State clearly: no models shipped yet; harness tools exist now.
- Keep local-first / own-hardware language concrete.
- Use punch-card and weave metaphors as functional structure, not empty decoration.
- Meet WCAG contrast for gold-on-silk and ink-on-cream.

**Don't**

- Claim benchmarks, funders, team size, or model downloads.
- Ship generic AI purple/cyan glow aesthetics.
- Use stock “neural network” illustrations as a substitute for woven motif or real tool proof.
- Scatter gold as tiny accents on a neutral SaaS layout—commit page-scale silk and cream bands.
- Invent testimonials or press logos.
