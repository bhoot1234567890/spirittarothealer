# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML/CSS/JS website for "Spirit Tarot Healer" - a tarot reading service website with a spiritual, mystical aesthetic inspired by ancient Indian temple art and traditional tarot symbolism.

**Contact Info**: `@mindofwallflower` (Instagram), `idhruvabhatt@gmail.com`
**Pricing**: ₹799 (3 Questions, 20-30 mins), ₹2799 (Full Spread, 45-60 mins)
**Payment Model**: Trust-based - payment accepted *after* the session
**Session Types**: Telephonic (voice call) only

## Architecture

### Structure
- **Single-page static site** - No build process or package manager
- **index.html** - Main entry point (currently the active version)
- **css/styles.css** - Custom styles and component classes
- **js/main.js** - Interactive behaviors and component initialization

### Alternative Versions
- `index_alt_color.html` - Alternative color scheme variant
- `index-new.html` - Newer version variant
- `index-tarot-vedic.html` - Vedic-inspired variant

**Note**: When making changes, clarify which version is the "active" one to update.

### Design System

**Theme**: "Deep Night Temple" - Inspired by ancient Indian temples with brass, gold, and vermillion accents on dark backgrounds.

**Color Palette**:
- `night` (#1A0F0A) - Almost black-brown (ancient stone)
- `terracotta` (#4B0000) - Deep blood-red secondary
- `primary` (#FFB300) - Luminous glowing amber/brass
- `parchment` (#FEF08A) - Luminous turmeric
- `vermillion` (#FF0000) - Vivid blood red

**Typography**:
- `Eczar` (serif) - Display font
- `Cinzel` (serif) - Decorative/headings
- `Crimson Text` (serif) - Body text
- `Great Vibes` (cursive) - Script accents

**Key Design Motifs**:
- Madhubani border patterns
- Pothi-style cards (traditional manuscript look)
- Gemstone decorations (ruby, emerald, sapphire)
- Floating tarot card animations
- Angel wing and heart glow effects

### JavaScript Architecture

**Component-based class structure** in [js/main.js](js/main.js):

- `SmoothScrollNav` - Handles smooth anchor scrolling and scroll spy for active nav highlighting
- `MobileMenu` - Mobile menu toggle (currently only toggles icon, needs full implementation)
- `ScrollAnimations` - Fade-in animations for `.pothi-card`, `.step-card`, `.service-card`
- `ScrollProgress` - Creates and updates top progress bar
- `FAQAccordion` - Expands/collapses `.faq-item` elements
- `FormHandlers` - Placeholder for future form handling
- `Analytics` - Placeholder for analytics tracking
- `App` - Main initialization class that bootstraps all components

**Initialization**: Components auto-initialize via `window.SpiritTarotApp.init()`

## Development Tasks

### Local Development
Simply open `index.html` in a browser. No server required, though for proper font loading and smooth experience, use a simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js (if you have npx)
npx serve
```

### Making Changes
1. **HTML changes**: Edit [index.html](index.html) directly
2. **Style changes**: Edit [css/styles.css](css/styles.css) or Tailwind classes in HTML
3. **Behavior changes**: Edit [js/main.js](js/main.js)

### Testing Changes
- Test on mobile viewport (responsive design is key for this project)
- Test smooth scroll navigation
- Verify animations trigger on scroll

## Known Issues & Future Work

See [website-qol-improvements.md](website-qol-improvements.md) for comprehensive QoL improvements documentation.

**High Priority**:
- Mobile menu slide-out implementation (currently only toggles icon)
- WhatsApp floating button for quick contact
- Testimonials section
- FAQ section expansion
- Color contrast verification (WCAG compliance)

**Implemented Features** (in CSS/JS but may not be in HTML):
- Scroll progress indicator (`.scroll-progress` class)
- WhatsApp floating button (`.whatsapp-float` class)
- Card flip animations (`.tarot-card-flip` class)
- FAQ accordion (`.faq-item` class + JS handler)
- Loading skeletons (`.skeleton` class)
- Urgency badges (`.urgency-badge` class)

## Important Context

- **Brand Identity**: Focuses on "TAROT. GUIDANCE. HEALING." - maintain this triad in copy
- **Tarot Symbolism**: The site references specific cards (Ace of Cups, The Lovers, The Empress, Pentacles) - see [tarot-images-analysis.md](tarot-images-analysis.md) for detailed symbolism
- **Cultural Context**: Merges traditional tarot with Indian spiritual aesthetics (Madhubani borders, pothi-style cards, gemstone decorations)

## File Reference Summary

- [index.html](index.html:1) - Main website (759 lines) - Complete single-page site with all sections
- [css/styles.css](css/styles.css:1) - Custom styles (529 lines) - Component classes and animations
- [js/main.js](js/main.js:1) - JavaScript behaviors (370 lines) - Component classes with auto-initialization
- [tarot-images-analysis.md](tarot-images-analysis.md:1) - Detailed analysis of promotional imagery and tarot symbolism
- [website-qol-improvements.md](website-qol-improvements.md:1) - Comprehensive QoL improvements list with 35 prioritized items
