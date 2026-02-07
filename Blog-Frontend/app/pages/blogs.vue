<script setup lang="ts">
const blogs = await useBlogs()

const versions = computed(() =>
  blogs.value?.map((blog, i) => ({
    title: blog.title || 'Untitled',
    description: blog.description || '',
    image: blog.image || `/images/blog/post-${(i % 3) + 1}.jpg`,
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
