<template>
  <div class="flex flex-col justify-center items-center gap-4">
    <section
      class="bg-secondary/70 order-last md:order-first text-white my-5 rounded-2xl p-3"
    >
      <div class="flex justify-center items-center flex-col gap-5">
        <h1 class="text-xl font-bold">{{ serviceRequest }}</h1>
        <p class="text-sm font-bold border-b-2 border-b-amber-100 mb-2 pb-1">
          {{ price }}
        </p>
      </div>
      <div class="text-red-600/60 font-bold text-2xl w-100 py-2 my-3">
        عروض خاصة %
      </div>
      <div
        v-for="(offer, index) in offers"
        :key="index"
        class="text-sm flex justify-start items-start gap-2 my-2"
      >
        <UIcon :name="offer.icon" class="w-5 h-5 text-blue-700 shrink-0" />

        <p>{{ offer.details }}</p>
      </div>
      <div class="flex justify-center items-center mt-5">
        <ButtonContactUs />
      </div>
    </section>
    <section>
      <ServicesImage class="order-first md:order-last" />
    </section>
  </div>
</template>

<script setup>
const serviceRequest = "اطلب الخدمة الان";
const price = "احصل على استشارة وعرض سعر مخصص";
const offers = [
  {
    icon: "heroicons:sparkles",
    details:
      "     المساجد والمساحات الكبيرة و للجمعيات الخيرية  في جميع الخدمات",
  },
];
</script>

<style scoped></style>
