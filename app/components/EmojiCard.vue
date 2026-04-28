<script setup lang="ts">
import { playSound } from '@/lib/sound-engine'
import { click003Sound } from '@/lib/soundcn/sounds/click-003/click-003'
import type { Emoji } from '../data/emojis'

const props = defineProps<{
  emoji: Emoji
}>()

const shortcode = computed(() => toSlackShortcode(props.emoji.name))
const downloadFilename = computed(() => getDownloadFilename(props.emoji))
const toast = useToast()

async function copyShortcode() {
  try {
    await navigator.clipboard.writeText(shortcode.value)
    toast.add({
      title: `Copied ${shortcode.value}`,
      icon: 'i-lucide-check',
      color: 'primary',
      duration: 1800
    })
  } catch {
    toast.add({
      title: 'Copy failed',
      description: `Select ${shortcode.value} and copy it manually.`,
      icon: 'i-lucide-circle-alert',
      color: 'error'
    })
  }
}

async function playHoverSound(event: PointerEvent) {
  if (event.pointerType !== 'mouse') {
    return
  }

  try {
    await playSound(click003Sound.dataUri, { volume: 0.35 })
  } catch {
    // Browsers can block hover-triggered audio until the first user gesture.
  }
}
</script>

<template>
  <UCard
    as="article"
    variant="outline"
    class="group/card w-fit rounded-lg border border-default bg-elevated/70 text-default transition duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-elevated"
    :ui="{
      body: 'flex items-center gap-1.5 p-2!'
    }"
    @pointerenter="playHoverSound"
  >
    <a
      :href="emoji.src"
      :download="downloadFilename"
      class="group/image relative grid size-16 shrink-0 place-items-center overflow-hidden rounded-lg bg-muted ring-1 ring-default transition duration-200 hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary"
      :aria-label="`Download ${shortcode}`"
    >
      <NuxtImg
        :src="emoji.src"
        :alt="emoji.alt"
        width="64"
        height="64"
        fit="cover"
        loading="lazy"
        densities="1x 2x"
        class="size-full object-cover"
      />
      <span class="absolute inset-0 grid place-items-center bg-default/60 opacity-0 transition duration-200 group-hover/image:opacity-100 group-focus-visible/image:opacity-100">
        <UIcon
          name="i-lucide-download"
          class="size-4 text-highlighted"
          aria-hidden="true"
        />
      </span>
    </a>

    <button
      type="button"
      class="inline-flex max-w-full items-center rounded-md px-0.5 py-1 font-mono text-sm text-highlighted transition duration-200 hover:text-primary focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary"
      :aria-label="`Copy ${shortcode}`"
      @click="copyShortcode"
    >
      <span class="whitespace-nowrap">{{ shortcode }}</span>
    </button>
  </UCard>
</template>
