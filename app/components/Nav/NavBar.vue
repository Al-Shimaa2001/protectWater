<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "تواصل معانا",
    to: "/contactUs",
    active: route.path.startsWith("/contactUs"),
  },
  {
    label: "اعمالنا",
    to: "/ourWork",
    active: route.path.startsWith("/ourWork"),
  },
  {
    label: "من نحن",
    to: "/whoUs",
    active: route.path.startsWith("/whoUs"),
  },
  {
    label: "خدماتنا",
    to: "/services",
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
    label: "الرئيسية    ",
    to: "/",
    active: route.path.startsWith("/"),
  },
]);
const companyName = "العزل الذهبي";
const subtitle = "للعزل وكشف التسريبات ";
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/" class="flex items-center">
        <div
          class="flex bg-blue-500 rounded-lg p-1 items-center justify-center me-2 shadow-blue-200"
        >
          <UIcon
            name="lucide:droplets"
            width="24"
            height="24"
            style="color: #fffffe"
          />
        </div>
        <div class="flex flex-col">
          <h1 class="text-lg font-bold text-foreground">{{ companyName }}</h1>
          <span class="text-xs text-muted">{{ subtitle }}</span>
        </div>
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" class="navBar" />

    <template #right>
      <ButtonContactUs />
    </template>
  </UHeader>
</template>
<style lang="css" scoped></style>
