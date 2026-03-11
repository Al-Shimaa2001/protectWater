<template>
  <div class="flex flex-col items-center justify-center gap-3 h-full">
    <section v-for="(item, index) in service.images" :key="index">
      <NuxtImg
        v-if="item"
        :src="item.src"
        :alt="item.alt || 'صورة المادة'"
        class="rounded-lg shadow-md mb-6 sizes-60 object-cover"
      />
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
