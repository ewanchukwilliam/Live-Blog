<script setup lang="ts">
const blogs = await useBlogs()

const posts = computed(() =>
  blogs.value?.map((blog, i) => ({
    title: blog.title || 'Untitled',
    description: blog.description || '',
    image: blog.image || `https://picsum.photos/seed/${blog.path.replace(/\//g, '-')}/800/400`,
    date: blog.date || '',
    to: blog.path
  })) || []
)
</script>

<template>
  <UBlogPosts :posts="posts" />
</template>
