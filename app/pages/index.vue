<script setup lang="ts">
import { emojis } from '../data/emojis'

useSeoMeta({
  title: 'Nuxt Cats',
  ogTitle: 'Nuxt Cats',
  description: 'A directory of silly cat emojis for your Slack workspace.',
  ogDescription: 'A directory of silly cat emojis for your Slack workspace.'
})
</script>

<template>
  <main class="min-h-screen overflow-hidden bg-default text-default">
    <UContainer class="relative py-6 pb-16 sm:py-10">
      <header class="relative z-10 flex items-center justify-end">
        <UColorModeButton
          color="neutral"
          variant="ghost"
          size="lg"
        />
      </header>

      <div
        aria-hidden="true"
        class="pointer-events-none absolute -left-28 top-72 size-56 rotate-12 rounded-[4rem] bg-primary/5 blur-2xl"
      />

      <section
        class="relative grid gap-8 pt-12 pb-10 sm:pt-16 sm:pb-14"
        aria-labelledby="page-title"
      >
        <div class="grid justify-items-center gap-5 text-center">
          <h1
            id="page-title"
            class="m-0 whitespace-nowrap font-pixel-grid text-6xl leading-none tracking-[-0.025em] text-highlighted sm:text-7xl lg:text-[8rem]"
          >
            Nuxt Cats
          </h1>
          <p class="m-0 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            The directory you didn't know you needed.
          </p>
        </div>
      </section>

      <section
        class="mt-8 grid gap-3 sm:mt-12"
        aria-label="Emoji directory"
      >
        <div
          class="flex flex-wrap justify-center gap-2"
        >
          <EmojiCard
            v-for="emoji in emojis"
            :key="emoji.name"
            :emoji="emoji"
          />
        </div>
      </section>
    </UContainer>
  </main>
</template>
