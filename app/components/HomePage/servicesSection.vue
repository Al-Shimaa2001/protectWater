<template>
  <main class="py-24 px-4 md:px-8 lg:px-16">
    <div class="text-center mb-16">
      <span
        class="inline-block px-4 py-1.5 bg-gray-200/70 text-primary text-sm font-semibold rounded-full mb-4"
      >
        خدماتنا
      </span>
      <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
        خدمات متكاملة للعزل والتنظيف والحماية
      </h2>
      <p class="text-muted-foreground max-w-2xl mx-auto">
        نقدم مجموعة شاملة من خدمات العزل وكشف التسربات والتنظيف ومكافحة الحشرات
        بأعلى معايير الجودة
      </p>
    </div>
    <div class="services-container">
      <Card
        v-for="(service, index) in services"
        :key="index"
        :name="service.nameIcon"
        :header="service.title"
        :details="service.details"
        :footer="service.footer"
      />
    </div>
  </main>
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
</style>
