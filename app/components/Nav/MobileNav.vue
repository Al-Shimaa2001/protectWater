<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "الرئيسية",
    to: "/",
    icon: "i-heroicons-home",
    active: route.path === "/",
  },
  {
    label: "خدماتنا",
    to: "/services",
    icon: "i-heroicons-wrench-screwdriver", // أو i-heroicons-cog-6-tooth
    active: route.path.startsWith("/services"),
     children: [
      {
        label: "العزل المائي والحراري",
        to: "/services/insulation",
        active: route.path.startsWith("/services/insulation"),
      },
      {
        label: "كشف التسربات",
        to: "/services/leak-detection",
        active: route.path.startsWith("/services/leak-detection"),
      },
      {
        label: "خدمات التنظيف",
        to: "/services/cleaning",
        active: route.path.startsWith("/services/cleaning"),
      },
      {
        label: "مكافحة الحشرات",
        to: "/services/pest-control",
        active: route.path.startsWith("/services/pest-control"),
      },
    ],
  },
  {
    label: "من نحن",
    to: "/WhoUs",
    icon: "i-heroicons-building-office-2", // أو i-heroicons-information-circle
    active: route.path.startsWith("/WhoUs"),
  },
  {
    label: "اعمالنا",
    to: "/ourWork",
    icon: "i-heroicons-briefcase", // أو i-heroicons-folder-open
    active: route.path.startsWith("/ourWork"),
  },
  {
    label: "تواصل معانا",
    to: "/contactUs",
    icon: "i-heroicons-phone", // أو i-heroicons-envelope
    active: route.path.startsWith("/contactUs"),
  },
]);
</script>

<template>
  <UHeader
    :toggle="{
      color: 'primary',
      variant: 'subtle',
      class: 'rounded-full',
    }"
  >
    <template #title>
      <NuxtLink to="/" class="flex items-center">
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
      </NuxtLink>
    </template>
    <ButtonContactUs />

    <UNavigationMenu :items="items" />

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5 text-sm font-medium transition-colors duration-200"
      />
    </template>
  </UHeader>
</template>
