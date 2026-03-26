<template>
  <div>
    <section class="mb-4">
      <CardServiceCard :title="`ما نقدمه في ${service.title}`" />
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-content-center items-center"
      >
        <CardServiceDetails
          v-for="(item, index) in service.offeringsDetails"
          :key="index"
          :icon="item.icon"
          :name="item.title"
          :description="item.description"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { servicesList } from "~/data/services";

const route = useRoute();
const serviceId = route.params.id;

const service = computed(() => {
  return servicesList.find((s) => s.slug === serviceId);
});
</script>

<style scoped></style>
