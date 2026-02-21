<script lang="ts" setup>
onMounted(async () => {
  const { default: Typeit } = await import("typeit");
  const title = document.querySelector("[data-slot='title']") as HTMLElement;
  let delay = 5000;
  if (title) {
    title.textContent = "";
    new Typeit(title)
      .type("William's Blog")
      .pause(delay)
      .delete()
      .type("rm -rf thefrench")
      .pause(delay)
      .delete()
      .type("Still Learnin.")
      .pause(delay)
      .delete()
      .type("Let's get in touch!")
      .pause(delay)
      .delete()
      .options({ loop: true })
      .go();
  }
});
</script>

<template>
  <UHeader>
    <template #title> William's Blog </template>
    <NavigationMenu />
    <template #right>
      <UColorModeButton />
      <AccountState />
    </template>
    <!-- This is for the Collapsed Hamburger menu items on the mobile view -->
    <template #body>
      <NavigationMenu orientation="vertical" class="w-full" />
    </template>
  </UHeader>
</template>
