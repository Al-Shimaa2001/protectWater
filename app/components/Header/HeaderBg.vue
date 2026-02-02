<template>
  <div>
    <div class="main h-screen" :style="{ backgroundImage: `url(${bgImage})` }">
      <slot />
    </div>
   
  </div>
</template>

<script setup>
defineProps({
  bgImage: { type: String },
});
</script>

<style scoped>
.main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
