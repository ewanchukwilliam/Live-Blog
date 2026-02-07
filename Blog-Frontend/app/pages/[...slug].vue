<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

// Placeholder TOC links for UI testing
const placeholderLinks = [
  { id: "blogs", text: "Blogs", depth: 2 },
  { id: "introduction", text: "Introduction", depth: 2 },
  { id: "getting-started", text: "Getting Started", depth: 2 },
  { id: "installation", text: "Installation", depth: 3 },
  { id: "configuration", text: "Configuration", depth: 3 },
  { id: "usage", text: "Usage", depth: 2 },
  { id: "api-reference", text: "API Reference", depth: 2 },
];
</script>

<template>
  <UPage>
    <UPageBody>
      <ContentRenderer v-if="page" :value="page" />

      <section id="blogs" class="">
        <UPageHeader
          title="Welcome To the Home Page"
          description="A responsive page header with title, description and actions."
        />
        <Posts />
      </section>

      <!-- Placeholder sections for TOC testing -->
      <section id="introduction" class="py-16">
        <h2 class="text-2xl font-bold">Introduction</h2>
        <p class="text-muted mt-4">
          Placeholder content for introduction section.
        </p>
      </section>

      <section id="getting-started" class="py-16">
        <h2 class="text-2xl font-bold">Getting Started</h2>
        <p class="text-muted mt-4">
          Placeholder content for getting started section.
        </p>
      </section>

      <section id="installation" class="py-16">
        <h3 class="text-xl font-bold">Installation</h3>
        <p class="text-muted mt-4">
          Placeholder content for installation section.
        </p>
      </section>

      <section id="configuration" class="py-16">
        <h3 class="text-xl font-bold">Configuration</h3>
        <p class="text-muted mt-4">
          Placeholder content for configuration section.
        </p>
      </section>

      <section id="usage" class="py-16">
        <h2 class="text-2xl font-bold">Usage</h2>
        <p class="text-muted mt-4">Placeholder content for usage section.</p>
      </section>

      <section id="api-reference" class="py-16">
        <h2 class="text-2xl font-bold">API Reference</h2>
        <p class="text-muted mt-4">
          Placeholder content for API reference section.
        </p>
      </section>
    </UPageBody>

    <template #right>
      <UContentToc :links="placeholderLinks" title="On this page" highlight />
    </template>
  </UPage>
</template>
