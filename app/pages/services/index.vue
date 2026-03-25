<template>
  <div class="min-h-screen">
    <main class="">
      <Header
        background="/images/hero-services-min.webp"
        backgroundType="image"
        :overlay="true"
        overlayColor="var(--color-blue-800)"
        :overlayOpacity="0.5"
        height="100vh"
        title="خدماتنا"
        :description="pageContent.header.description"
      >
        <div class="flex gap-4 justify-center my-3">
          <ButtonContactUs />
          <ButtonWhatsapp />
        </div>
      </Header>
      <ServicesSection />
      <ServicesBookingSection />
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  title: "خدماتنا - اعمار البلاد",
  description:
    "نقدم مجموعة شاملة من خدمات العزل وكشف التسربات والتنظيف ومكافحة الحشرات بأعلى معايير الجودة",
});
const pageContent = {
  header: {
    description:
      "نقدم مجموعة شاملة من خدمات العزل وكشف التسربات والتنظيف ومكافحة الحشرات بأعلى معايير الجودة",
  },
};
useHead({
  title: "خدماتنا - حماية المياه",
  meta: [
    {
      name: "description",
      content: pageContent.header.description,
    },
  ],
});
</script>

<style scoped></style>
