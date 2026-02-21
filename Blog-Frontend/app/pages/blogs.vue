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
			v-motion
			:initial="{ opacity: 0, y: 50 }"
			:enter="{
				opacity: 1,
				y: 0,
				transition: { delay: 200, duration: 800, easing: 'easeOut' },
			}"
			class="mb-4 flex"
			title="Welcome to this blog"
			description="A single place to view all blogs I've written to date"
		/>
		<UChangelogVersions
			v-motion
			:initial="{ opacity: 0, y: 50 }"
			:enter="{
				opacity: 1,
				y: 0,
				transition: { delay: 400, duration: 800, easing: 'easeOut' },
			}"
			:versions="versions"
			class="lg:min-w-7xl"
		/>
	</UPage>
</template>
