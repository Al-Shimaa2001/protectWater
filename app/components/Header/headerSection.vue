<template>
  <div class="text-center mb-16">
    <span
      data-aos="flip-up"
      class="inline-block px-4 py-1.5 bg-gray-200/70 text-primary text-sm font-semibold rounded-full mb-4"
    >
      {{ mainTitle }}
    </span>
    <h2 data-aos="flip-down" class="text-3xl md:text-4xl font-bold text-foreground mb-4">
      {{ subTitle }}
    </h2>
    <p data-aos="flip-up" class="text-muted-foreground max-w-2xl mx-auto">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  mainTitle: { type: String, default: "خدماتنا" },
  subTitle: { type: String, default: "خدمات متكاملة للعزل والتنظيف والحماية" },
  description: {
    type: String,
    default:
      "نقدم مجموعة شاملة من خدمات العزل وكشف التسربات والتنظيف ومكافحة الحشرات بأعلى معايير الجودة",
  },
});
</script>

<style scoped></style>
