# Project Memory

## Animation & UX Direction

- **Premium modern motion design** — purposeful, refined animations that feel Apple/SaaS-inspired
- **Smooth scroll storytelling** — Lenis-driven smooth scrolling for narrative flow
- **Staggered reveal animations** — sequential element reveals on scroll for depth
- **Minimal elegant micro-interactions** — subtle hover, tap, and state feedback
- **Mobile-first premium layouts** — every interaction optimized for touch from the start
- **Bento grid compositions** — modular, asymmetric card layouts for visual interest
- **Layered visual hierarchy** — depth through motion, scale, and elevation (not clutter)
- **Apple/SaaS-inspired smooth UI motion** — spring-based physics, ease-out curves, no bouncy easings
- **Luxury international school aesthetic** — refined, confident, premium without being ostentatious

## Libraries

| Library | Purpose |
|---------|---------|
| **Framer Motion** | React animation library for staggered reveals, spring gestures, layout animations |
| **Lenis** | Smooth scroll engine for parallax and scroll-driven storytelling |
| **Lucide Icons** | Consistent, minimal icon set replacing inline SVGs |

## Performance Rules

- Keep animations lightweight — prefer CSS transforms and opacity, avoid animating layout properties
- Avoid excessive motion — respect `prefers-reduced-motion`, keep animations purposeful
- Maintain excellent mobile performance — 60fps on mid-range devices, no jank
- Cloudflare Pages compatible — no server-side animation dependencies, static-first
