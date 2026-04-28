# [Nuxt Cats](https://nuxtcats.vercel.app)

A Nuxt rebuild of [Slack Cats](https://github.com/mayariii/slackcats): a tiny
directory of silly cat emojis for Slack.

## What This App Does

- Shows a compact directory of cat emoji chips.
- Uses square emoji thumbnails rendered with `<NuxtImg />`.
- Downloads the original image when you click a thumbnail.
- Copies the Slack shortcode, like `:cat-goggles:`, when you click the text.
- Shows copy feedback with a Nuxt UI toast.
- Uses a dark, minimal interface built with Nuxt UI and Tailwind utilities.

## SvelteKit To Nuxt Map

If you are coming from SvelteKit, these are the important translations in this
project:

| SvelteKit | Nuxt / Vue |
| --- | --- |
| `src/routes/+page.svelte` | `app/pages/index.vue` |
| `src/routes/+layout.svelte` | `app/app.vue` or `app/layouts/*` |
| `static/` | `public/` |
| `$lib/...` | `~/...` or relative imports |
| `$:` derived values | `computed(() => ...)` |
| Component props | `defineProps()` |
| Local event handlers | Functions in `<script setup>` |
| App CSS imports | `app/assets/css/main.css` configured in `nuxt.config.ts` |


## Nuxt Concepts In Use

- `app/app.vue` is the global shell. It sets head defaults and renders
  `<NuxtPage />`.
- `app/pages/index.vue` becomes the `/` route through Nuxt file-based routing.
- `app/components/*` are auto-imported by Nuxt, so page templates can use
  `<EmojiCard />` without importing it manually.
- `<NuxtImg />` displays the same public images as square, optimized thumbnails.
- `useToast()` from Nuxt UI shows lightweight copy feedback.
- `useSeoMeta()` sets page metadata with typed keys.
- `UApp`, `UContainer`, `UCard`, `UIcon`, and `UColorModeButton` come from
  Nuxt UI.

## Setup

Install dependencies with Bun:

```bash
bun install
```

## Development Server

```bash
bun run dev
```

Start the development server on `http://localhost:3000`.

## Lint And Test

Run ESLint:

```bash
bun run lint
```

Run the Bun tests:

```bash
bun test
```

## Production

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```

For a static output, run:

```bash
bun run generate
```


