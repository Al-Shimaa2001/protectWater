<template>
  <UTooltip text="Open on whatsapp" :kbds="['meta', 'G']">
    <UButton
      @click="openWhatsApp"
      class="rounded-md text-black px-8 py-3 font-bold bg-gray-300/50 hover:bg-primary hover:text-white hover:cursor-pointer hover:outline"
      variant="solid"
      target="_blank"
      icon="i-heroicons-chat-bubble-left-right"
      aria-label="WhatsApp Button"
    >
      تواصل عبر الواتساب
    </UButton>
  </UTooltip>
</template>

<script setup>
const openWhatsApp = () => {
  const phone = "201552807664"; // اكتب الرقم هنا مع كود الدولة وبدون أصفار أو علامة +
  const message = encodeURIComponent("مرحباً، أود الاستفسار عن خدماتكم");
  const url = `https://wa.me/${phone}?text=${message}`;
  navigateTo(url, {
    external: true,
    open: { target: "_blank" },
  });
};
</script>

<style scoped></style>
