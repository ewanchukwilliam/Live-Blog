<template>
  <footer class="border-t border-white/10 py-6">
    <div class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4">
      <p class="text-sm text-white/60">© {{ year }} My Blog. Built with Nuxt.</p>

      <div class="flex items-center gap-2 text-sm">
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
