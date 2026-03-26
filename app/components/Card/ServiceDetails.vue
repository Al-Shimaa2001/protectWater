<template>
  <div class="border shadow rounded-lg gap-2 p-3">
    <div class="flex flex-col gap-1">
      <p class="bg-secondary/20 rounded-lg p-2">
        <Icon :name="icon" width="24" height="24" class="text-primary" />
        {{ name }}
      </p>
      <p class="leading-8">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  name: String,
  description: String,
});
</script>

<style scoped></style>
