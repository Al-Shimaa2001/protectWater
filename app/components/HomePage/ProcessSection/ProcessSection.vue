<template>
  <section id="process" class="py-24 bg-white overflow-hidden" >
    <UContainer class="relative">
      <!-- عنوان القسم -->
      <div class="text-center mb-16">
        <UBadge
          color="primary"
          variant="subtle"
          size="lg"
          class="mb-4 inline-block"
        >
          كيف نعمل
        </UBadge>

        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          خطوات العمل لدينا
        </h2>

        <p class="text-gray-600 max-w-2xl mx-auto text-lg">
          نتبع منهجية علمية واضحة لضمان أفضل النتائج
        </p>
      </div>

      <div class="relative">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10"
        >
          <div
            v-for="(step, index) in steps"
            :key="step.number"
            class="text-center group"
          >
            <div class="relative">
              <!-- حاوية الأيقونة -->
              <div
                class="relative w-24 h-24 rounded-2xl bg-linear-to-br from-white to-gray-50 shadow-lg border border-gray-200 flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl group-hover:border-primary/30 group-hover:scale-105 transition-all duration-300"
              >
                <!-- الدائرة الداخلية -->
                <div
                  class="w-16 h-16 rounded-full bg-linear-to-r from-primary/10 to-primary/5 flex items-center justify-center"
                >
                  <UIcon
                    :name="step.icon"
                    class="w-8 h-8 text-primary transition-transform group-hover:scale-110"
                  />
                </div>

                <!-- رقم الخطوة -->
                <div
                  class="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-linear-to-r from-primary to-blue-600 text-white text-sm font-bold flex items-center justify-center shadow-lg"
                >
                  {{ step.number }}
                </div>

                <!-- نقطة الاتصال (لشاشات الكبيرة فقط) -->
                <div
                  v-if="index < steps.length - 1"
                  class="hidden lg:block absolute top-1/2 left-full w-4 h-4 rounded-full bg-primary border-4 border-white transform -translate-y-1/2 -translate-x-1/2 z-20"
                />
              </div>

              <!-- المحتوى -->
              <div class="px-2">
                <h3
                  class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300"
                >
                  {{ step.title }}
                </h3>
                <p class="text-sm text-gray-600 leading-relaxed">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- خط الاتصال (لشاشات الجوال) -->
        <div class="block lg:hidden mt-12">
          <div class="flex justify-center">
            <div
              class="w-full max-w-md h-0.5 bg-linear-to-r from-primary/30 via-primary/50 to-primary/30 rounded-full"
            />
          </div>
        </div>
      </div>

      <!-- زر الاتصال -->
      <div class="mt-16 text-center">
        <ButtonContactUs class="inline-block" />
      </div>
    </UContainer>
  </section>
</template>

<script setup>
import { ref } from "vue";

const steps = ref([
  {
    icon: "i-heroicons-magnifying-glass",
    number: "01",
    title: "الفحص",
    description: "فحص شامل للموقع باستخدام أجهزة متطورة",
  },
  {
    icon: "i-heroicons-target",
    number: "02",
    title: "تحديد المشكلة",
    description: "تحديد دقيق لمصدر التسرب أو الضعف",
  },
  {
    icon: "i-heroicons-wrench-screwdriver",
    number: "03",
    title: "تنفيذ العزل",
    description: "تطبيق الحل المناسب بأفضل المواد",
  },
  {
    icon: "i-heroicons-beaker",
    number: "04",
    title: "اختبار الجودة",
    description: "اختبارات متعددة للتأكد من الجودة",
  },
  {
    icon: "i-heroicons-check-badge",
    number: "05",
    title: "الضمان",
    description: "تسليم شهادة ضمان معتمدة",
  },
]);
</script>

<style scoped>
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}
</style>
