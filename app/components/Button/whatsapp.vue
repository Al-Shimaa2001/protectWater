<template>
  <div class="relative">
    <UTooltip text="Open on whatsapp" :kbds="['meta', 'G']">
      <UButton
        @click="toggleNumbers"
        class="rounded-md text-black px-8 py-3 font-bold bg-gray-300/50 hover:bg-primary hover:text-white hover:cursor-pointer hover:outline"
        variant="solid"
        icon="i-heroicons-chat-bubble-left-right"
        aria-label="WhatsApp Button"
      >
        {{ contactText }}
      </UButton>
    </UTooltip>

    <!-- قائمة الأرقام المنبثقة -->
    <div
      v-if="showNumbers"
      class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
    >
      <div class="py-2">
        <h3
          class="text-sm font-semibold text-gray-700 px-4 py-2 bg-gray-50 border-b"
        >
          {{ choosePhone }}
        </h3>
        <button
          v-for="number in phoneNumbers"
          :key="number.value"
          @click="openWhatsApp(number.value)"
          class="w-full text-right px-4 py-3 hover:bg-primary text-black transition-colors duration-200 flex items-center gap-3 border-b border-gray-100 last:border-0"
        >
          <UIcon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5" />
          <span>{{ number.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const contactText = " تواصل عبر الواتساب";
const choosePhone = "اختر رقم الاتصال";

const showNumbers = ref(false);
let timeoutId = null;

const phoneNumbers = [
  { label: "  9660547202483 ", value: "9660547202483" },
  { label: " 9660554112043", value: "9660554112043" },
];

const toggleNumbers = () => {
  showNumbers.value = !showNumbers.value;

  if (showNumbers.value) {
    startAutoCloseTimer();
  } else {
    clearAutoCloseTimer();
  }
};

const startAutoCloseTimer = () => {
  clearAutoCloseTimer();

  timeoutId = setTimeout(() => {
    showNumbers.value = false;
  }, 3000);
};

const clearAutoCloseTimer = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
};

const openWhatsApp = (phone) => {
  const message = encodeURIComponent("مرحباً، أود الاستفسار عن خدماتكم");
  const url = `https://wa.me/${phone}?text=${message}`;
  navigateTo(url, {
    external: true,
    open: { target: "_blank" },
  });
  showNumbers.value = false;
  clearAutoCloseTimer();
};

onMounted(() => {
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".relative")) {
      showNumbers.value = false;
      clearAutoCloseTimer();
    }
  });
});

onUnmounted(() => {
  clearAutoCloseTimer();
  document.removeEventListener("click", (e) => {
    if (!e.target.closest(".relative")) {
      showNumbers.value = false;
    }
  });
});
</script>

<style scoped></style>
