# WD Land Website Routes

This document lists all the routes created for the WD Land website and their corresponding purposes.

## Main Pages

| Route | File | Description | Source |
|-------|------|-------------|---------|
| `/` | `src/pages/index.astro` | Homepage with hero, about, services, and contact sections | Original site root |
| `/about` | `src/pages/about.astro` | Detailed about page with company story, values, and team | Navigation requirement |
| `/services` | `src/pages/services.astro` | Comprehensive services page with detailed offerings | Navigation requirement |
| `/projects` | `src/pages/projects.astro` | Portfolio page showcasing completed projects | Navigation requirement |
| `/contact` | `src/pages/contact.astro` | Contact page with form and contact information | Navigation requirement |

## Blog Routes

| Route | File | Description | Source |
|-------|------|-------------|---------|
| `/blog` | `src/pages/blog/index.astro` | Blog index page listing all articles | Navigation requirement |
| `/blog/[slug]` | `src/pages/blog/[slug].astro` | Individual blog post pages | Dynamic routing for blog content |

## Blog Posts

| Route | File | Description |
|-------|------|--------------|
| `/blog/welcome-to-wd-land` | `src/content/blog/welcome-to-wd-land.md` | Welcome post introducing WD Land |
| `/blog/land-development-process` | `src/content/blog/land-development-process.md` | Guide to the land development process |
| `/blog/sustainable-development-practices` | `src/content/blog/sustainable-development-practices.md` | Article on sustainable development |

## Legal Pages

| Route | File | Description | Source |
|-------|------|-------------|---------|
| `/privacy` | `src/pages/privacy.astro` | Privacy policy page | Footer link requirement |
| `/terms` | `src/pages/terms.astro` | Terms of service page | Footer link requirement |

## Notes

- All routes are functional and properly linked in the navigation
- Blog routes use Astro Content Collections for content management
- Legal pages are accessible via footer links
- All internal links point to actual pages (no placeholder routes)
- The site structure supports both static and dynamic content

## Navigation Structure

**Header Navigation:**
- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Projects (`/projects`)
- Blog (`/blog`)
- Contact (`/contact`)

**Footer Navigation:**
- All main pages
- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)

All routes have been tested and are fully functional with proper content and styling.