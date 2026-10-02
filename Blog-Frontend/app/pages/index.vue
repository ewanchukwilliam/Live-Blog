<script setup lang="ts">
import type { ContentTocLink } from "@nuxt/ui";

onMounted(async () => {
  const { default: Typeit } = await import("typeit");
  const title = document.querySelector("h2") as HTMLElement;
  let delay = 8000;
  if (title) {
	const placeholder = title.textContent;
    title.textContent = "";
    new Typeit(title, { loop: true, cursor: false, speed:100})
      .type(placeholder.toString())
      .pause(delay)
      .delete()
      .type("Terminal Lover")
      .pause(delay)
      .delete()
      .type("Buy Me a Coffee!")
      .pause(delay)
      .delete()
      .go();
  }
});

const links = ref<ContentTocLink[]>([
  {
    id: "latest-posts",
    depth: 2,
    text: "Latest Posts",
  },
  {
    id: "introduction",
    depth: 2,
    text: "Introduction",
    children: [
      { id: "about-me", depth: 3, text: "About Me" },
      { id: "my-stack", depth: 3, text: "My Stack" },
    ],
  },
  {
    id: "getting-started",
    depth: 2,
    text: "Getting Started",
    children: [{ id: "quick-links", depth: 3, text: "Quick Links" }],
  },
]);
</script>

<template>
  <UPage v-motion-fade >
    <template #left>
      <UPageAside
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :enter="{
          opacity: 1,
          x: 0,
          transition: { delay: 0, duration: 1000, easing: 'easeOut' },
        }" >
        <UContentToc
          :links="links"
          title="On this page"
          highlight
          highlight-color="neutral"
          color="neutral"
        />
      </UPageAside>
    </template>

		<div class="min-w-full flex flex-col items-center">
			<UPageBody class="max-w-5xl">
				<section
					class="scroll-mt-20"
					v-motion
					:initial="{ opacity: 0, y: 100 }"
					:enter="{
						opacity: 1,
						y: 0,
						transition: { delay: 400, duration: 1000, easing: 'easeOut' },
					}"
				>
					<h2 id="latest-posts" class="text-2xl font-bold">Latest Posts</h2>
					<p class="text-muted mb-2">Check out my latest posts and articles.</p>
					<Posts />
				</section>

				<section
					class="scroll-mt-20"
					v-motion
					:initial="{ opacity: 0, y: 100 }"
					:enter="{
						opacity: 1,
						y: 0,
						transition: { delay: 600, duration: 1000, easing: 'easeOut' },
					}"
				>
					<h2 id="introduction" class="text-2xl font-bold scroll-mt-20">
						Introduction
					</h2>
					<p class="text-muted">
						I enjoy developing my skills through projects. I'm looking to benefit
						from higher quality documentation of my progress as a developer. I'm
						looking to rely on LLM's less that I currently do in my day to day and
						this is my way of documenting my journey into software development 
						along side the evolution of AI.
					</p>

					<div class="mt-6">
						<h3 id="about-me" class="text-xl font-semibold scroll-mt-20 mb-3">
							About Me
						</h3>
						<p class="text-muted">
							I'm a Computer Engineering Student making a late in life career
							pivot. I'm in my 5th year of uni at the University of Alberta. I
							come from an industrial medic background.
							I'm personally interested in both Full Stack Development and Devops.
							I like the scalability of distributed systems, and developing
							applications from scratch. I use Neovim, and have a custom terminal
							inspired workflow I've come to love.
						</p>
					</div>

					<div class="mt-6">
						<h3 id="my-stack" class="text-xl font-semibold scroll-mt-20 mb-3">
							My Stack's
						</h3>
						<div>
							<h4 class="font-medium">Frameworks:</h4>
							<p class="text-muted mt-1">
								Springboot, ASP.NET Core, React, Django 
							</p>
						</div>
						<div class="mt-3">
							<h4 class="font-medium">Cloud & Devops:</h4>
							<p class="text-muted mt-1">
								AWS, Azure, Terraform, Ansible, Docker, Kubernetes, GH
							</p>
						</div>
						<div class="mt-3">
							<h4 class="font-medium">Languages:</h4>
							<p class="text-muted mt-1">
								Java, C#, Typescript, Python, C/C++
							</p>
						</div>
					</div>
				</section>

				<section
					class="scroll-mt-20"
					v-motion
					:initial="{ opacity: 0, y: 100 }"
					:enter="{
						opacity: 1,
						y: 0,
						transition: { delay: 800, duration: 1000, easing: 'easeOut' },
					}"
				>
					<h2 id="getting-started" class="text-2xl font-bold scroll-mt-20">
						Getting Started
					</h2>
					<p class="text-muted">Explore the site and find what you need.</p>

					<div class="mt-6">
						<h3 id="quick-links" class="text-xl font-semibold scroll-mt-20">
							Quick Links
						</h3>
						<div class="flex flex-wrap gap-2 mt-3">
							<UButton
								icon="i-lucide-rocket"
								size="md"
								color="primary"
								variant="solid"
								to="/blogs/"
							>
								Blogs
							</UButton>
							<UButton
								icon="i-lucide-user"
								size="md"
								color="primary"
								variant="solid"
								to="/about/"
							>
								About
							</UButton>
							<UButton
								icon="i-lucide-mail"
								size="md"
								color="primary"
								variant="solid"
								to="/contact/"
							>
								Contact
							</UButton>


							<!-- TODO: Remember to clean up this 404 error please -->
							<UButton
								icon="i-lucide-alert-triangle"
								size="md"
								color="error"
								variant="outline"
								to="/temp/"
							>
								Test 404
							</UButton>
						</div>
					</div>
				</section>
			</UPageBody>
		</div>
  </UPage>
</template>
