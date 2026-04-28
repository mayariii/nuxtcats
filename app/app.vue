<script setup lang="ts">
useHead({
  titleTemplate: title => title ? `${title}` : 'Nuxt Cats',
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico'
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
