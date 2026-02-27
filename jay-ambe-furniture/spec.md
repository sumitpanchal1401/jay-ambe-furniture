# Jay Ambe Furniture

## Current State
The website has an existing SVG logo at `/assets/generated/logo-jay-ambe.svg` — a minimal sofa outline in #111827. It is referenced in Header.tsx (h-10/h-12), Footer.tsx (h-9), and index.html (favicon).

## Requested Changes (Diff)

### Add
- New premium SVG logo: house shape outline with a minimal sofa/chair inside, gold accent color (#C6A15B) for the furniture element, house in #374151, text in #111827, transparent background.
- PNG version and favicon-sized PNG generated from the SVG.

### Modify
- Replace `/assets/generated/logo-jay-ambe.svg` with the new house+furniture logo.
- Update `index.html` favicon to use the new logo.

### Remove
- Old sofa-only SVG logo (overwritten).

## Implementation Plan
1. Generate new SVG logo file with house outline + sofa accent using AI image generation or inline SVG crafting.
2. Ensure Header, Footer references remain unchanged (they already point to the same path).
3. Update index.html favicon link if needed.

## UX Notes
- Layout unchanged — only the logo asset is swapped.
- House icon left, text right, thin-line modern style.
- Gold (#C6A15B) accent on the furniture element inside the house for a luxury feel.
