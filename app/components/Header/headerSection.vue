<template>
 
  <div class="text-center mb-16">
    <UBadge
      color="primary"
      variant="subtle"
      size="lg"
      class="mb-4 inline-block"
    >
      {{ mainTitle }}
    </UBadge>

    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      {{ subTitle }}
    </h2>

    <p class="text-gray-600 max-w-2xl mx-auto text-lg">
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
