<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  {
    label: "Home",
    icon: "i-lucide-house",
    to: "/",
    disabled: false,
  },
  {
    label: "Blogs",
    icon: "i-lucide-box",
    to: "/blogs/",
    active: false,
    children: [
      {
        label: "Blog 1",
        icon: "i-lucide-file-text",
        description: "Use NuxtLink with superpowers.",
        to: "/blog/post-1",
      },
      {
        label: "Blog 2",
        icon: "i-lucide-file-text",
        description: "Display a modal within your application.",
        to: "/blog/post-2",
      },
      {
        label: "NavigationMenu",
        icon: "i-lucide-file-text",
        description: "Display a list of links.",
        to: "/docs/components/navigation-menu",
      },
      {
        label: "Pagination",
        icon: "i-lucide-file-text",
        description: "Display a list of pages.",
        to: "/docs/components/pagination",
      },
      {
        label: "Popover",
        icon: "i-lucide-file-text",
        description:
          "Display a non-modal dialog that floats around a trigger element.",
        to: "/docs/components/popover",
      },
      {
        label: "Progress",
        icon: "i-lucide-file-text",
        description: "Show a horizontal bar to indicate task progression.",
        to: "/docs/components/progress",
      },
    ],
  },
  {
    label: "About",
    icon: "i-lucide-info",
    to: "/about/",
  },
  {
    label: "Contact me",
    icon: "i-lucide-mail",
	variant:"solid",
    to: "/contact/",
  },
]);
</script>
<template>
    <UNavigationMenu :items="items" />
</template>
