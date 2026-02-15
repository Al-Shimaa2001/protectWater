<template>
  <div>
    <h3 class="font-bold text-2xl mb-5">{{ title }}</h3>
    <section>
      <slot></slot>
    </section>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style scoped></style>
