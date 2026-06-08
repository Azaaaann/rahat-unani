---
name: Rahat Unani
colors:
  surface: '#f8faf9'
  surface-dim: '#d8dada'
  surface-bright: '#f8faf9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f3'
  surface-container: '#eceeed'
  surface-container-high: '#e6e9e8'
  surface-container-highest: '#e1e3e2'
  on-surface: '#191c1c'
  on-surface-variant: '#414944'
  inverse-surface: '#2e3131'
  inverse-on-surface: '#eff1f0'
  outline: '#717974'
  outline-variant: '#c0c8c3'
  surface-tint: '#3b6756'
  primary: '#00261a'
  on-primary: '#ffffff'
  primary-container: '#0f3d2e'
  on-primary-container: '#7ba894'
  inverse-primary: '#a2d1bb'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#002521'
  on-tertiary: '#ffffff'
  tertiary-container: '#003d36'
  on-tertiary-container: '#00b2a0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#beedd7'
  primary-fixed-dim: '#a2d1bb'
  on-primary-fixed: '#002116'
  on-primary-fixed-variant: '#234f3f'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#71f8e4'
  tertiary-fixed-dim: '#4fdbc8'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#005048'
  background: '#f8faf9'
  on-background: '#191c1c'
  surface-variant: '#e1e3e2'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

This design system establishes a premium, e-commerce-centric identity for a modern wellness brand rooted in Unani tradition. The aesthetic is **Modern Corporate with subtle Glassmorphism**, balancing clinical trustworthiness with luxurious, organic appeal. The target audience seeks natural healing but expects the convenience and visual polish of a high-end global skincare or wellness platform.

The UI should feel "breathable" and high-end, utilizing generous whitespace and precision-engineered components. Rather than leaning on heavy traditional patterns, the brand communicates its heritage through a sophisticated color palette and editorial-grade typography, ensuring the product is the hero of every frame.

## Colors

The palette is anchored by **Deep Forest Green (#0F3D2E)**, representing stability, health, and premium quality. This is contrasted with **Vibrant Gold (#D4AF37)** for primary calls-to-action and luxury accents, symbolizing the "royal" heritage of Unani medicine.

**Teal (#14B8A6)** is used strategically for interactive elements like success states, badges, and secondary highlights to inject a sense of modern energy. The background uses a "Soft Mint" neutral (#F8FAF9) to reduce eye strain and provide a cleaner canvas than pure white.

## Typography

The system employs a sophisticated pairing: **Libre Caslon Text** for headlines and **Plus Jakarta Sans** for UI and body text. 

Libre Caslon provides an authoritative, editorial feel that links to the brand's heritage. Plus Jakarta Sans brings a contemporary, approachable geometric warmth that ensures high legibility in dense e-commerce environments. 

Use **Label-SM** with uppercase styling and increased tracking for category headers and badges to create a distinct hierarchy between navigational labels and descriptive content.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. A strict 8px spacing scale (4, 8, 16, 24, 32, 48, 64) maintains rhythm across all components.

- **Desktop:** 40px outer margins with 24px gutters. Content should be centered with a max-width of 1280px.
- **Mobile:** 16px outer margins. Vertical spacing between product cards should be 24px to ensure distinct touch targets.
- **Depth:** Use "negative space as a divider" rather than lines wherever possible to maintain a clean, high-end feel.

## Elevation & Depth

To achieve a premium e-commerce look, the system uses **Tonal Layers** combined with **Ambient Shadows**.

1.  **Level 0 (Surface):** Soft Mint neutral background.
2.  **Level 1 (Cards):** Pure white background with a very soft, diffused shadow (0px 4px 20px rgba(15, 61, 46, 0.04)).
3.  **Level 2 (Hover/Active):** Slightly deeper shadow with a 1px Forest Green border at 10% opacity.
4.  **Glassmorphism:** Navigation bars and sticky headers should use a backdrop blur (12px) with a 70% white tint to maintain visibility of background content while providing a modern, airy feel.

## Shapes

The design system utilizes **Rounded (0.5rem)** corners as the default. This strikes a balance between the organic nature of Unani medicine and the precision of modern science. 

- **Buttons:** Fully pill-shaped (rounded-xl) to feel more "clickable" and friendly.
- **Product Images:** Should always have a subtle 8px radius to avoid the "harshness" of sharp corners.
- **Badges:** Small pill shapes with 100px radius.

## Components

### Product Cards
The heart of the e-commerce experience. Cards feature a white surface with a "Floating" shadow. The product image should be centered on a slightly darker neutral tint. Typography within the card uses a Bold Forest Green for the price and a Medium Jakarta Sans for the title.

### Buttons
- **Primary:** Forest Green background, White text. Pill-shaped.
- **Secondary:** Transparent with a 2px Gold border. Pill-shaped.
- **Ghost:** Teal text, no border. Used for "View Details" or "Compare."

### Input Fields
Soft Mint background (#F0F4F2) with no border until focused. Upon focus, a 1.5px Forest Green border appears. Labels use the "Label-MD" typography level for a structured, professional look.

### Chips & Badges
Used for "New," "Best Seller," or ingredients. These should use the Teal or Gold accents with high contrast (e.g., Teal background with 90% white text) to draw the eye without overwhelming the layout.

### Lists & Navigation
Use high-contrast Forest Green for active states. Hover states should include a subtle "underline" or "glow" effect using the Gold accent color.