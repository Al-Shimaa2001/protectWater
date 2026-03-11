<template>
  <div>
    <HeaderServicesHero
      :background="service.heroImage"
      backgroundType="image"
      :overlay="true"
      overlayColor="var(--color-blue-800)"
      :overlayOpacity="0.5"
      height="100vh"
      :title="service.title"
      :description="service.description"
    />
  </div>

  <UContainer class="py-10 grid grid-cols-1 md:grid-cols-3 gap-5">
    <main class="col-span-2">
      <ServicesOurServices />
      <ServicesVideo />
      <ServicesMatrials />
    </main>
    <ServicesServiceOrder />
  </UContainer>
</template>

<script setup>
import { servicesList } from "~/data/services";

const route = useRoute();
const serviceId = route.params.id;

const service = computed(() => {
  return servicesList.find((s) => s.slug === serviceId);
});

useHead({
  title: computed(() =>
    service.value ? `${service.value.title} - شركتنا` : "الخدمة غير موجودة",
  ),
  meta: [
    {
      name: "description",
      content: computed(
        () => service.value?.description || "صفحة خدمة غير موجودة",
      ),
    },
  ],
});

if (!service.value) {
  throw createError({ statusCode: 404, message: "الخدمة غير موجودة" });
}
</script>
