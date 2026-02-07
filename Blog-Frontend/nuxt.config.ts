// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxt/content",
		"@nuxt/a11y",
		"@nuxt/eslint",
		"@nuxt/fonts",
		"@nuxt/hints",
		"@nuxt/icon",
		"@nuxt/image",
		"@nuxt/scripts",
		"@nuxt/ui",
		"@vueuse/motion/nuxt",
	],
	// nuxt.config.js
	runtimeConfig: {
		public: {
			motion: {
				directives: {
					'pop-bottom': {
						initial: {
							scale: 0,
							opacity: 0,
							y: 100,
						},
						visible: {
							scale: 1,
							opacity: 1,
							y: 0,
						}
					}
				}
			}
		}
	},
	devtools: { enabled: true },
	content: {
		database: {
			type: 'sqlite',
			filename: ':memory:'
		}
	},
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ['/', '/blogs']
		}
	},
	compatibilityDate: "2024-04-03",
	css: ["~/assets/css/main.css"],
	ui: {
		theme: {
			colors: [
				"primary",
				"secondary",
				"tertiary",
				"info",
				"success",
				"warning",
				"error",
			],
		},
	},
});
