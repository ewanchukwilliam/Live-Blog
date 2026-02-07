<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const blogNavItems = await useBlogNavItems()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    icon: "i-lucide-house",
    to: "/",
  },
  {
    label: "Blogs",
    icon: "i-lucide-box",
    to: "/blogs/",
    children: blogNavItems.value,
  },
  {
    label: "About",
    icon: "i-lucide-info",
    to: "/about/",
  },
  {
    label: "Contact me",
    icon: "i-lucide-mail",
    variant: "solid",
    to: "/contact/",
  },
])
</script>
<template>
    <UNavigationMenu :items="items" />
</template>
