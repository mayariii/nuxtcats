<script setup lang="ts">
import type { Emoji } from '../data/emojis'

const props = defineProps<{
  emoji: Emoji
  message: string
}>()

const emit = defineEmits<{
  copy: [emoji: Emoji]
}>()

const shortcode = computed(() => toSlackShortcode(props.emoji.name))
const downloadFilename = computed(() => getDownloadFilename(props.emoji))
</script>

<template>
  <UCard
    as="section"
    variant="subtle"
    class="relative overflow-hidden rounded-[2rem] border border-default bg-elevated/80 backdrop-blur"
    :ui="{
      body: 'grid gap-8 p-5 sm:p-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-12'
    }"
    aria-labelledby="selected-emoji-heading"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-2xl"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -bottom-24 left-10 size-56 rounded-full bg-primary/5 blur-2xl"
    />

    <div class="relative grid min-h-56 place-items-center rounded-3xl bg-muted ring-1 ring-default lg:min-h-72">
      <NuxtImg
        :src="emoji.src"
        :alt="emoji.alt"
        width="220"
        height="220"
        fit="cover"
        densities="1x 2x"
        class="size-56 object-cover"
      />
    </div>

    <div class="relative grid gap-4">
      <h2
        id="selected-emoji-heading"
        class="m-0 max-w-full break-words font-pixel-grid text-4xl leading-none tracking-[-0.025em] text-highlighted sm:text-6xl lg:text-7xl"
      >
        {{ shortcode }}
      </h2>
      <p class="m-0 max-w-xl text-base leading-7 text-muted">
        Copy the Slack shortcode, or download the original image file from the
        public emoji folder.
      </p>

      <div class="mt-1 flex flex-wrap gap-3">
        <UButton
          type="button"
          color="neutral"
          size="xl"
          label="Copy name"
          leading-icon="i-lucide-copy"
          class="rounded-full"
          @click="emit('copy', emoji)"
        />
        <UButton
          as="a"
          color="neutral"
          variant="outline"
          size="xl"
          label="Download image"
          leading-icon="i-lucide-download"
          :href="emoji.src"
          :download="downloadFilename"
          class="rounded-full"
        />
      </div>

      <p
        class="min-h-6 font-bold text-primary"
        aria-live="polite"
      >
        {{ message }}
      </p>
    </div>
  </UCard>
</template>
