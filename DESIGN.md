---
name: Draveta Technologies
description: A drafting-film world where software is constructed live before you.
colors:
  film: "#eef1f3"
  film-2: "#e1e6ea"
  paper: "#fbfcfd"
  ink: "#0c0e12"
  ink-2: "#353d49"
  ink-3: "#56606d"
  rule: "#c3cbd3"
  rule-2: "#8f9aa6"
  cons: "#4e9fd0"
  cons-ink: "#1c6a9a"
  ultra: "#1e2acb"
  ultra-2: "#161fa0"
  ultra-tint: "#cdd1fc"
  red: "#c93d25"
typography:
  display:
    fontFamily: "Mona Sans Variable, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6.2vw, 6rem)"
    fontWeight: "200–820"
    fontVariation: "wght"
    fontStretch: "116%"
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Mona Sans Variable, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 4.6vw, 4.1rem)"
    fontWeight: 780
    fontStretch: "114%"
    lineHeight: 0.98
    letterSpacing: "-0.034em"
  title:
    fontFamily: "Mona Sans Variable, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.1vw, 2rem)"
    fontWeight: 760
    fontStretch: "112%"
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Mona Sans Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Martian Mono Variable, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
  mono:
    fontFamily: "Martian Mono Variable, ui-monospace, monospace"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1.5
    fontVariant: "tabular-nums"
rounded:
  none: "0"
spacing:
  gutter: "clamp(16px, 5vw, 72px)"
  nav-height: "72px"
  grid-major: "120px"
  grid-minor: "24px"
components:
  button-primary:
    backgroundColor: "{colors.ultra}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.ultra-2}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.film}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
---

# Design System: Draveta Technologies

## Overview

**Creative North Star: "The Drafting Board"**

Draveta's interface is a blueprint sheet where software construction happens in real time. Everything draws from first principles—geometry, datum lines, measurement callouts—before ink fills and color arrives. The visitor watches the company's own mark assemble from arcs and compass circles, then product interfaces render on the same construction lines. This isn't metaphorical slowness; lines move at constant pen speed, then the finished drawing solidifies. The world refuses the SaaS category default: no rounded cards, no icon tiles, no glass, no gradient overlays. Instead, hairline frames with dimension ticks, a paper-and-ink material, and ultramarine as the single committed color that owns the whole field when action matters.

**Key Characteristics:**
- Drafting paper aesthetic (grid background, construction geometry, measurement callouts)
- Square corners and hairline borders throughout; rounding only on device frames (the phone demos) and status dots
- Progressive build: lines draw, then ink fills, then color arrives
- Ultramarine as the sole high-saturation accent; used sparingly and forcefully
- Motion grammar: stroke-dashoffset drawing at constant speed, exponential ease-out, reduced motion shows finished state
- Pen-plotter metaphor: the loader splits along the mark's 45° diagonal; the hero pins and scrubs construction/render progress on scroll

## Colors

Draveta's palette is a three-layer order: drafting film (cool white ground), construction geometry (non-photo blue lines and labels), and finish (ink black for text and the mark, ultramarine for commitment and call-to-action).

