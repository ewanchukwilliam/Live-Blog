<script setup lang="ts">
import type { ContentTocLink } from "@nuxt/ui";

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
  <UPage v-motion-fade>
    <template #left>
      <UPageAside>
        <UContentToc
          :links="links"
          title="On this page"
          highlight
          highlight-color="neutral"
          color="neutral"
        />
      </UPageAside>
    </template>

    <UPageBody>
      <section class="scroll-mt-20 py-8">
        <h2 id="latest-posts" class="text-2xl font-bold scroll-mt-20">
          Latest Posts
        </h2>
        <p class="text-muted">Check out my latest posts and articles.</p>
        <Posts />
      </section>

      <section class="scroll-mt-20 py-8">
        <h2 id="introduction" class="text-2xl font-bold scroll-mt-20">
          Introduction
        </h2>
        <p class="text-muted">
          I enjoy developing my skills through projects. I'm looking to benefit
          from higher quality documentation of my progress as a developer. I'm
          looking to rely on LLM's less that I currently do in my day to day and
          this is my way of documenting my journey along side the evolution of
          AI in hopes that in the future as a software engineer maybe some
          famous anti-ai influencer benefits from my experience :), who know's
          maybe someday I'll realize my mistakes and never write another line of
          code.
        </p>

        <div class="mt-6">
          <h3 id="about-me" class="text-xl font-semibold scroll-mt-20">
            About Me
          </h3>
          <p class="text-muted">
            I'm a Computer Engineering Student making a late in life career
            pivot. I'm in my 3rd year of uni at the University of Alberta. I
            come from an industrial medic background. I'm pursuing a childish
            dream of mind years ago in the new softare engineering direction.
            I'm personally interested in both Full Stack Development and Devops.
            I like the scalability of distributed systems, and developing
            applications from scratch. I use Neovim, and have a custom terminal
            inspired workflow I've come to love.
          </p>
        </div>

        <div class="mt-6">
          <h3 id="my-stack" class="text-xl font-semibold scroll-mt-20">
            My Stack's
          </h3>
          <h2>Frameworks:</h2>
          <p class="text-muted">
            Kubernetes, Docker, Django, React, Next/Nuxts, Express, Springboot
          </p>
          <h2>Languages:</h2>
          <p class="text-muted">
			Python, Typescript, Java, (Go in the future someday)
          </p>
        </div>
      </section>

      <section class="scroll-mt-20 py-8">
        <h2 id="getting-started" class="text-2xl font-bold scroll-mt-20">
          Getting Started
        </h2>
        <p class="text-muted">Explore the site and find what you need.</p>

        <div class="mt-6">
          <h3 id="quick-links" class="text-xl font-semibold scroll-mt-20">
            Quick Links
          </h3>
          <div class="flex flex-wrap gap-2">
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
  </UPage>
</template>
