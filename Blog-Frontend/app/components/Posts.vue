<script setup lang="ts">
import type { BlogPostProps } from "@nuxt/ui";

const posts = ref<BlogPostProps[]>([
  {
    title: "Nuxt Icon v1",
    description: "Discover Nuxt Icon v1!",
    image: "https://nuxt.com/assets/blog/nuxt-icon/cover.png",
    date: "2024-11-25",
  },
  {
    title: "Nuxt 3.14",
    description: "Nuxt 3.14 is out!",
    image: "https://nuxt.com/assets/blog/v3.14.png",
    date: "2024-11-04",
  },
  {
    title: "Nuxt 3.13",
    description: "Nuxt 3.13 is out!",
    image: "https://nuxt.com/assets/blog/v3.13.png",
    date: "2024-08-22",
  },
]);
</script>

<template>
  <h2 class="text-2xl font-bold mt-2">Blogs</h2>
  <p class="text-muted ">Placeholder content for introduction section.</p>
  <UBlogPosts :posts="posts" />
</template>
