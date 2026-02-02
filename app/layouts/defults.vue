<template>
  <nav-bar class="hidden lg:flex" />
  <mobile-nav class="lg:hidden" />
  <slot />
  <footer class="p-4 bg-gray-200 text-center">© 2024 Protect Water</footer>
</template>

<script setup>
import MobileNav from "~/components/Nav/MobileNav.vue";
</script>

<style scoped></style>
