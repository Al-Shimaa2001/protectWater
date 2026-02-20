<template>
  <div class="h-full">
    <Header
      background="/images/hero-home-min.jpg"
      backgroundType="image"
      :overlay="true"
      overlayColor="var(--color-blue-800)"
      :overlayOpacity="0.5"
      height="100%"
      :description="headerDescription"
    >
      <div
        class="text-4xl md:text-5xl lg:text-6xl my-2"
        data-usal="fade-u split-word"
      >
        <h1>{{ headerTitle1 }}</h1>
        <p class="text-orange-300 pt-2 my-2 pb-6">{{ headerHighlightText }}</p>
        <h1>{{ headerTitle2 }}</h1>
      </div>
      <div class="flex gap-4 justify-center my-3">
        <ButtonContactUs />
        <ButtonWhatsapp />
      </div>
      <div class="my-3 flex items-center gap-5 justify-center">
        <Counter
          v-for="(item, index) in counterData"
          :key="index"
          :icon="item.icon"
          :color="item.color"
          :number="item.number"
          :label="item.label"
          textColor="#ffffff"
        />
      </div>
    </Header>
  </div>
</template>

<script setup lang="ts">
// ========== Header Texts ==========
const headerDescription =
  "نقدم حلولاً متكاملة لحماية منزلك من التسربات والرطوبة بأحدث التقنيات وضمان يصل إلى 15 سنة";
const headerTitle1 = "شركة متخصصة في";
const headerHighlightText = "العزل المائي والحراري";
const headerTitle2 = "وكشف تسربات المياه";

// ========== Counter Data Interface ==========
interface CounterItem {
  icon: string;
  color: string;
  number: number;
  label: string;
}

// ========== Counter Data ==========
const counterData: CounterItem[] = [
  {
    icon: "i-heroicons-clock",
    color: "primary",
    number: 15,
    label: "سنوات خبرة معتمدة",
  },
  {
    icon: "i-heroicons-user-group",
    color: "primary",
    number: 5000,
    label: "عملاء سعداء",
  },
];
</script>

<style scoped></style>
