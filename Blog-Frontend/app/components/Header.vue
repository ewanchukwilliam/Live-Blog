<template>
  <UHeader>
    <template #title> Williams Blog </template>
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
