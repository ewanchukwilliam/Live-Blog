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
        label: "Link",
        icon: "i-lucide-file-text",
        description: "Use NuxtLink with superpowers.",
        to: "/docs/components/link",
      },
      {
        label: "Modal",
        icon: "i-lucide-file-text",
        description: "Display a modal within your application.",
        to: "/docs/components/modal",
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
    label: "GitHub",
    icon: "i-simple-icons-github",
    badge: "6k",
    to: "https://github.com/ewanchukwilliam",
    target: "_blank",
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
