# WD Land Website Routes

This document lists all the routes created for the WD Land website and their purposes.

## Main Pages

### `/` (Homepage)
- **File**: `src/pages/index.astro`
- **Purpose**: Main landing page with hero section, services overview, about section, features, testimonials, and contact form
- **Components**: Hero, Services, About, Contact sections

### `/services`
- **File**: `src/pages/services.astro`
- **Purpose**: Detailed overview of all services offered by WD Land
- **Content**: Land Acquisition, Property Development, Investment Consulting, Due Diligence, Market Analysis, Asset Management

### `/about`
- **File**: `src/pages/about.astro`
- **Purpose**: Company information, team, values, mission, and company timeline
- **Content**: Company overview, core values, team members, company milestones

### `/properties`
- **File**: `src/pages/properties.astro`
- **Purpose**: Showcase available land investment opportunities
- **Content**: Featured properties, investment process, market insights, property filters

### `/contact`
- **File**: `src/pages/contact.astro`
- **Purpose**: Contact information, contact form, FAQ, and service areas
- **Content**: Contact form, office information, FAQ section, service areas

## Blog Routes

### `/blog`
- **File**: `src/pages/blog/index.astro`
- **Purpose**: Blog homepage with featured articles, categories, and newsletter signup
- **Content**: Featured article, recent posts, categories filter, newsletter signup

### `/blog/[slug]`
- **File**: `src/pages/blog/[slug].astro`
- **Purpose**: Individual blog post pages
- **Dynamic Routes**:
  - `/blog/land-investment-trends-2024`
  - `/blog/due-diligence-checklist`
  - `/blog/maximizing-land-value`

## Content Collections

### Blog Posts
- **Location**: `src/content/blog/`
- **Files**:
  - `land-investment-trends-2024.md`
  - `due-diligence-checklist.md`
  - `maximizing-land-value.md`

## Components

### Layout Components
- `src/layouts/Layout.astro` - Main layout with SEO and meta tags
- `src/components/Header.astro` - Navigation header
- `src/components/Footer.astro` - Site footer

### Page Components
- `src/components/Hero.astro` - Reusable hero section
- `src/components/Services.astro` - Services overview
- `src/components/About.astro` - About section
- `src/components/Contact.astro` - Contact form and information

## Static Assets

### Favicon
- `public/favicon.svg` - Site favicon with WD branding

## Configuration Files

### Content Configuration
- `src/content/config.ts` - Astro content collections configuration

### Styling
- `src/styles/global.css` - Global styles and Tailwind imports
- `tailwind.config.mjs` - Tailwind CSS configuration

### Scripts
- `src/scripts/animations.ts` - Animation and interaction scripts

## Notes

- All routes are static and generated at build time
- Blog routes use Astro Content Collections for type-safe content management
- All internal links point to actual routes (no placeholder links)
- SEO optimization included on all pages
- Mobile-responsive design throughout
- Accessibility features implemented
- Performance optimized with lazy loading and efficient animations