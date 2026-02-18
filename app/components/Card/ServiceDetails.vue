<template>
  <div class="border shadow rounded-lg flex items-center gap-2 p-3">
    <div class="p-2 bg-secondary/10 rounded-lg">
      <Icon :name="icon" width="24" height="24" class="text-primary" />
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  description: String,
});
</script>

<style scoped></style>
