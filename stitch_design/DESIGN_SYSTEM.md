# Design System: Technical Archive System

## Concept & Visual Identity
This design system is anchored in the **"Digital Archive"** concept, a visual language that treats digital work with the reverence of an architectural museum. The aesthetic is rooted in **Swiss Minimalism** and **Technical Editorial** design, prioritizing structural integrity over decorative flourish.

The brand personality is authoritative, precise, and intellectually rigorous. It evokes the feeling of navigating a high-end physical archive—organized, expansive, and permanent. The user experience is defined by high-contrast legibility, significant negative space, and a mechanical rhythm that highlights the "built" nature of software and design. Every element serves a functional or structural purpose; there are no superfluous shadows, blurs, or decorations.

---

## 🎨 Color Palette

The palette is strictly functional, utilizing extreme contrast to establish a clear information hierarchy.

| Token Name | Hex Code | Role / Usage |
| :--- | :--- | :--- |
| **Canvas / Background** | `#0F0F0F` / `#121414` | Deep Obsidian canvas. Dense, void-like space making typography illuminate. |
| **Surface** | `#1A1A1A` / `#1F2020` | Graphite for subtle container differentiation. |
| **Surface Container High** | `#292A2A` / `#343535` | Elevated surface layers. |
| **Primary Text** | `#F5F5F5` / `#E3E2E2` | Soft White for maximum readability and high-impact headlines. |
| **Secondary / Meta Text**| `#888888` / `#C4C7C7` | Muted Silver for technical metadata, coordinates, labels, timestamps. |
| **Accent / Highlight** | `#E2FF31` / `#B9D300` | Acid Lime used exclusively for high-precision markers, active states, focus rings, and critical callouts. |
| **Border / Blueprint Lines**| `#444748` / `#8E9192` (at 0.2 opacity) | 1px blueprint separation lines. |

---

## ✍️ Typography Strategy

Typography functions as the primary structural material.

| Role | Font Family | Sizes / Specs | Usage |
| :--- | :--- | :--- | :--- |
| **Headlines / Display** | **IBM Plex Serif** | `80px` (XL), `48px` (LG), `32px` (MD) | Structured, authoritative serif mimicking archival documents and academic journals. Editorial weight. |
| **Body & Labels** | **Inter** | `18px` (LG), `16px` (MD), `12px` (Meta) | Neutral, utilitarian sans-serif. High x-height and systematic clarity for dense information. |
| **Technical Marginalia** | **Inter / JetBrains Mono** | `12px` (Uppercase, `letterSpacing: 0.05em`) | Coordinates, indexes `[ 01 ]`, timestamps, Git hash tags, versioning. |

---

## 📐 Layout & Spacing

* **Strict 12-Column Fluid Grid** with architectural rigidity.
* **Margins:** Desktop: `64px`, Mobile: `20px`. Gutter: `24px`. Base Spacing Unit: `4px`.
* **Technical Marginalia:** Uses left/right margin gutters for index numbers, scroll progress, and section coordinates.
* **Asymmetry:** Primary content aligns to columns 1–8; columns 9–12 reserved for metadata, navigation, or negative space.
* **Section Rhythm:** Generous vertical spacing (`128px+`) between major sections to emphasize architectural scale.
* **Borders & Separators:** 1px solid lines create a "blueprinted" effect without drop shadows.

---

## 🧱 Shape Language & Elevation

* **Shape:** Strictly **Sharp (0px radius)**. All buttons, cards, tags, and inputs have square corners (paper / blueprint / terminal aesthetic).
* **Elevation:** Rejects shadows and blurs. Uses **Tonal Layering** and **Border Stacking** (1px `#F5F5F5` or `#444748` border with `#1A1A1A` background shift on hover).

---

## 🧩 Key Components

1. **Buttons:**
   - *Primary:* Sharp-edged box, 1px `#F5F5F5` border, Soft White text. On hover: Inverts to Soft White background with Obsidian text.
   - *Technical:* Text-only with an Acid Lime prefix (e.g. `[ 01 ] VIEW REPOSITORY ↗`).
2. **Cards (Project Archive):**
   - 1px border, no drop shadow. Top-right includes reference index `[ ARCH-024 ]`, category tags, and preview window.
3. **Inputs / Search:**
   - Underline-only or 1px border. Focus state in Acid Lime (`#E2FF31`). Labels use technical uppercase style above input.
4. **Lists & Tables:**
   - 1px full-width dividing lines. Subtle row background shift to Graphite on hover.
5. **Precision Markers:**
   - Crosshair icons (`+`), coordinates, scroll percentages (`84% SCROLLED`), active indicator dots in Acid Lime.
