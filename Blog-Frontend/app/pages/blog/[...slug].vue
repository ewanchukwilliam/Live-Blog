<script setup lang="ts">
onMounted(async () => {
  const { default: Typeit } = await import("typeit");
  const heading = document.querySelector("h1");
  if (heading) {
	heading.textContent = "";
    new Typeit(heading, {
      strings: [page.value?.title ?? ""],
      speed: 50,
      cursor: true,
    }).go();
  }
});

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
</script>

<template>
  <UPage>
    <UPageBody class="flex flex-col items-center min-w-full">
      <ContentRenderer v-if="page" :value="page" class="max-w-5xl flex-row" />

      <!-- Author section -->
      <div class="flex flex-row justify-between min-w-5xl">
        <!-- Comments section -->
        <section class="mt-8">
          <h2 class="text-2xl font-bold mb-4">Comments</h2>
          <p class="text-muted">Comments coming soon...</p>
          <!-- TODO: Add your comment component here -->
        </section>

        <div class="flex justify-end mt-12">
          <div class="flex items-center gap-3">
            <div class="text-right">
              <p class="font-semibold">William Ewanchuk</p>
              <p class="text-sm text-muted">Author</p>
            </div>
            <UAvatar
              src="/images/avatar.png"
              alt="William Ewanchuk"
              size="lg"
            />
          </div>
        </div>
      </div>
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <div class="flex flex-col">
        <Calendar :date="page?.date" />
        <UContentToc
          :links="page.body.toc.links"
          title="On this page"
          highlight
        />
      </div>
    </template>
  </UPage>
</template>
