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
      <h2 class="p-2 shadow bg-primary/10 rounded-lg text-3xl my-5">
        {{ intro }} {{ service.title }}
      </h2>
      <p
        class="text-lg text-gray-700 mb-5 leading-7"
        v-usal="'fade-u duration-500'"
      >
        {{ service.introduction }}
      </p>
      <h2 class="p-2 shadow bg-primary/10 rounded-lg text-3xl my-5">
        {{ importanceTitle }} {{ service.title }}
      </h2>
      <p
        class="text-lg text-gray-700 mb-5 leading-7"
        v-usal="'fade-u duration-500'"
        v-for="(importance, index) in service.importance"
        :key="index"
      >
        ◀ {{ importance }}
      </p>
      <ServicesOurServices />
      <ServicesNeedSigns />
      <ServicesWhyChooseUs />
      <ServicesVideo />
      <ServicesMatrials />
      <ServicesExecutionSteps />
    </main>
    <ServicesServiceOrder />
  </UContainer>
</template>

<script setup>
import { servicesList } from "~/data/services";
const intro = "نبذه عن  ";
const importanceTitle = "أهمية  ";

const route = useRoute();
const serviceId = route.params.id;

const service = computed(() => {
  return servicesList.find((s) => s.slug === serviceId);
});

useHead({
  title: computed(() =>
    service.value
      ? `${service.value.title} - اعمار البلاد`
      : "الخدمة غير موجودة",
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
