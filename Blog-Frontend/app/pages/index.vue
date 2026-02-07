<script setup lang="ts">
// Placeholder TOC links for UI testing
const placeholderLinks = [
  { id: "blogs", text: "Blogs", depth: 2 },
  { id: "introduction", text: "Introduction", depth: 2 },
  { id: "getting-started", text: "Getting Started", depth: 2 },
];
</script>

<template>
  <UPage v-motion-fade>
    <template #left>
      <UPageAside>
        <UContentToc :links="placeholderLinks" title="On this page" highlight />
      </UPageAside>
    </template>

    <UPageBody>

      <section id="blogs" class="scroll-mt-20 py-10">
      <UPageHeader
        title="Welcome To the Home Page"
        description="A responsive page header with title, description and actions."
      />
        <Posts />
      </section>

      <!-- Placeholder sections for TOC testing -->
      <section id="introduction" class="scroll-mt-10 py-16 min-h-[80vh]">
        <h2 class="text-2xl font-bold">Introduction</h2>
        <p class="text-muted ">
          Placeholder content for introduction section.
        </p>
        <UButton
          icon="i-lucide-rocket"
          size="md"
          color="primary"
          variant="solid"
          to="/blogs/"
          >Blog Navigations Testing</UButton
        >
      </section>

      <section id="getting-started" class="py-16 min-h-[80vh] scroll-mt-10">
        <h2 class="text-2xl font-bold">Getting Started</h2>
        <p class="text-muted ">
          Placeholder content for getting started section.
        </p>
        <UButton
          icon="i-lucide-rocket"
          size="md"
          color="primary"
          variant="solid"
          to="/about/"
		>About</UButton>
      </section>

      <div class="min-w-full flex justify-center">
        <h2>Button to non existant page to trigger error</h2>
        <UButton
          color="neutral"
          variant="ghost"
          to="/temp/"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </div>
    </UPageBody>
  </UPage>
</template>