### Primary
- **Ultramarine** (#1e2acb): The committed built color. Owns entire fields (the products blueprint section and the loader sheet), all primary CTAs, active UI states, and the render sweep line. Used at full strength; never decorative, never tinted as a background wash.
- **Ultramarine Dark** (#161fa0): Hover state for buttons and interactive elements using the primary ultramarine.

### Secondary
- **Construction Blue** (#4e9fd0): All drafting geometry—dimension lines, frame outlines, compass circles, grid annotations. Non-photo blue per pen-plotter tradition.
- **Construction Ink** (#1c6a9a): Dimension callouts, labels on the grid, secondary marks that sit atop construction-blue lines.

### Tertiary
- **Redline** (#c93d25): Pending states, form errors, missing items in scanning UIs. Used exactly as industrial drawing markup uses red.

### Neutral
- **Drafting Film** (#eef1f3): The ground; page background, subtle grid base, the default canvas. Cool and faintly blue-grey.
- **Film Secondary** (#e1e6ea): Scrollbar, lighter grid layer (fine 24px grid at reduced opacity).
- **Paper** (#fbfcfd): Card and form backgrounds, container surfaces; pure white with no tint.
- **Ink** (#0c0e12): All body text, the finished mark line weight, strong emphasis.
- **Ink Secondary** (#353d49): Supporting text (subheadings, helper copy), less critical labels.
- **Ink Tertiary** (#56606d): Form labels, placeholder text, de-emphasized metadata.
- **Rule** (#c3cbd3): Normal weight borders, form field strokes, divider lines.
- **Rule Secondary** (#8f9aa6): Fine rules, disabled form fields, low-contrast dividers.
- **Ultramarine Tint** (#cdd1fc): Used only on white-text fields within the blueprint section (products chain text on ultramarine background).

### Named Rules

**The Ultramarine Law.** Ultramarine is the site's only saturated accent and the signal for "built" and "action". It appears on CTAs (buttons, links), the entire products section, the loader, and active form states. No ultramarine in neutral prose or the film grid; line art in the services list is the one illustrative use. It is never decoration.

**The Hairline Rule.** All borders are 1px except section dividers (2px) and button registration marks (1.5px). Corners are square; the only radii are the phone demo frames (30px), their buttons (10px) and round status dots. This is the drafting aesthetic: frames are drawn with a straight edge and a compass, not rounded.

## Typography

**Display Font:** Mona Sans Variable (wdth 75–125, wght 200–900; fallback system-ui, sans-serif)
**Body Font:** Mona Sans Variable
**Label/Mono Font:** Martian Mono Variable (fallback ui-monospace, monospace)

**Character:** Mona Sans carries the entire hierarchy from hairline (display at page load) to black (display when fully rendered). Weight inking is the core interaction: as the hero builds, the headline gains weight and shifts to construction blue, then ink. The typeface is set wide (font-stretch 110–125%) for display and headline scales, making text bold and geometric. Martian Mono is reserved strictly for measurements, codes, data fields, and UI labels—it is the site's voice of precision.

### Hierarchy
- **Display** (wght 200–820 dynamic, 116% stretch, 6.2vw fluid, 0.9 line-height): Hero title only. Weight is animated from 200 (hairline) during page load, reaching 820+ when inked.
- **Headline** (wght 780, 114% stretch, 4.6vw fluid, 0.98 line-height): Section headings (h2). Used on home and all product/content pages.
- **Title** (wght 760, 112% stretch, 2.1vw fluid, 1 line-height): Subsection headings, product names in the chain, and tertiary emphasis.
- **Body** (wght 400, 1.0625rem fixed, 1.55 line-height): All running text, UI content, and labels inside forms and tables.
- **Label** (Martian Mono, 0.75rem, 1.5 line-height, tabular-nums): Form labels, dimension callouts, metadata, data table headers.
- **Mono** (Martian Mono, 0.7rem, 1.5 line-height, tabular-nums): Code snippets, measurement readouts in the loader, internal UI labels.

### Named Rules

**The Weight Ramp Rule.** Mona Sans weight is never static in the hero: it starts at 200 (hairline) as the loader finishes, then climbs through 620 during the first ~2.9 seconds as the mark finishes construction. All other type on the page is fixed weight. Only the hero injects motion into weight; the rest of the system is steady.

**The Mono Law.** Martian Mono appears only on measurement callouts, inside the loader readout, on data tables, in form labels, and inside demo UI boxes (wireframes transitioning to rendered). Never use it for body prose or primary messaging. Its single job is to convey precision and engineering.

## Layout

The site uses a fluid gutter (clamp(16px, 5vw, 72px)) that expands from 16px on small phones to 72px on 4K displays. The navigation is fixed at 72px height.

The homepage hero is pinned (sticky) and takes up 290svh (290% of viewport height) of scroll space. It has three CSS variables driving simultaneous effects: `--a` (animation progress 0–1 during initial 2.9s), `--s` (scroll progress 0–1 as the hero scrolls out), and `--r` (render progress 0–1 during the frame render phase). This creates the signature moment: the knot construction on `--a`, then scrolling the hero activates `--s` to draft and render three product UI frames.

Content sections use a two-column grid (1.35fr / 1fr) for head + prose, collapsing to single column on smaller screens. The services grid is 1.15fr / 1fr for column widths. Products (chain) are a 6-column grid at desktop (or 1 column on mobile), each product a 45° rotated diamond node with up/down labeled connectors.

The grid background at the page root is a two-layer effect: 120px major lines at 10% opacity (construction blue) and 24px minor lines at 4.5% opacity. The blueprint section (products) inverts to white lines on ultramarine at the same rhythm.

All padding uses the same fluid scale: section tops/bottoms are clamp(88px, 12vw, 176px). Responsive breakpoints are 1100px (nav condensed), 899px (nav collapses to menu), 819px (hero layout shifts), and 560px (single-column forms).

## Elevation & Depth

One depth move: rendered demo panels and the nav product panel carry a soft offset drop shadow (demo panels `0 22px 44px -20px` ink at 32%, scaled by render progress). Everything else is flat, and depth comes from layering: tonal separation (ink on film, paper on film), border/frame presence, and z-index stacking. The one exception is the demo UI render pass: a 2px sweep line with a soft glow (box-shadow: 0 -10px 18px -6px with 35% ultramarine) travels downward as `--r` progresses from 0 to 1, simulating a pen plotter render beam.

The form field focus uses a 2px solid outline (outline-offset: -1px) in ultramarine; no glow, no shadow.

Reduced motion removes animations but shows the final state (outlines draw fully, images render opaque, the loader snapshot is complete and split).

## Shapes

All corners are square (border-radius: 0). Silhouettes are rectilinear: buttons, cards, inputs, and frames are drawn as rectangles. The only curved element is the compass circles in the knot construction, which are SVG paths (part of the drafting geometry, not component styling).

Registration marks appear on buttons as optional corner ticks (8px squares, 1.5px strokes) that reveal on hover, drawn with ::before and ::after pseudo-elements positioned at -7px inset. These are the only deliberate decorative geometry.

Borders are hairline (1px) except section dividers (2px top borders) and form dashed containers (1px dashed in construction blue). Frames around demo UIs have 1px solid borders; the frame outline itself is an SVG path that strokes in using stroke-dashoffset.

## Components

### Buttons

**Character:** Flat, architectural. No shadows or gradients. Borders are 1.5px. All text is uppercase via CSS font-weight (640–800) and font-stretch (105%); no `text-transform: uppercase` (to preserve select-and-copy). Hover reveals corner registration marks.

- **Primary (Ultra)**: background {colors.ultra}, text white, 52px min-height, padding 0 22px. Hover darkens to {colors.ultra-2}. Focus ring is 2px solid ultramarine at -1px offset.
- **Secondary (Line)**: transparent background, {colors.ink} border 1.5px, {colors.ink} text. Hover reverses to {colors.ink} background and {colors.film} text.
- **Tertiary (Ink)**: {colors.ink} background, {colors.film} text. Hover shifts to {colors.ultra}.
- **Small**: 44px min-height, padding 0 16px, font-size 0.95rem.

All buttons transition colors over 0.25s with the ease cubic-bezier(0.16, 1, 0.3, 1). Registration marks animate opacity and transform over 0.2s and 0.35s respectively.

### Navigation

Fixed at 72px height with 0 bottom margin. Background starts transparent, becomes {colors.film} with a 1px bottom rule when scroll moves. Flex layout with gap 36px. Logo is inline-flex, 12px gap, mark is 34×34px, wordmark is auto width and 25px height.

Dropdown panel (nav-panel) opens on hover/focus, grid 3 columns, background {colors.paper}, 1px border {colors.ink}, positioned absolute below the trigger, shadow 0 24px 48px -24px with 35% ink opacity.

Mobile menu collapses at 899px to a hamburger (48×48 button, 1.5px border). Menu slides down full-width (fixed inset) with 0.35s var(--ease) animation.

### Forms

Background {colors.paper}, border 1px {colors.rule-2}, square corners. Inputs and selects: {colors.film} background, 1px border {colors.rule-2}, padding 12px 13px, font-size 1rem. On focus: 2px solid {colors.ultra} outline (offset -1px), {colors.ultra} border, white background. Hover darkens border to {colors.ink-3}.

Textarea resizes vertically, min-height 96px. Select uses a data-uri dropdown arrow (SVG, no appearance replacement library).

Error state: border {colors.red}. Placeholder text is {colors.ink-3}.

All form containers have an optional dashed border via ::before (1px dashed {colors.cons}, inset -9px).

### Demo UIs (.ui)

Wireframe-to-rendered transition. All color mixing is driven by `--r` (render progress 0–1):
- Lines fade in: color-mix(in srgb, {colors.rule} var(--k), {colors.cons}) where --k = calc(var(--r, 1) * 100%)
- Text fades in: color-mix(in srgb, {colors.ink} var(--k), transparent)
- Accent (buttons, checkmarks) fades in: color-mix(in srgb, {colors.ultra} var(--k), transparent)
- Background fades in: color-mix(in srgb, {colors.paper} var(--k), transparent)

Outside the hero (product pages), `--r` defaults to 1 (rendered). Inside the hero, `--r` is calculated from scroll progress.

Buttons inside UIs use {colors.ultra} text and background, hover to {colors.ultra-2}. Checkmark indicators use {colors.ultra} background with white text.

Chip/tag elements: 1px border, transparent background, {colors.ink-3} text. Variant .s1 adds {colors.ultra} border and text. Variant .s2 fills with {colors.ultra} background and white text.

### Title Block (.tblock)

Four-column grid (1fr × 4), 2px gap and border, 1px gaps between columns as a pseudo-border effect (achieved with grid and background-color). Each cell is 14px padding, {colors.paper} background. Used for credentials display (15 years, 24/7, enterprise, security).

dt is {colors.ink-3} at 0.72rem. dd is {colors.ink} at 1.15rem, 600 weight. Large text cells (.big dd) are 3rem, 800 weight, 112% stretch.

### Products Chain (.chain)

Grid layout: 6 columns at desktop (1 column on mobile), 520px height. Each `<li>` is a product with a rotated 45° diamond node (13×13px, 1.5px border, background {colors.ultra} or {colors.film}). A horizontal line runs through the center (1.5px, current color), drawn with scaleX via transform-origin: left and `transform: scaleX(var(--i))`.

Below/above each node is a vertical connector (1.5px tall × 30px, drawn with scaleY). Product name, stage label, and description are positioned absolutely and slide up/down with translateY as the chain draws. All strokes and fills have separate timing via staggered transitions.

On the blueprint section (sec-chain), the chain becomes white text on {colors.ultra}, diamond nodes invert to white background, and text uses {colors.ultra-tint}.

On mobile, the chain becomes a vertical list: left side has a vertical line (1.5px, drawn with scaleY top-to-bottom), each item is a flex row with diamond and label beside, 36px bottom padding.

### Scanner Phone (.ui-phone)

Rounded corners at 30px (unique exception; the phone device itself is a physical product with rounded corners, not an app interface).  12px padding, 12px bottom padding. Contains a status bar, notch (dashed border, 10px radius), and interior content. Buttons inside have 10px radius for button consistency (corners of the physical button).

### Frame (Demo Frames in Hero)

SVG outline drawn with stroke-dasharray: 1, stroke-dashoffset calculated from `--fd` (frame draw progress). Dimension lines and ticks inside the SVG also use stroke-dashoffset. Below the frame, a `<div class="frame-body">` holds the UI content and displays a render sweep line (2px ultramarine, height positioned via calc(var(--r) * 100%)) that glows with box-shadow.

Frame tag (name + dimensions) appears below, positioned absolute, font-size 0.7rem, Martian Mono, {colors.cons-ink} text.

## Do's and Don'ts

### Do:
- **Do** use the three-layer color order: drafting film (ground), construction blue (geometry), ink + ultramarine (finish).
- **Do** keep borders hairline (1px) and corners square (0 radius) on all UI elements except the scanner phone device frame (30px radius only).
- **Do** animate SVG strokes using stroke-dasharray: 1 and stroke-dashoffset driven by CSS variables (--a, --s, --r), not SVG animations or JS transitions.
- **Do** make ultramarine decisions sparingly: CTAs, product section, loader, active states only. Never tint it or use it decoratively.
- **Do** use Martian Mono strictly for measurements, codes, data, and internal UI labels. Never use it for body prose or primary messaging.
- **Do** respect reduced-motion preference: show the finished drawing (all strokes at offset 0, all opacity at 1) and hide timing-based animations (duration 0.01ms).
- **Do** keep button text uppercase via font-weight and font-stretch, never `text-transform: uppercase` (preserves user select-and-copy).
- **Do** size type fluidly with clamp() for hero, section heads, and key labels; it scales from mobile to 4K without breakpoints.

### Don't:
- **Don't** add drop shadows, glows, or soft backgrounds (no blur, no mix-blend-mode).
- **Don't** round corners anywhere except the phone device mockup (30px).
- **Don't** use gradients, transparency overlays, or color blends in the palette itself.
- **Don't** use icon fonts, emoji, or decorative illustration on the UI layer (the knot and loader geometry are drafting-plane elements, not components).
- **Don't** animate through JavaScript; use CSS custom properties and CSS transitions/keyframes.
- **Don't** place ultramarine on neutral prose or use it in tints for fill states. Ultramarine only signals action, construction, and the built state.
- **Don't** invent new type scales or weight assignments; the hierarchy is the hierarchy.
- **Don't** use the fine grid (24px) or construction blue for UI elements; those are drafting-plane backdrop, never component styling.
