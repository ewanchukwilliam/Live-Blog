<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
  {
    label: 'Learn more',
    color: 'neutral',
    variant: 'subtle',
	to:'https://www.williamewanchukporfolio.ca',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageCTA
    title="Student, tinkerer, cheap server hoarder."
    description="I like building things and writing about it. Check out my projects and see what I've been up to."
    orientation="horizontal"
    :links="links"
  >
    <img
      src="https://picsum.photos/640/728"
      width="320"
      height="364"
      alt="Illustration"
      class="w-full rounded-lg"
    />
  </UPageCTA>
</template>
