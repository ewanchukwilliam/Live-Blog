<template>
  <UHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
      <UColorModeButton />
    </template>
	<NavigationMenu/>
    <template #right>
      <UTooltip text="Login Page" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="/login/"
          icon="i-lucide-log-in"
          aria-label="GitHub"
				>Login</UButton>
      </UTooltip>
    </template>
  </UHeader>
</template>
