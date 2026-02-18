<template>
  <div class="flex gap-4">
    <!-- زر الاتصال الهاتفي المباشر -->
    <UTooltip text="اتصال هاتفي مباشر" :kbds="['meta', 'C']">
      <UButton
        class="rounded-md text-white px-8 py-3 font-bold bg-primary hover:bg-gray-300/30 hover:text-black hover:cursor-pointer transition-all"
        icon="i-heroicons-phone-arrow-up-right"
        @click="makeCall"
      >
        {{ callUs }}
      </UButton>
    </UTooltip>
  </div>
</template>

<script setup>
const callUs = "اتصل الآن";
const makeCall = () => {
  const phoneNumber = "01552807664"; // استبدل هذا بالرقم الذي تريده
  window.location.href = `tel:${phoneNumber}`;
};
</script>

<style scoped></style>
