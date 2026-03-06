<script setup lang="ts">
import MobileNav from "~/components/Nav/MobileNav.vue";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <nav-bar class="hidden lg:flex" />
  <MobileNav class="flex lg:hidden" />
  <SpeedInsights />
  <slot />
  <Footer />
</template>
