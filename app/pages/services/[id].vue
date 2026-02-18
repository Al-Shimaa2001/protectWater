<template>
  <div>
    <!-- الهيدر الديناميكي -->
    <HeaderServicesHero
      :background="service.heroImage"
      backgroundType="image"
      :overlay="true"
      overlayColor="var(--color-blue-800)"
      :overlayOpacity="0.5"
      height="100%"
      :title="service.title"
      :description="service.description"
    />
  </div>

  <UContainer class="px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-5">
    <main class="col-span-2">
      <!-- قسم "ما نقدمه" -->
      <section class="mb-4">
        <CardServiceCard title="ما نقدمه في هذه الخدمة" />
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-content-center items-center"
        >
          <CardServiceDetails
            v-for="(item, index) in service.offerings"
            :key="index"
            :icon="item.icon"
            :description="item.details"
          />
        </div>
      </section>

      <!-- قسم "المواد والتقنيات" -->
      <section>
        <CardServiceCard title="المواد والتقنيات المستخدمة" />
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-content-center items-center"
        >
          <CardServiceDetails
            v-for="(item, index) in service.materials"
            :key="index"
            :icon="item.icon"
            :description="item.label"
          />
        </div>
      </section>
    </main>

    <!-- قسم طلب الخدمة (ثابت في كل الخدمات) -->
    <section>
      <div
        class="bg-secondary text-white my-5 flex justify-center items-center flex-col gap-5 rounded-2xl p-3"
      >
        <h1 class="text-xl font-bold">{{ serviceRequest }}</h1>
        <p class="text-sm">{{ price }}</p>
        <ButtonContactUs />
      </div>
    </section>
  </UContainer>
</template>

<script setup>
import { servicesList } from "~/data/services";

const serviceRequest = "اطلب الخدمة الان";
const price = "احصل على استشارة وعرض سعر مخصص";

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
