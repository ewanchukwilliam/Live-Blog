<template>
	<UPage v-motion-fade>
		<div
			v-motion
			:initial="{ opacity: 0, y: 50 }"
			:enter="{
				opacity: 1,
				y: 0,
				transition: { delay: 200, duration: 800, easing: 'easeOut' },
			}"
			class="flex min-h-[80vh] items-center justify-center"
		>
			<PageHero />
		</div>
	</UPage>
</template>
