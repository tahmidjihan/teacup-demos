# Teacup Dynamic Demo Engine

## Project Overview
A Next.js 15 application that generates dynamic dental website demos from URL parameters. Each URL produces a fully-styled, themed dental site preview — used as a sales/demo tool for the Teacup agency.

## Architecture

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3 + CSS Custom Properties (design tokens via `var()`)
- **Language**: TypeScript
- **Runtime**: Node.js 20
- **Port**: 5000 (host: 0.0.0.0)

### URL Structure
```
/v1/[niche]?name=<Business+Name>&color-theme=<1-7>&typography=<1-4>&type=<1-4>
```

**Example:**
```
/v1/dentists?name=Bright+Smile+Dental&color-theme=1&typography=1&type=1
```

### Data Files (`/data/`)
- `themes.json` — 7 color palettes (primary, secondary, accent, text)
- `typographies.json` — 4 font pairings (heading + body Google Fonts)
- `references.json` — Layout configs per niche/type (which sections to render in order)

### Key Files
- `app/v1/[niche]/page.tsx` — Main dynamic demo page; parses URL params, injects CSS vars, renders section layout
- `components/DynamicSection.tsx` — Maps section type strings to React components
- `components/HoldMyTeaWidget.tsx` — Floating "Get This Site" CTA widget (client component)
- `components/sections/` — All 20 section components (navbars, heroes, services, testimonials, footers, etc.)

### Design System
CSS variables are injected at the root element and consumed by all section components:
- `--primary`, `--secondary`, `--accent`, `--text-main`
- `--font-heading`, `--font-body`
- `--radius-pill` (9999px), `--radius-card` (1.5rem)

### Supported Niches
- `dentists` — 4 layout types (Soft Minimalist, High-Contrast Specialist, Clean Healthcare, Luxury Aesthetic)

### Available Section Types
Navbars: `navbar_floating`, `navbar_standard`, `navbar_minimal`, `navbar_transparent`
Heroes: `hero_centered`, `hero_split_right`, `hero_warm`, `hero_full_height`
Content: `trust_badges`, `services_pill_cards`, `bento_grid_services`, `testimonials`, `icon_feature_list`, `contact_section`, `gallery_grid`, `cta_ribbon`
Footers: `footer_simple`, `footer_dark`, `footer_standard`, `footer_minimal`

## Running the App
```bash
npm run dev    # Dev server on port 5000
npm run build  # Production build
npm start      # Production server on port 5000
```

## Extending
- Add new niches: add a key to `data/references.json` and create a matching route
- Add new themes: append to `data/themes.json` (IDs are referenced by URL param)
- Add new sections: create component in `components/sections/`, register in `DynamicSection.tsx`
