<script setup lang="ts">
const blogs = await useBlogs()

const posts = computed(() =>
  blogs.value?.map((blog, i) => ({
    title: blog.title || 'Untitled',
    description: blog.description || '',
    image: blog.image || `/images/blog/post-${(i % 3) + 1}.jpg`,
    date: blog.date || '',
    to: blog.path
  })) || []
)
</script>

<template>
  <UBlogPosts :posts="posts" />
</template>
