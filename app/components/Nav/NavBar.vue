<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "تواصل معانا",
    to: "/contactUs",
    active: route.path.startsWith("/تواصل معانا"),
  },
  {
    label: "اعمالنا",
    to: "/ourWork",
    active: route.path.startsWith("/اعمالنا"),
  },
  {
    label: "من نحن",
    to: "/WhoUs",
    active: route.path.startsWith("/من نحن "),
  },
  {
    label: "خدماتنا",
    to: "/services",
    active: route.path.startsWith("/خدماتنا"),
  },
  {
    label: "الرئيسية    ",
    to: "/",
    active: route.path.startsWith("/"),
  },
]);
</script>

<template>
  <UHeader>
    <template #title>
      <section class="flex items-center">
        <div
          class="flex bg-blue-500 rounded-lg p-1 items-center justify-center me-2 shadow-blue-200"
        >
          <Icon
            name="lucide:droplets"
            width="24"
            height="24"
            style="color: #fffffe"
          />
        </div>
        <div class="flex flex-col">
          <h1 class="text-lg font-bold text-foreground">العزل الذهبي</h1>
          <span class="text-xs text-muted">للعزل وكشف التسريبات </span>
        </div>
      </section>
    </template>

    <UNavigationMenu :items="items" class="navBar" />

    <template #right>
      <ButtonContactUs />
    </template>
  </UHeader>
</template>
<style lang="css" scoped>

</style>
