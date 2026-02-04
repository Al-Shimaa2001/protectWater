<template>
  <section
    id="process"
    class="py-24 bg-background overflow-hidden hidden lg:flex"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <UContainer class="relative">
      <!-- Section Header with Animation -->
      <div
        class="text-center mb-16"
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        <UBadge
          color="primary"
          variant="subtle"
          size="lg"
          class="mb-4 inline-block"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          كيف نعمل
        </UBadge>

        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          خطوات العمل لدينا
        </h2>

        <p
          class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          نتبع منهجية علمية واضحة لضمان أفضل النتائج
        </p>
      </div>

      <!-- Steps with Staggered Animations -->
      <div class="relative">
        <!-- Connection Line with Animation -->
        <div
          class="hidden lg:block absolute top-1/2 right-0 left-0 h-0.5 bg-gradient-to-l from-primary/30 via-primary/50 to-primary/30 -translate-y-1/2 z-0"
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="1200"
        />

        <!-- Steps Grid -->
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 relative z-10"
        >
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="text-center group"
            :data-aos="getStepAnimation(index)"
            :data-aos-delay="getStepDelay(index)"
            :data-aos-duration="800"
            :data-aos-anchor-placement="'top-bottom'"
          >
            <!-- Icon Container -->
            <div class="relative inline-block mb-6">
              <!-- Outer Circle -->
              <div
                class="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center mx-auto group-hover:shadow-xl group-hover:border-primary/30 group-hover:scale-105 transition-all duration-300"
              >
                <!-- Inner Circle -->
                <div
                  class="w-16 h-16 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center"
                >
                  <UIcon
                    :name="step.icon"
                    class="w-8 h-8 text-primary dark:text-primary-400"
                    data-aos="flip-up"
                    :data-aos-delay="getStepDelay(index) + 200"
                  />
                </div>

                <!-- Number Badge -->
                <div
                  class="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white text-sm font-bold flex items-center justify-center shadow-lg"
                  data-aos="zoom-in"
                  :data-aos-delay="getStepDelay(index) + 100"
                >
                  {{ step.number }}
                </div>

                <!-- Connecting Line Dot -->
                <div
                  class="hidden lg:block absolute top-1/2 left-full w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-900 -translate-y-1/2 -translate-x-1/2 z-20"
                  data-aos="zoom-in"
                  :data-aos-delay="getStepDelay(index) + 300"
                />
              </div>
            </div>

            <!-- Content -->
            <h3
              class="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors"
              data-aos="fade-up"
              :data-aos-delay="getStepDelay(index) + 400"
            >
              {{ step.title }}
            </h3>
            <p
              class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
              data-aos="fade-up"
              :data-aos-delay="getStepDelay(index) + 500"
            >
              {{ step.description }}
            </p>

            <!-- Hover Arrow -->
            <div
              class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              data-aos="fade-up"
              :data-aos-delay="getStepDelay(index) + 600"
            >
              <UIcon
                name="i-heroicons-arrow-down"
                class="w-5 h-5 text-primary animate-bounce mx-auto"
              />
            </div>
          </div>
        </div>

        <!-- Mobile Connection Line -->
        <div class="lg:hidden mt-8" data-aos="zoom-in" data-aos-delay="800">
          <div class="flex justify-center">
            <div
              class="w-full max-w-md h-0.5 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 rounded-full"
            />
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div
        class="mt-16 text-center"
        dir="rtl"
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        <UButton
          to="/contact"
          color="primary"
          size="xl"
          icon="i-heroicons-chat-bubble-left-right"
          class="shadow-lg hover:shadow-xl transition-shadow"
          data-aos="zoom-in"
          data-aos-delay="1100"
        >
          ابدأ مشروعك الآن
        </UButton>

        <p
          class="mt-4 text-gray-500 dark:text-gray-400 text-sm"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          اتصل بنا للحصول على استشارة مجانية
          <UIcon
            name="i-heroicons-phone"
            class="w-4 h-4 mr-2 inline-block"
            data-aos="pulse"
            data-aos-delay="1300"
            data-aos-duration="1500"
            data-aos-iteration="infinite"
          />
        </p>
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

// Get different animations for each step
const getStepAnimation = (index) => {
  const animations = [
    "fade-right",
    "fade-up",
    "fade-up",
    "fade-up",
    "fade-left",
  ];
  return animations[index];
};

// Staggered delay for each step
const getStepDelay = (index) => {
  return 500 + index * 100; // Starts at 500ms, increases by 100ms each
};
</script>
