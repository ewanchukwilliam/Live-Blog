<template>
  <UPage 
    v-motion
    :initial="{ opacity: 0, y: 16, filter: 'blur(10px)' }"
    :enter="{
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 500, easing: 'easeOut' },
    }"
	>
    <div class="flex min-h-[80vh] items-center justify-center">
      <ContactForm />
    </div>
  </UPage>
</template>
