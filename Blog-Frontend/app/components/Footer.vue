<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  {
    label: 'LinkedIn',
	icon: "i-simple-icons-linkedin",
    to: 'https://www.linkedin.com/in/william-ewanchuk-920002239/',
    target: '_blank'
  },
]
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">William Ewanchuk · {{ new Date().getFullYear() }}</p>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
			<UTooltip text="My Discord">
				<UButton
					icon="i-simple-icons-discord"
					color="neutral"
					variant="ghost"
					to="https://go.nuxt.com/discord"
					target="_blank"
					aria-label="Discord"
				/>
			</UTooltip>
			<UTooltip text="My GitHub">
				<UButton
					icon="i-simple-icons-github"
					color="neutral"
					variant="ghost"
					to="https://github.com/ewanchukwilliam"
					target="_blank"
					aria-label="GitHub"
				/>
			</UTooltip>
    </template>
  </UFooter>
</template>
