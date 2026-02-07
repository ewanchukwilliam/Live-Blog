<script setup lang="ts">
const blogs = await useBlogs()

const getFallbackImage = (path: string) => {
  const num = path.match(/post-(\d+)/)?.[1] || '1'
  return `/images/blog/post-${num}.jpg`
}

const posts = computed(() =>
  blogs.value?.map(blog => ({
    title: blog.title || 'Untitled',
    description: blog.description || '',
    image: blog.image || getFallbackImage(blog.path),
    date: blog.date || '',
    to: blog.path
  })) || []
)
</script>

<template>
  <UBlogPosts :posts="posts" />
</template>
