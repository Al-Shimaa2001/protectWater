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
        :title="mainTitle"
        :description="pageContent.header.description"
      >
        <div class="flex gap-4 justify-center my-3">
          <ButtonContactUs />
          <ButtonWhatsapp />
        </div>
      </Header>
      <div
        class="p-10 bg-background flex flex-col justify-center items-center gap-10 leading-relaxed"
        data-usal="fade-u"
      >
        <UBadge size="lg" color="primary" variant="soft" class="mb-4">
          {{ companyName }}
        </UBadge>
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
          {{ ourexpierence }}
        </h2>
        <h6>{{ subTitleSection }}</h6>

        <ul
          class="list-disc list-inside text-lg text-muted-foreground mb-8 leading-relaxed"
        >
          <li v-for="(item, index) in descriptionSection" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
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
  title: "خدماتنا - اعمار البلاد",
  meta: [
    {
      name: "description",
      content: pageContent.header.description,
    },
  ],
});
const mainTitle = "خدماتنا";
const companyName = "شركة إعمار البلاد";
const ourexpierence = "   خبراء العزل والترميمات ومكافحة الآفات في السعودية";
const subTitleSection =
  "في شركة إعمار البلاد مجموعة شاملة من الخدمات التقنية المتخصصة  التي تلبي احتياجات المنشآت السكنية والتجارية، وتشمل";
const descriptionSection = [
  " العزل المائي  والحراري: باستخدام أحدث المواد المعتمدة لحماية الأسطح والخزانات  والحمامات والمسابح من التسربات والحرارة.",
  " الترميمات الشاملة: إصلاح  وصيانة المباني باحترافية، من معالجة التشققات إلى تجديد الأسطح  والواجهات.",
  " مكافحة الحشرات والقوارض: رش مبيدات آمنة ومعتمدة للقضاء  على الصراصير، البق، الفئران، مع برامج وقائية مستمرة.",
  " طارد الحمام:  حلول فعالة وإنسانية لمنع تجمع الحمام على الأسطح والشرفات باستخدام أحدث  الطرق.",
  " خدمات التنظيف المتخصصة: تنظيف المجالس والحدائق والخزانات  بأعلى معايير النظافة والتعقيم.",
];
</script>

<style scoped></style>
