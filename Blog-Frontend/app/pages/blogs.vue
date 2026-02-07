<script setup lang="ts">
const blogs = await useBlogs()

const getFallbackImage = (path: string) => {
  const num = path.match(/post-(\d+)/)?.[1] || '1'
  return `/images/blog/post-${num}.jpg`
}

const versions = computed(() =>
  blogs.value?.map(blog => ({
    title: blog.title || 'Untitled',
    description: blog.description || '',
    image: blog.image || getFallbackImage(blog.path),
    date: blog.date || '',
    to: blog.path,
    ui: {
      container: 'max-w-lg'
    }
  })) || []
)
</script>

<template>

	<UPage v-motion-fade>
      <UPageHeader
		class="mb-4"
        title="Welcome to this blog"
        description="view all updated blogs surrounding this topic"

      />
		<UChangelogVersions :versions="versions" />
	</UPage>
</template>
