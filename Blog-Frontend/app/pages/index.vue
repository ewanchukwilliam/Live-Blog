<script setup lang="ts">
import type { ContentTocLink } from '@nuxt/ui'

const links = ref<ContentTocLink[]>([
  {
    id: 'latest-posts',
    depth: 2,
    text: 'Latest Posts'
  },
  {
    id: 'introduction',
    depth: 2,
    text: 'Introduction',
    children: [
      { id: 'about-me', depth: 3, text: 'About Me' },
      { id: 'my-stack', depth: 3, text: 'My Stack' }
    ]
  },
  {
    id: 'getting-started',
    depth: 2,
    text: 'Getting Started',
    children: [
      { id: 'quick-links', depth: 3, text: 'Quick Links' }
    ]
  }
])
</script>

<template>
  <UPage v-motion-fade>
    <template #left>
      <UPageAside>
        <UContentToc :links="links" title="On this page" highlight highlight-color="neutral" color="neutral" />
      </UPageAside>
    </template>

    <UPageBody>
      <section class="scroll-mt-20 py-8">
        <h2 id="latest-posts" class="text-2xl font-bold scroll-mt-20">Latest Posts</h2>
        <p class="text-muted">Check out my latest posts and articles.</p>
        <Posts />
      </section>

      <section class="scroll-mt-20 py-8">
        <h2 id="introduction" class="text-2xl font-bold scroll-mt-20">Introduction</h2>
        <p class="text-muted">Learn more about me and what I do.</p>

        <div class="mt-6">
          <h3 id="about-me" class="text-xl font-semibold scroll-mt-20">About Me</h3>
          <p class="text-muted">A brief introduction about who I am.</p>
        </div>

        <div class="mt-6">
          <h3 id="my-stack" class="text-xl font-semibold scroll-mt-20">My Stack</h3>
          <p class="text-muted">Technologies I work with.</p>
        </div>
      </section>

      <section class="scroll-mt-20 py-8">
        <h2 id="getting-started" class="text-2xl font-bold scroll-mt-20">Getting Started</h2>
        <p class="text-muted">Explore the site and find what you need.</p>

        <div class="mt-6">
          <h3 id="quick-links" class="text-xl font-semibold scroll-mt-20">Quick Links</h3>
          <div class="flex flex-wrap gap-2">
            <UButton icon="i-lucide-rocket" size="md" color="primary" variant="solid" to="/blogs/">
              Blogs
            </UButton>
            <UButton icon="i-lucide-user" size="md" color="primary" variant="solid" to="/about/">
              About
            </UButton>
            <UButton icon="i-lucide-mail" size="md" color="primary" variant="solid" to="/contact/">
              Contact
            </UButton>
            <UButton icon="i-lucide-alert-triangle" size="md" color="error" variant="outline" to="/temp/">
              Test 404
            </UButton>
          </div>
        </div>
      </section>
    </UPageBody>
  </UPage>
</template>
