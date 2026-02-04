<template>
  <section class="py-24 bg-gradient-to-b from-white to-gray-50 flex lg:hidden">
    <UContainer>
      <!-- Section Header -->
      <div class="text-center mb-16" dir="rtl">
        <UBadge color="primary" variant="soft" size="xl" class="mb-6">
          <UIcon name="i-heroicons-cog-6-tooth" class="w-5 h-5 ml-2" />
          كيف نعمل
        </UBadge>

        <h2
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          رحلة النجاح <span class="text-primary">خطوة بخطوة</span>
        </h2>

        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          نتبع نهجاً منظماً ومحترفاً لضمان حصولك على أفضل خدمة
        </p>
      </div>

      <!-- Timeline for Desktop -->
      <div class="hidden lg:block">
        <div class="relative">
          <!-- Vertical Timeline Line -->
          <div
            class="absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-blue-500 to-primary transform translate-x-1/2 z-0"
          />

          <!-- Steps -->
          <div class="space-y-12">
            <div
              v-for="(step, index) in steps"
              :key="index"
              class="flex items-center"
              :class="{ 'flex-row-reverse': index % 2 === 0 }"
            >
              <!-- Step Content -->
              <div
                class="w-1/2"
                :class="
                  index % 2 === 0 ? 'pr-12 text-left' : 'pl-12 text-right'
                "
              >
                <UCard
                  :ui="{
                    base: 'relative overflow-visible',
                    background: 'dark:bg-gray-800',
                    ring: 'ring-1 ring-gray-200 dark:ring-gray-700',
                    body: { base: 'p-6' },
                  }"
                  class="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <!-- Step Number -->
                  <div
                    class="absolute top-6 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg"
                    :class="index % 2 === 0 ? '-right-6' : '-left-6'"
                  >
                    {{ step.number }}
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="p-3 rounded-xl bg-primary/10">
                      <UIcon :name="step.icon" class="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <h3
                        class="text-xl font-bold text-gray-900 dark:text-white mb-2"
                      >
                        {{ step.title }}
                      </h3>
                      <p class="text-gray-600 dark:text-gray-300 mb-4">
                        {{ step.description }}
                      </p>

                      <!-- Additional Details -->
                      <div
                        v-if="step.details"
                        class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                      >
                        <ul class="space-y-2">
                          <li
                            v-for="(detail, detailIndex) in step.details"
                            :key="detailIndex"
                            class="flex items-center text-sm text-gray-500 dark:text-gray-400"
                          >
                            <UIcon
                              name="i-heroicons-check-circle"
                              class="w-4 h-4 text-emerald-500 ml-2"
                            />
                            {{ detail }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </UCard>
              </div>

              <!-- Timeline Dot -->
              <div
                class="w-8 h-8 rounded-full bg-white dark:bg-gray-900 border-4 border-primary shadow-lg z-10"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Steps -->
      <div class="lg:hidden">
        <div class="relative">
          <!-- Vertical Line -->
          <div
            class="absolute right-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-blue-500 to-primary z-0"
          />

          <!-- Steps -->
          <div class="space-y-8 pr-12">
            <div v-for="(step, index) in steps" :key="index" class="relative">
              <!-- Timeline Dot -->
              <div
                class="absolute right-0 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-gray-900 shadow-lg transform translate-x-1/2 z-10"
              />

              <!-- Step Content -->
              <UCard
                :ui="{
                  base: 'relative',
                  background: 'dark:bg-gray-800',
                  ring: 'ring-1 ring-gray-200 dark:ring-gray-700',
                  body: { base: 'p-5' },
                }"
                class="shadow-md hover:shadow-lg transition-shadow"
              >
                <div class="flex items-start gap-4">
                  <!-- Step Number -->
                  <div
                    class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white flex items-center justify-center font-bold text-sm shadow"
                  >
                    {{ step.number }}
                  </div>

                  <div>
                    <div class="flex items-center gap-2 mb-2">
                      <UIcon :name="step.icon" class="w-5 h-5 text-primary" />
                      <h3
                        class="text-lg font-bold text-gray-900 dark:text-white"
                      >
                        {{ step.title }}
                      </h3>
                    </div>

                    <p class="text-gray-600 dark:text-gray-300 text-sm">
                      {{ step.description }}
                    </p>
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </div>
      </div>

     
    </UContainer>
  </section>
</template>

<script setup>
const steps = ref([
  {
    icon: "i-heroicons-magnifying-glass-plus",
    number: "01",
    title: "الفحص والتشخيص",
    description: "فحص دقيق باستخدام أجهزة متطورة لاكتشاف التسربات والضعف",
    details: [
      "فحص بالموجات فوق الصوتية",
      "فحص بالكاميرات الحرارية",
      "تقرير مفصل عن حالة المبنى",
    ],
  },
  {
    icon: "i-heroicons-clipboard-document-check",
    number: "02",
    title: "تخطيط الحلول",
    description: "تصميم خطة علاجية شاملة ومخصصة لحالتك",
    details: [
      "اختيار المواد المناسبة",
      "تحديد زمن التنفيذ",
      "تحديد التكلفة الإجمالية",
    ],
  },
  {
    icon: "i-heroicons-user-group",
    number: "03",
    title: "التنفيذ الميداني",
    description: "تنفيذ الخطة بدقة عالية بواسطة فريق متخصص",
    details: [
      "فريق فني مدرب ومؤهل",
      "استخدام أحدث التقنيات",
      "مراقبة الجودة أثناء التنفيذ",
    ],
  },
  {
    icon: "i-heroicons-check-badge",
    number: "04",
    title: "مراقبة الجودة",
    description: "اختبارات جودة متعددة للتأكد من فعالية العمل",
    details: [
      "اختبارات مقاومة المياه",
      "اختبارات العزل الحراري",
      "فحص نهائي شامل",
    ],
  },
  {
    icon: "i-heroicons-document-text",
    number: "05",
    title: "التسليم والضمان",
    description: "تسليم المشروع مع شهادات ضمان معتمدة",
    details: [
      "شهادة ضمان لمدة 10 سنوات",
      "دليل استخدام وصيانة",
      "خدمة ما بعد البيع",
    ],
  },
]);


</script>
