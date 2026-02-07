export default defineAppConfig({
	ui: {
		colors: {
			primary: "zinc",
			secondary: "zinc",
			neutral: "zinc",
		},
		main: {
			base: "min-h-[calc(90vh-var(--ui-header-height))]",
		},
		error: {
			slots: {
				root: "min-h-[calc(90vh-var(--ui-header-height))] flex flex-col items-center justify-center text-center",
				statusCode: "text-base font-semibold text-primary",
				statusMessage:
					"mt-2 text-4xl sm:text-5xl font-bold text-highlighted text-balance",
				message: "mt-4 text-lg text-muted text-balance",
				links: "mt-8 flex items-center justify-center gap-6",
			},
		},
		blogPosts: {
			base: "flex flex-col gap-8 lg:gap-y-16",
			variants: {
				orientation: {
					horizontal: "sm:grid sm:grid-cols-2 lg:grid-cols-3 py-2",
					vertical: "",
				},
			},
		},
		pageHero: {
			slots: {
				root: "relative isolate",
				container:
					"flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24 min-h-[90vh]",
				wrapper: "",
				header: "",
				headline: "mb-4",
				title:
					"text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted",
				description: "text-lg sm:text-xl/8 text-muted",
				body: "mt-10",
				footer: "mt-10",
				links: "flex flex-wrap gap-x-6 gap-y-3",
			},
		},
	},
});
