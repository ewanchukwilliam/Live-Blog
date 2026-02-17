<template>
  <UHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
      <UColorModeButton />
    </template>
    <NavigationMenu />
    <template #right>
      <AccountState />
    </template>
      <!-- This is for the Collapsed Hamburger menu items on the mobile view -->
    <template #body>
      <NavigationMenu orientation="vertical" class="w-full" />
    </template>
  </UHeader>
</template>
