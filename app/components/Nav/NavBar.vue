<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "تواصل معانا",
    to: "/contactUs",
    active: route.path.startsWith("/contactUs"),
    external: true,
  },
  {
    label: "اعمالنا",
    to: "/ourWork",
    active: route.path.startsWith("/ourWork"),
    external: true,
  },
  {
    label: "من نحن",
    to: "/whoUs",
    active: route.path.startsWith("/whoUs"),
    external: true,
  },
  {
    label: "خدماتنا",
    to: "/services",
    external: true,
    active: route.path.startsWith("/services"),
    children: [
      {
        label: "العزل المائي والحراري",
        to: "/services/insulation",
        active: route.path.startsWith("/services/insulation"),
        external: true,
      },
      {
        label: "كشف التسربات",
        to: "/services/leak-detection",
        active: route.path.startsWith("/services/leak-detection"),
        external: true,
      },
      {
        label: " الترميمات وإعادة التأهيل",
        to: "/services/restoration",
        active: route.path.startsWith("/services/restoration"),
        external: true,
      },
      {
        label: "تمديدات الغاز المركزية",
        to: "/services/gas-extensions",
        active: route.path.startsWith("/services/gas-extensions"),
        external: true,
      },
      {
        label: "خدمات التنظيف",
        to: "/services/cleaning",
        active: route.path.startsWith("/services/cleaning"),
        external: true,
      },
      {
        label: "مكافحة الحشرات",
        to: "/services/pest-control",
        active: route.path.startsWith("/services/pest-control"),
        external: true,
      },
    ],
  },
  {
    label: "الرئيسية    ",
    to: "/",
    active: route.path.startsWith("/"),
    external: true,
  },
]);
const companyName = "العزل الذهبي";
const subtitle = "للعزل وكشف التسريبات ";
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/" class="flex items-center" external>
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
