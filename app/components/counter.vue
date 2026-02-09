<script setup>
// تعريف الخصائص المستلمة
const props = defineProps({
  number: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  icon: {
    // تغيير من name إلى icon
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "black",
  },
});

const displayNumber = ref(0);

onMounted(() => {
  let start = 0;
  const end = props.number;
  const duration = 2000; // مدة 2 ثانية
  const increment = 1;

  // حساب الوقت بين كل تحديث
  const stepTime = Math.abs(Math.floor(duration / end));

  const timer = setInterval(() => {
    start += increment;
    displayNumber.value = start;
    if (start >= end) {
      displayNumber.value = end;
      clearInterval(timer);
    }
  }, stepTime);
});
</script>

<template>
  <UCard
    data-aos="zoom-in"
    data-aos-duration="1000"
    class="text-center bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300"
  >
    <div class="mb-4">
      <!-- استخدام خاصية icon -->
      <Icon :name="icon" width="48" height="48" :style="{ color: color }" />
    </div>
    <div class="text-primary text-center text-3xl md:text-4xl font-bold mb-2">
      {{ displayNumber }}<span v-if="number">+</span>
    </div>
    <div class="text-primary/90 text-base">{{ label }}</div>
  </UCard>
</template>
