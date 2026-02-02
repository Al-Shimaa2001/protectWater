<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
    <UCard
      class="text-center bg-white/10 backdrop-blur-md border-white/20"
      v-for="(item, index) in details"
      :key="index"
    >
      <div class="mb-2">
        <Icon
          :name="item.icon"
          width="32"
          height="32"
          :style="{ color: item.color }"
        />
      </div>
      <div class="text-2xl md:text-3xl font-bold text-white">
        {{ item.number }}
      </div>
      <div class="text-white/80 text-sm mt-1">{{ item.label }}</div>
    </UCard>
  </div>
</template>

<script setup>
const targetNumber = 15;
const clintNumber = 5000;
const displayCount = ref(0);
const displayClintCount = ref(0);

// تحديث الأرقام بشكل تفاعلي
const details = computed(() => [
  {
    icon: "ic:outline-shield",
    color: "#08ae0f",
    number: `${displayCount.value}+ سنة`,
    label: "خبرة معتمدة",
  },
  {
    icon: "lucide:award",
    color: "#08ae0f",
    number: `${displayClintCount.value}+ عميل`,
    label: "عملاء سعداء",
  },
  {
    icon: "ic:outline-watch-later",
    color: "#08ae0f",
    number: "15",
    label: "سنوات خبرة",
  },
]);

onMounted(() => {
  const duration = 2000;
  const frames = duration / 16;
  const step = targetNumber / frames;
  const clientStep = clintNumber / frames;

  const timer = setInterval(() => {
    displayCount.value = Math.min(
      targetNumber,
      displayCount.value + Math.ceil(step),
    );
    displayClintCount.value = Math.min(
      clintNumber,
      displayClintCount.value + Math.ceil(clientStep),
    );

    if (
      displayCount.value === targetNumber &&
      displayClintCount.value === clintNumber
    ) {
      clearInterval(timer);
    }
  }, 16);
});
</script>
