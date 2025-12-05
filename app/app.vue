<script setup lang="ts">
const colorMode = useColorMode();

const color = computed(() =>
  colorMode.value === "dark" ? "#171717" : "white",
);

useHead({
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  ogImage: "https://ui.nuxt.com/assets/templates/nuxt/landing-light.png",
  twitterImage: "https://ui.nuxt.com/assets/templates/nuxt/landing-light.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <UApp :toaster="{ expand: false }" class="min-h-screen">
    <AppHeader />

    <UMain class="bg-linear-to-b from-gray-100 to-gray-200 text-gray-800">
      <NuxtPage />
    </UMain>

    <!-- <AppFooter /> -->
  </UApp>
</template>
