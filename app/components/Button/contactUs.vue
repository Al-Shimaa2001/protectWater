<template>
  <div class="relative flex gap-4">
    <!-- زر الاتصال الهاتفي المباشر -->
    <UTooltip text="اتصال هاتفي مباشر" :kbds="['meta', 'C']">
      <UButton
        class="rounded-md text-white px-8 py-3 font-bold bg-primary hover:bg-gray-300/30 hover:cursor-pointer transition-all"
        icon="i-heroicons-phone-arrow-up-right"
        @click="showNumbers = !showNumbers"
      >
        {{ callUs }}
      </UButton>
    </UTooltip>

    <!-- قائمة الأرقام المنبثقة -->
    <div
      v-if="showNumbers"
      class="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
    >
      <div class="py-2">
        <h3
          class="text-sm font-semibold text-gray-700 px-4 py-2 bg-gray-50 border-b"
        >
          اختر رقم الاتصال
        </h3>
        <button
          v-for="number in phoneNumbers"
          :key="number.value"
          @click="makeCall(number.value)"
          class="w-full text-right px-4 py-3 hover:bg-primary hover:text-black transition-colors duration-200 flex items-center gap-3 border-b border-gray-100 last:border-0"
        >
          <UIcon name="i-heroicons-phone" class="w-5 h-5" />
          <span>{{ number.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const callUs = "اتصل الآن";
const showNumbers = ref(false);

// قائمة أرقام الاتصال
const phoneNumbers = [
  { label: "📞 966الرقم الأول: 0547202483", value: "9660547202483" },
  { label: "📞 966الرقم الثاني: 0555555555", value: "9660555555555" }, // غير هذا الرقم
];

const makeCall = (phone) => {
  window.location.href = `tel:${phone}`;
  showNumbers.value = false; // إخفاء القائمة بعد الاختيار
};

// إغلاق القائمة عند النقر خارجها
onMounted(() => {
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".relative")) {
      showNumbers.value = false;
    }
  });
});
</script>

<style scoped></style>
