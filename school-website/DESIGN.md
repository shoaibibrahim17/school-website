---
name: "Mother's Care High School"
description: "Premium educational website for a warm, trusted SSC-board institution in Adilabad"
colors:
  primary: "#4f46e5"
  primary-light: "#eef2ff"
  primary-deep: "#4338ca"
  secondary: "#9333ea"
  accent-warm: "#0d9488"
  neutral-bg: "#ffffff"
  neutral-surface: "#f8fafc"
  neutral-text: "#111827"
  neutral-muted: "#6b7280"
  neutral-border: "#e5e7eb"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.025em"
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  full: "9999px"
spacing:
  section: "4rem"
  section-lg: "6rem"
  container: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "16px 32px"
  card-default:
    backgroundColor: "{colors.neutral-bg}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
---

# Design System: Mother's Care High School

## 1. Overview

**Creative North Star: "The Warm Horizon"**

A bright, forward-looking school website that feels grounded in trust. This is not a trendy ed-tech landing page. It is the digital front door of a respected institution where parents send their children for a decade of formative education.

The system balances warmth with structure. Ample whitespace, generous rounded corners, and a calm blue-primary palette create approachable professionalism. Motion is purposeful but restrained: scroll reveals and hover feedback that feel responsive, not theatrical. The design exists to build confidence in parents, not to show off.

**Key Characteristics:**
- Light and airy with purposeful color accents
- Rounded everything but not juvenile — radii stop at 16px for containers
- Gradient-free surfaces at rest; gradients reserved for interactive elements only
- Typography-driven hierarchy with a single committed sans family
- Scroll-reveal animations that are gentle, not bouncy
- Mobile-first spacing that breathes generously on desktop

## 2. Colors

A bright, warm-leaning palette. Blue-primary for trust and academic credibility, with teal as a warmer secondary that softens the institutional feel.

