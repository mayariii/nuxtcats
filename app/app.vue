<script setup lang="ts">
useHead({
  titleTemplate: title => title ? `${title}` : 'Nuxt Cats',
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      sizes: '32x32',
      href: '/favicon.ico?v=1'
    }
  ]
})
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </UApp>
</template>
