<template>
  <div>
    <CardServiceCard :title="title" class="m-5 p-1 border-b-2" />
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-content-center items-center"
    >
      <p
        v-for="(item, index) in service.whyChooseUs"
        :key="index"
        class="text-lg text-gray-700 mb-5 leading-7 shadow bg-white/10 rounded-lg p-3"
      >
        ◀ {{ item }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { servicesList } from "~/data/services";
const title = "لماذا تختارنا؟";
const route = useRoute();
const serviceId = route.params.id;

const service = computed(() => {
  return servicesList.find((s) => s.slug === serviceId);
});
</script>

<style scoped></style>
