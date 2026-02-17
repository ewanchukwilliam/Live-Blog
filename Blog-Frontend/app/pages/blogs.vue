<script setup lang="ts">
const blogs = await useBlogs()

const versions = computed(() =>
  blogs.value?.map((blog, i) => ({
    title: blog.title || 'Untitled',
    description: blog.description || '',
    image: blog.image || `https://picsum.photos/seed/${blog.path.replace(/\//g, '-')}/800/400`,
    date: blog.date || '',
    to: blog.path,
    ui: {
      container: 'max-w-lg lg:gap-y-4!'

    }
  })) || []
)
</script>

<template>

	<UPage v-motion-fade>
      <UPageHeader
		class="mb-4"
        title="Welcome to this blog"
        description="A single place to view all blogs I've written to date"
      />
		<UChangelogVersions :versions="versions" />
	</UPage>
</template>
