<template>
  <div class="services-container py-24 px-6 mx-4">
    <Card
      v-for="(service, index) in services"
      :key="index"
      :name="service.nameIcon"
      :header="service.title"
      :details="service.details"
      :footer="service.footer"
    />
  </div>
</template>

<script setup>
const services = [
  {
    nameIcon: "healthicons:magnifying-glass-outline",
    title: "كشف التسربات",
    details:
      "استخدام أجهزة إلكترونية متطورة للكشف عن التسربات بدقة عالية دون تكسير",
    footer: "اعرف المزيد",
  },
  {
    nameIcon: "lucide:droplets",
    title: "العزل المائي والحراري",
    details:
      "عزل الخزانات والأسطح والحمامات بأحدث التقنيات والمواد العازلة عالية الجودة",
    footer: "اعرف المزيد",
  },
  {
    nameIcon: "heroicons:sparkles",
    title: "خدمات التنظيف",
    details:
      "تنظيف الحمامات والمجالس والخزانات والسجاد والحدائق بأفضل المنظفات والمعدات الحديثة",
    footer: "اعرف المزيد",
  },
  {
    nameIcon: "heroicons:bug-ant",
    title: "مكافحة الحشرات",
    details:
      "رش المبيدات ومكافحة الفئران والبق والصراصير وطارد الحمام وجميع أنواع الحشرات",
    footer: "اعرف المزيد",
  },
];
</script>

<style scoped>
.services-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
</style>
