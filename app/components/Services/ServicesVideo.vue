<template>
  <UContainer class="h-110 m-5 p-3 ">
    <video
      ref="videoPlayer" 
      controls
      class="m-2 border border-gray-400 rounded-2xl w-100 h-107"
    >
      <source :src="service.videoUrl" type="video/mp4" />
    </video>
  </UContainer>
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
