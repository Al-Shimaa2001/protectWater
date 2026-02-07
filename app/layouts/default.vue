<script setup lang="ts">
import MobileNav from "~/components/Nav/MobileNav.vue";
</script>

<template>
  <nav-bar class="hidden lg:flex" />
  <MobileNav class="flex lg:hidden" />
  <slot />
  <Footer />
</template>
