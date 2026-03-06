<template>
  <div>
    <section class="py-20 bg-gray-50 flex flex-col items-center justify-center">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-8 p-20">
          <div
            v-for="service in services"
            :key="service.id"
            class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
          >
            <div
              :class="`w-16 h-16 rounded-2xl ${colorClasses[service.color]} flex items-center justify-center mb-6`"
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
              {{ pageContent.services.buttonText }}
              <UIcon name="i-heroicons-arrow-left" class="w-4 h-4" />
            </UButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page content constants
const pageContent = {
  services: {
    buttonText: "تفاصيل الخدمة",
  },
};
const services = [
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
    id: "restoration",
    link: "/services/restoration",
    icon: "material-symbols:construction",
    title: "الترميمات وإعادة التأهيل",
    description:
      "خدمات متكاملة لترميم المباني القديمة وإصلاح التشققات ومعالجة مشاكل الرطوبة وتجديد الواجهات بأحدث المواد والتقنيات",
    features: [
      "ترميم المباني الأثرية والقديمة",
      "إصلاح التشققات والشروخ في الجدران",
      "معالجة مشاكل الرطوبة والعفن",
      "تجديد وترميم الواجهات الخارجية",
      "حقن الأساسات ومعالجتها",
      "ترميم الحوائط والأسقف المتضررة",
    ],
    color: "primary",
  },
  {
    id: "gas-extensions",
    link: "/services/gas-extensions",
    icon: "material-symbols:propane-tank-outline",
    title: "تمديدات الغاز المركزية",
    description:
      "تصميم وتنفيذ شبكات الغاز المركزية للمباني السكنية والتجارية بأعلى معايير الأمان والجودة وبإشراف فنيين معتمدين من الدفاع المدني",
    features: [
      "تمديدات شبكات الغاز المركزية للمباني",
      "تركيب وصيانة محابس الغاز ومنظمات الضغط",
      "أنظمة الأمان وكواشف تسرب الغاز",
      "تمديدات الغاز للفلل والمجمعات السكنية",
      "شبكات الغاز للمطاعم والفنادق",
      "صيانة دورية وإصلاح أعطال شبكات الغاز",
    ],
    color: "water",
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
    color: "water",
  },
];

const goToService = (serviceId) => {
  navigateTo(`/services/${serviceId}`);
};
// Color Classes for Service Cards
const colorClasses = {
  water: "bg-blue-50 text-blue-600 border-blue-200",
  primary: "bg-primary-50 text-primary border-primary-200",
  accent: "bg-green-50 text-green-600 border-green-200",
  service: "bg-orange-50 text-orange-600 border-orange-200",
};
</script>

<style scoped></style>
