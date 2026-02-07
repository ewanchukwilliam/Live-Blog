<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}
</script>

<template>
  <UPage>
    <UPageBody>
      <ContentRenderer v-if="page" :value="page" />

      <!-- Author section -->
      <div class="flex justify-end mt-12">
        <div class="flex items-center gap-3">
          <div class="text-right">
            <p class="font-semibold">William Ewanchuk</p>
            <p class="text-sm text-muted">Author</p>
          </div>
          <UAvatar
            src="/avatar.jpg"
            alt="William Ewanchuk"
            size="lg"
          />
        </div>
      </div>

      <!-- Comments section -->
      <UDivider class="my-8" />
      <section class="mt-8">
        <h2 class="text-2xl font-bold mb-4">Comments</h2>
        <p class="text-muted">Comments coming soon...</p>
        <!-- TODO: Add your comment component here -->
      </section>
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc :links="page.body.toc.links" title="On this page" highlight />
    </template>
  </UPage>
</template>
