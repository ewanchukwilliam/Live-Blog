<template>
	<UPage v-motion-fade>
		<PageHero
			v-motion
			:initial="{ opacity: 0, y: 50 }"
			:enter="{
				opacity: 1,
				y: 0,
				transition: { delay: 200, duration: 800, easing: 'easeOut' },
			}"
		/>
	</UPage>
</template>
