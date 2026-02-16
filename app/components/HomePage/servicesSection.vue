<template>
  <main class="py-24 px-4 md:px-8 lg:px-16 bg-white text-gray-900">
    <HeaderSection
      mainTitle="خدماتنا"
      subTitle="خدمات متكاملة للعزل والتنظيف والحماية"
      description="نقدم مجموعة شاملة من خدمات العزل وكشف التسربات والتنظيف ومكافحة الحشرات بأعلى معايير الجودة"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      <Card
        v-for="service in services"
        :key="service.id"
        :name="service.nameIcon"
        :header="service.title"
        :details="service.details"
        :footer="service.footer"
        :service="service"
        class="hover:shadow-lg transition-shadow duration-300 hover:border-primary/50"
        data-aos="fade-up"
      />
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'خدماتنا المتكاملة',
  meta: [
    { name: 'description', content: 'نقدم خدمات العزل وكشف التسربات والتنظيف ومكافحة الحشرات' }
  ]
})
const services = [
  {
    id: "leak-detection",
    nameIcon: "healthicons:magnifying-glass-outline",
    title: "كشف التسربات",
    details:
      "استخدام أجهزة إلكترونية متطورة للكشف عن التسربات بدقة عالية دون تكسير",
    footer: "اعرف المزيد",
  },
  {
    id: "insulation",
    nameIcon: "lucide:droplets",
    title: "العزل المائي والحراري",
    details:
      "عزل الخزانات والأسطح والحمامات بأحدث التقنيات والمواد العازلة عالية الجودة",
    footer: "اعرف المزيد",
  },
  {
    id: "cleaning",
    nameIcon: "heroicons:sparkles",
    title: "خدمات التنظيف",
    details:
      "تنظيف الحمامات والمجالس والخزانات والسجاد والحدائق بأفضل المنظفات والمعدات الحديثة",
    footer: "اعرف المزيد",
  },
  {
    id: "pest-control",
    nameIcon: "heroicons:bug-ant",
    title: "مكافحة الحشرات",
    details:
      "رش المبيدات ومكافحة الفئران والبق والصراصير وطارد الحمام وجميع أنواع الحشرات",
    footer: "اعرف المزيد",
  },
];
</script>

<style scoped></style>
