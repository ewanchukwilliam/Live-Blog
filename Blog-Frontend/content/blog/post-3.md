---
title: How I built this blog system
description: Setting up dynamic navigation and sorting with Nuxt Content.
date: 2025-01-08
---

# How I built this blog system

## The problem

I had blog links hardcoded everywhere. The nav menu, the homepage, the blog listing page. Every time I added a new post I'd have to update all of them manually. That gets old fast.

## Composables are nice

I made a composable at `composables/useBlogs.ts` that queries all blog posts from the content directory and sorts them by date. Now anything that needs blog data just calls `useBlogs()` and its always up to date.

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

## Nuxt Content v3 gotcha

Spent a while confused why my dates werent showing up. Turns out Nuxt Content v3 needs you to define custom frontmatter fields in `content.config.ts`. Otherwise it just ignores them.

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

## Placeholder images

I didnt want to make images for every post so I used Picsum. You can give it a seed and it returns a random but consistent image. I just use the blog path as the seed so the same post always gets the same image.

```ts
`https://picsum.photos/seed/${blog.path.replace(/\//g, '-')}/800/400`
```

## Blog specific pages

Made `pages/blog/[...slug].vue` just for blog posts. It has the author section at the bottom and a table of contents on the side. Other pages use the generic catch all route.

## What I learned

Nuxt Content v3 requires schema definitions for custom frontmatter. Composables are auto imported in Nuxt which is nice. Use `YYYY-MM-DD` date formats for reliable sorting.

## Why am I loving this so much? 
I didn't realize that my supermaven plugin wasn't working. I thought I had maybe just really bad autocompletion suggestions, but about 4 hours into this I realized it wasn't working at all. I've really enjoyed just building with really well made documentation. Early on I was burned with poorly written documentation in my developer journey. I wen't through an 8 month tech internship at a startup that heavily used AI just recently and it taught me to almost never ready through documentation. I've sinced avoided documentation and defaulted to the LLM's interpretation of it. I've sinced learned that even with all of the context of my codebase and all of the context of the raw documentation, LLM's will still make bad design decisions. 

They make good decisions and have tonne's of value in development I really do see that. But recently my anxiety surrounding writing code has been nagging at me. 1 it's moved me away from the most rewarding part's of coding, and two it's removed some higher skills development opportunities from me. I wish I focused more on writing maintainable code. I wish I refactored code myself more. I wish I manaully learnd the pain of removing large chunks of code. I wish I better understood the value of well written code sooner. 

I would have maybe done more with my previous internship I think if I had felt more capable in my own abilities to navigate away from the expertise of the LLM. I have lots of ground to cover again I can see that. I'm glad I really did give it as much of a chance as I did in my approach towards learning. I have no regrets that I tried to learn this way (not knowing if I were to be left behind was worth knowing). 

It definitely wasn't all doom and gloom. It was definitely good to get up to that 80% understanding much faster in a very broad sense. It also let me do a lot of that early career traversal in finding whichh parts of software development I really enjoyed. I'm glad I bothered with deploying my own applications. 

I do think my journey with lls in development has reached its limits and I need to limit my reliance on the models going forward for the benefit of my own sanity. I think there are parts of software development I can learn to love that I'm potentially missing, like more backend development. I think there's more room for me to grow there. I know I enjoy frontend and devops work right now, but I think there's ground to tread in the backend I'd like to explore on my own this time. 

Still need to add actual comments at some point. Maybe tags too.

## I'm not Anti AI
I'm anti messaging around those encouraging the ollapsing economy. yes we all volunteer our training data and it makes all of our lives easier and that's a sacrificie I think a lot of us are willing to make. I think it's fundamentally shortsighted though. It's not possible to become as amazing as it is without obfuscating the value of quality data. I don't think llm's would be possible without some inherent intellectual property theft. I think llm's at their core are just stolen data that cannot be traced back to its original data. In the same way Uber's cant be regulated as taxi drivers. Yes it's a billion dollar industry, but also its never made money... Google already exists. Sure it's being driven into the ground right now with this bizarre push for bulldozer penny pinching but it's solving an almost already solved problem.

LLM's only solve problems we have already solved. Any value they bring to the world isn't as inherently absolute as the technology it runs on. The inherent non-deterministic nature destroys it's own value. I just don't see a world that could benefit much more from LLM's that making trivial things less trivial. 

Essays weren't worth all that much to begin with. Homework was always trivialized. Education was collapsing for reasons unrelated to llms. 

A good LLM only good at doing what the world is already good at doing. It feels like a weak filler that makes a mess of good things. Any industry it supports is fundamentally less stable that it otherwise would have been without whether good or bad.

## Summary
I really enjoyed the process of working as closely as I have with documentation for this project. It's a muscle I'd like to grow once again :)j

