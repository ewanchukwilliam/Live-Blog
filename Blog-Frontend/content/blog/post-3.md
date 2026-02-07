---
title: Building a Dynamic Blog System with Nuxt Content
description: How I set up a centralized blog system with dynamic navigation, sorting, and reusable components.
date: 2025-02-07
---

# Building a Dynamic Blog System with Nuxt Content

Today I built out the blog infrastructure for this site. Here's everything that went into it.

## The Problem

I had blog links hardcoded in multiple places - the navigation menu, the homepage, and the blog listing page. Every time I added a new post, I'd have to update all of them manually.

## The Solution: A Centralized Composable

I created a composable at `composables/useBlogs.ts` that queries all blog posts from the content directory:

```ts
export const useBlogs = async () => {
  const { data: blogs } = await useAsyncData('blogs', async () => {
    const posts = await queryCollection('content')
      .where('path', 'LIKE', '/blog/%')
      .all()

    return [...posts].sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0
      const dateB = b.date ? new Date(b.date).getTime() : 0
      return dateB - dateA
    })
  })

  return blogs
}
```

## Content Schema Configuration

For Nuxt Content v3, custom frontmatter fields need to be defined in `content.config.ts`:

```ts
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
      schema: z.object({
        date: z.string().optional(),
        image: z.string().optional(),
        description: z.string().optional(),
      })
    }),
  },
})
```

## Frontmatter Structure

Each blog post now uses this frontmatter format:

```md
---
title: My Post Title
description: A brief description for navigation menus
date: 2025-02-07
image: /images/my-image.jpg  # optional
---
```

## Dynamic Navigation Menu

The navigation menu now automatically populates from the blog posts:

```ts
const blogNavItems = await useBlogNavItems()

const items = computed(() => [
  { label: "Blogs", children: blogNavItems.value },
  // ...
])
```

## Blog Listing Page

The `/blogs` page uses `UChangelogVersions` with dynamic data:

```ts
const blogs = await useBlogs()

const versions = computed(() =>
  blogs.value?.map(blog => ({
    title: blog.title,
    description: blog.description,
    image: blog.image || `https://picsum.photos/seed/${blog.path}/800/400`,
    date: blog.date,
    to: blog.path
  }))
)
```

## Automatic Placeholder Images

Each post gets a unique but consistent placeholder image using Picsum:

```ts
`https://picsum.photos/seed/${blog.path.replace(/\//g, '-')}/800/400`
```

The path is used as a seed, so the same post always gets the same image.

## Blog-Specific Catch-All Route

Created `pages/blog/[...slug].vue` specifically for blog posts, which includes:
- Author section at the bottom
- Comments placeholder
- Table of contents

Other content pages use the generic `pages/[...slug].vue`.

## What I Learned

1. **Nuxt Content v3 requires schema definitions** for custom frontmatter fields
2. **Composables are auto-imported** in Nuxt - just create the file
3. **Use consistent date formats** (`YYYY-MM-DD`) for reliable sorting
4. **Picsum seeds** create reproducible random images

## Next Steps

- Add actual comment functionality
- Implement blog categories/tags
- Add reading time estimates
- Create an RSS feed
