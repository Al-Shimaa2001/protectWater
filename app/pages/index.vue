<template>
  <div>
    <HomePageHeroSection />
    <HomePageServicesSection />
    <HomePageWhyUs />
    <HomePageProcessSection />
    <HomePageFAQSection />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
  title: "الصفحة الرئيسية  ",
});
useHead({
  title: "شركة إعمار البلاد",
  meta: [
    {
      name: "description",
      content:
        "شركة متخصصة في العزل المائي والحراري - عزل خزانات المياه والحمامات والمسابح - خدمات الترميمات الشاملة - مكافحة الحشرات (صراصير، بق، فئران) - طارد الحمام - تنظيف المجالس والحدائق - نقدم خدمات بجودة عالية وضمان مميز في المملكة العربية السعودية",
    },
    {
      name: "keywords",
      content:
        "عزل مائي, عزل حراري, عزل خزانات, عزل حمامات, عزل مسابح, ترميمات, صيانة مباني, رش مبيدات, مكافحة حشرات, صيد فئران, طارد الحمام, تنظيف مجالس, تنظيف حدائق, تنظيف خزانات",
    },
  ],
});
</script>

<style scoped></style>
