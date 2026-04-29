## Learned User Preferences
- Explain Nuxt and Vue concepts by mapping them back to Svelte and SvelteKit equivalents when teaching or implementing.
- Use Bun for this workspace; avoid introducing pnpm tooling or lockfiles.
- Prefer Nuxt UI components for app UI and Tailwind utilities over standalone CSS for styling.
- For this app's mobile UI, prefer a prominent hero title, quieter subtitle, tighter space before the emoji list, and more breathing room between wrapped emoji chips.

## Learned Workspace Facts
- This project is a Nuxt 4 rebuild of Slackcats, preserving the core flow of browsing cat emoji images, copying Slack shortcodes, and downloading emoji files.
- The production site is deployed at `https://nuxtcats.vercel.app`.
- The Nuxt app has `@nuxt/ui`, `@nuxt/image`, `@nuxt/eslint`, and `@nuxt/devtools` enabled in `nuxt.config.ts`.
- Tailwind CSS v4 is installed, and `@nuxt/ui` is available as the primary component system.
- Emoji image assets are intended to live in `public/emojis` so downloads can use direct public URLs while gallery display can use Nuxt Image; the add-a-cat flow should stay easy to open as a pull request.
- Hover sounds use bundled SoundCN data-URI audio and need an explicit user activation unlock path for production browser playback.
