# William's Blog

Personal blog and portfolio site.

# TODO:
- [ ] finish the auth route

## Tech Stack

- **Nuxt 4** - Vue framework with SSR
- **Nuxt UI** - Component library with Tailwind CSS
- **Nuxt Content** - Markdown-based blog posts
- **Vercel** - Hosting

## Structure

```
Blog-Frontend/    # Nuxt application
  app/
    components/   # Vue components
    composables/  # useBlogs, useBlogNavItems
    pages/        # Routes
  content/
    blog/         # Markdown blog posts
```

## Quick Start

```bash
cd Blog-Frontend
npm install
npm run dev
```

## Adding Posts

Create `content/blog/post-name.md`:

```md
---
title: Post Title
description: Brief description
date: 2025-01-15
---

Content here...
```

Posts auto-populate in nav menu and blog listings.

## Deployment

Push to main. Vercel builds and deploys automatically.

## Docs

- [Nuxt UI Components](https://ui.nuxt.com/docs/components)
- [Nuxt Content](https://content.nuxt.com)
- [Nuxt Docs](https://nuxt.com/docs)