### Primary
- **Trust Blue** (#4f46e5 / oklch(0.54 0.245 285)): Primary accent for CTAs, interactive elements, and key highlights. Appears as solid backgrounds on buttons and as tinted fills on badges and section markers.

### Secondary
- **Calm Teal** (#0d9488 / oklch(0.53 0.131 190)): A warmer accent for secondary highlights, hover states, and visual variety. Replaces purple in the gradient pair for a more grounded, less techy feel.

### Neutral
- **Clean White** (#ffffff): Primary surface color. The default background for most sections.
- **Warm Surface** (#f8fafc, tinted slate): Used as alternating section backgrounds and subtle card surfaces.
- **Soft Slate** (#f1f5f9): Borders, dividers, and subtle separation lines.
- **Anchor Text** (#111827): Primary body and heading color. High contrast for readability.
- **Muted Text** (#6b7280): Supporting information, metadata, and secondary copy.

### Named Rules

**The Gradient Ban.** Gradients on text (background-clip: text) are prohibited. Emphasis comes from weight, size, and color — not decorative texture. Solid color is more confident.

**The Single-Gradient Rule.** Gradient backgrounds are reserved for primary CTAs only. Every other surface uses solid color. When a gradient is used, it moves warm-blue to teal, not indigo to purple.

## 3. Typography

**Display & Body Font:** Inter (with system-ui, -apple-system fallback)

Inter was committed early in the project. Its clean geometry, strong weight contrast (400/500/600/700/800 available), and excellent readability at all sizes make it appropriate for a school website serving parents and administrators. The single-family approach is deliberate: one voice, well-modulated.

### Hierarchy
- **Display** (700, clamp(2.5rem, 7vw, 4.5rem), 1.1): Hero headlines only. Never used for section headers.
- **Headline** (700, clamp(1.875rem, 4vw, 3rem), 1.2): Section titles. Weight alone creates hierarchy.
- **Title** (600, clamp(1.125rem, 2.5vw, 1.375rem), 1.4): Card titles, feature names, subsection heads.
- **Body** (400, 1rem, 1.625): Paragraph text. Max line length 70ch for readability.
- **Label** (500, 0.875rem, 0.025em letter-spacing): Section kickers, metadata, button text, badges. Uppercase for kickers only.

### Named Rules
**The Scale Rule.** Minimum ratio between typographic steps is 1.25. Never reduce contrast by picking adjacent weights.

## 4. Elevation

The system uses a hybrid approach: physical shadows on interactive elements, tonal layering for structural depth.

Most surfaces are flat at rest. Cards and containers use a subtle border (1px, neutral-border) rather than a shadow to define boundaries. Shadows appear as response to state: hover on buttons and cards.

### Shadow Vocabulary
- **Card Rest** - no shadow. Borders define the card boundary.
- **Card Hover** (`0 20px 40px rgba(79, 70, 229, 0.12)`): Applied on card hover for tactile feedback.
- **Button Rest** - no shadow.
- **Button Hover** (`0 8px 24px rgba(79, 70, 229, 0.25)`): Elevation on CTA hover.
- **Modal / Overlay** (`0 25px 50px rgba(0, 0, 0, 0.15)`): For drawer or floating elements.

### Named Rules
**The Flat-by-Default Rule.** Shadows are responses, not decorations. At rest, every surface is flat.

## 5. Components

### Buttons
- **Shape:** Gently rounded rectangles (12px / rounded.lg)
- **Primary:** Trust Blue background, white text, bold weight (600). Hover: elevated with shadow, translateY(-2px). Gradient backgrounds on primary CTA only.
- **Secondary:** Transparent background, Trust Blue text, 2px solid border. Hover: border darkens, slight lift.
- **CTA size:** 16px vertical padding, 32px horizontal padding. Restrained proportions.

### Cards / Containers
- **Shape:** Rounded corners (12-16px depending on context)
- **Background:** Clean White by default; Warm Surface for alternating
- **Border:** 1px solid Soft Slate at rest
- **Hover:** Subtle elevation (Card Hover shadow), optional translateY(-2px)
- **Internal Padding:** 24px standard

### Inputs / Fields
- **Shape:** Rounded (8px / rounded.md)
- **Background:** Clean White
- **Border:** 1px solid Soft Slate at rest
- **Focus:** 2px solid Trust Blue ring, border disappears
- **Text:** Anchor Text, regular weight

### Navigation
- **Desktop:** Fixed top, transparent at scroll start, translucent white + backdrop-blur after scroll. Underline indicator on active/current link. Contrasting CTA button.
- **Mobile:** Slide-in drawer from right, full-height, translucent white background with backdrop-blur. Staggered link animation on open. Floating bottom CTA visible on scroll.

### Section Headers
- **Pattern:** Kicker badge (rounded-full, primary-light background) + Headline + body paragraph. Centered layout.
- **Kicker text:** Small uppercase label, semibold, primary color.
- **Headline:** Two-part with secondary color highlight on the second line.

## 6. Do's and Don'ts

### Do:
- **Do** use Trust Blue as the single committed accent color across the site.
- **Do** keep backgrounds light and surfaces clean. White and warm-surface are the two primary backgrounds.
- **Do** use gentle scroll-reveal animations (opacity + 20px translateY, 0.6s ease-out).
- **Do** vary spacing between sections for rhythm. Not every section gets the same padding.
- **Do** ensure all interactive elements have visible focus indicators.
- **Do** lead with real imagery. School life, campus, students — photography builds trust.
- **Do** use Inter at distinct weight intervals (400/600/700) for clear hierarchy.

### Don't:
- **Don't** use gradient text (background-clip: text). Use solid color.
- **Don't** use Indigo-to-Purple gradients. The brand moves blue-to-teal when gradients are needed.
- **Don't** rely on cards as the only layout pattern. Vary composition across sections.
- **Don't** use side-stripe borders (border-left greater than 1px for accent). Use full border, tinted background, or nothing.
- **Don't** animate CSS layout properties. Avoid animating width, height, or grid properties.
- **Don't** use bounce or elastic easings. Stick to ease-out-quart / ease-out-quint.
- **Don't** wrap everything in a max-width container. Let some elements breathe edge-to-edge.
- **Don't** use glassmorphism (backdrop-blur + semi-transparency) as a default card style. Reserve for overlay contexts only.
- **Don't** use generic stock photos of unrelated children. Use imagery that reflects the actual school community where possible.
- **Don't** use the hero-metric template (big number, small label, gradient accent, supporting stats). Counters belong in a dedicated stats section.
