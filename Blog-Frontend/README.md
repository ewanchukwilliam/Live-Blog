# William's Blog

Personal blog and portfolio site built with Nuxt 3.

## Tech Stack

- **Nuxt 4** - Vue framework with SSR
- **Nuxt UI** - Component library with Tailwind CSS
- **Nuxt Content** - Markdown-based content management
- **Vercel** - Hosting and deployment

## Features

- Dynamic blog system with markdown files
- Automatic navigation menu from blog posts
- Date-sorted blog listings
- Table of contents for blog posts
- Dark/light mode toggle
- Contact form
- Responsive design

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Blog Posts

Create a new markdown file in `content/blog/`:

```md
---
title: My Post Title
description: A brief description
date: 2025-01-15
---

# My Post Title

Content goes here...
```

The post will automatically appear in navigation and blog listings.

## Project Structure

```
app/
  components/     # Vue components
  composables/    # Shared composables (useBlogs, etc.)
  pages/          # Route pages
content/
  blog/           # Blog posts (markdown)
public/           # Static assets
```

## Deployment

Deployed on Vercel. Push to main to trigger a deploy.

Note: Uses in-memory SQLite for Nuxt Content on serverless. Routes are prerendered at build time.

## Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```
