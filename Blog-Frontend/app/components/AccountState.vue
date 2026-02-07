<script setup>
const isLoggedIn = ref(true);
</script>
<template>
  <UTooltip v-if="isLoggedIn" text="Create Post">
    <UButton color="neutral" variant="ghost" to="/create/" icon="i-lucide-pen">
      Blog
    </UButton>
  </UTooltip>

  <UTooltip v-else text="Login Page">
    <UButton
      color="neutral"
      variant="ghost"
      to="/login/"
      icon="i-lucide-log-in"
    >
      Login
    </UButton>
  </UTooltip>
</template>
