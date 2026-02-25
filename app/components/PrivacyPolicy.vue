<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
  description: Array<string>;
}>();
</script>

<template>
  <UContainer class="container py-12">
    <!-- Header Section -->
    <div
      class="bg-[#E6F4EF] rounded-[24px] px-2 py-18 md:py-33.25 h-50 flex items-center justify-center"
    >
      <h2 class="text-4xl lg:text-5xl font-bold text-[#020A4C] text-center">
        {{ title }}
      </h2>
    </div>

    <!-- Content Section -->
    <div class="mt-12 mb-36 flex flex-col items-start">
      <div class="flex items-center gap-4">
        <div class="bg-[#6ACEE5] rounded-full w-5 h-5" />
        <h3 class="text-2xl lg:text-3xl text-[#020A4C]">
          {{ content }}
        </h3>
      </div>
      <div
        class="container mt-10 text-muted-foreground text-lg"
        data-usal="fade-d"
        v-for="(item, index) in description"
        :key="index"
      >
        <p>
          {{ item }}
        </p>
      </div>
    </div>
  </UContainer>
</template>
