<template>
  <div class="min-h-screen">
    <main class="">
      <Header
        background="/images/hero-services.jpg"
        backgroundType="image"
        :overlay="true"
        overlayColor="var(--color-blue-800)"
        :overlayOpacity="0.5"
        height="100%"
        description="نقدم مجموعة شاملة من خدمات العزل وكشف التسربات والتنظيف ومكافحة الحشرات بأعلى معايير الجودة"
      >
        <div
          class="flex gap-4 justify-center my-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <ButtonContactUs />
          <ButtonWhatsapp />
        </div>
      </Header>
      <!-- Services Grid Section -->
      <section
        class="py-20 bg-gray-50 flex flex-col items-center justify-center"
      >
        <div class="container">
          <div class="grid md:grid-cols-2 gap-8 p-20">
            <div
              v-for="(service, index) in services"
              :key="service.id"
              class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
              :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
              :data-aos-delay="index * 100"
              data-aos-duration="800"
            >
              <div
                :class="`w-16 h-16 rounded-2xl ${colorClasses[service.color]} flex items-center justify-center mb-6`"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <UIcon :name="service.icon" class="w-8 h-8" />
              </div>

              <h2 class="text-2xl font-bold text-gray-900 mb-4">
                {{ service.title }}
              </h2>

              <p class="text-gray-600 mb-6 leading-relaxed">
                {{ service.description }}
              </p>

              <ul class="space-y-3 mb-8">
                <li
                  v-for="(feature, i) in service.features"
                  :key="i"
                  class="flex items-center gap-3"
                  data-aos="fade-up"
                  :data-aos-delay="100 + i * 50"
                >
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-5 h-5 text-green-500 shrink-0"
                  />
                  <span class="text-gray-800 text-sm">{{ feature }}</span>
                </li>
              </ul>

              <UButton
                color="primary"
                variant="solid"
                class="w-full gap-2 bg-linear-to-l from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white"
                @click="goToService(service.id)"
              >
                تفاصيل الخدمة
                <UIcon name="i-heroicons-arrow-left" class="w-4 h-4" />
              </UButton>
            </div>
          </div>
        </div>
      </section>

      <!-- Booking Section -->
      <section
        class="flex flex-col items-center justify-center py-20 bg-linear-to-br from-primary-50 to-blue-50"
      >
        <div class="container">
          <div
            class="max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                حجز خدمة سريع
              </h2>
              <p class="text-gray-600 text-lg">
                اختر الخدمة المطلوبة تواصل معانا فوراً
              </p>
            </div>

            <!-- Booking Features -->

            <div class="grid md:grid-cols-3 gap-6 mt-12">
              <div
                v-for="feature in bookingFeatures"
                :key="feature.title"
                class="text-center"
                data-aos="fade-up"
                :data-aos-delay="feature.delay"
              >
                <div
                  class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4"
                >
                  <UIcon :name="feature.icon" class="w-8 h-8 text-primary" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                  {{ feature.title }}
                </h3>
                <p class="text-gray-600 text-sm">
                  {{ feature.description }}
                </p>
              </div>
            </div>
            <div
              class="flex gap-4 items-center justify-center my-3 py-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <ButtonContactUs />
              <ButtonWhatsapp />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  title: "خدماتنا - حماية المياه",
  description:
    "نقدم مجموعة شاملة من خدمات العزل وكشف التسربات والتنظيف ومكافحة الحشرات بأعلى معايير الجودة",
});
useHead({
  title: "خدماتنا - حماية المياه",
  meta: [
    {
      name: "description",
      content:
        "نقدم مجموعة شاملة من خدمات العزل وكشف التسربات والتنظيف ومكافحة الحشرات بأعلى معايير الجودة",
    },
  ],
});
const services = [
  {
    id: "insulation",
    link: "/services/insulation",
    icon: "material-symbols:water-drop-outline",
    title: "العزل المائي والحراري",
    description:
      "نقدم خدمات عزل متكاملة للخزانات والأسطح والحمامات بأحدث التقنيات والمواد العازلة عالية الجودة",
    features: [
      "عزل الخزانات الأرضية والعلوية",
      "عزل الأسطح من تسربات الأمطار",
      "عزل الحمامات والمطابخ",
      "عزل حراري متكامل للمباني",
    ],
    color: "water",
  },
  {
    id: "leak-detection",
    link: "/services/leak-detection",
    icon: "i-heroicons-magnifying-glass",
    title: "كشف التسربات",
    description:
      "نستخدم أحدث الأجهزة الإلكترونية للكشف عن التسربات بدقة عالية دون الحاجة للتكسير",
    features: [
      "كشف تسربات المياه بدون تكسير",
      "أجهزة إلكترونية حديثة",
      "تحديد موقع التسرب بدقة",
      "إصلاح فوري للمشاكل",
    ],
    color: "primary",
  },
  {
    id: "cleaning",
    link: "/services/cleaning",
    icon: "i-heroicons-sparkles",
    title: "خدمات التنظيف",
    description:
      "تنظيف شامل واحترافي للحمامات والمجالس والخزانات والحدائق بأفضل المنظفات والمعدات",
    features: [
      "تنظيف وتعقيم الخزانات",
      "تنظيف المجالس والكنب",
      "تنظيف الحمامات والمطابخ",
      "تنظيف وتنسيق الحدائق",
    ],
    color: "accent",
  },
  {
    id: "pest-control",
    link: "/services/pest-control",
    icon: "lucide:bug",
    title: "مكافحة الحشرات",
    description:
      "خدمات شاملة لمكافحة جميع أنواع الحشرات والقوارض باستخدام مبيدات آمنة ومعتمدة",
    features: [
      "رش المبيدات الآمنة",
      "مكافحة الفئران والقوارض",
      "القضاء على البق والصراصير",
      "طارد الحمام والطيور",
    ],
    color: "service",
  },
];

const goToService = (serviceId) => {
  navigateTo(`/services/${serviceId}`);
  console.log(serviceId);
};
// Color Classes for Service Cards
const colorClasses = {
  water: "bg-blue-50 text-blue-600 border-blue-200",
  primary: "bg-primary-50 text-primary border-primary-200",
  accent: "bg-green-50 text-green-600 border-green-200",
  service: "bg-orange-50 text-orange-600 border-orange-200",
};

// Booking Features
const bookingFeatures = [
  {
    icon: "i-heroicons-clock",
    title: "حجز سريع",
    description: "احجز خدمتك خلال دقائق",
    delay: 100,
  },
  {
    icon: "i-heroicons-shield-check",
    title: "ضمان الجودة",
    description: "خدمات معتمدة وموثوقة",
    delay: 200,
  },
  {
    icon: "i-heroicons-phone",
    title: "دعم فوري",
    description: "نتواصل معك خلال 24 ساعة",
    delay: 300,
  },
];
</script>

<style scoped></style>
