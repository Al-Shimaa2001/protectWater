<template>
  <section id="why-us" class="py-24 bg-muted/50">
    <UContainer>
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Content Side -->
        <div>
          <UBadge
            color="primary"
            variant="soft"
            size="lg"
            data-aos="flip-up"
            class="mb-4"
          >
            لماذا تختارنا
          </UBadge>

          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
          >
            نحن الخيار الأمثل
            <span data-aos="fade-left" class="text-primary">لحماية منزلك</span>
          </h2>

          <p
            data-aos="fade-up"
            class="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            مع خبرة تتجاوز
            <span data-aos="fade-right" class="font-bold text-primary"
              >15 عاماً</span
            >
            في مجال العزل وكشف التسربات، نضمن لك خدمة احترافية ونتائج مضمونة
            بنسبة
            <span class="font-bold text-primary">100%</span>
          </p>

          <!-- Certifications -->
          <div data-aos="fade-up" class="space-y-3">
            <div
              v-for="(cert, index) in certifications"
              :key="index"
              class="flex items-center gap-3"
            >
              <UIcon
                name="i-heroicons-check-circle"
                class="w-5 h-5 text-emerald-500 shrink-0"
              />
              <span class="text-gray-700">{{ cert }}</span>
            </div>
          </div>
        </div>

        <!-- Features Grid -->
        <div data-aos="fade-up" class="grid sm:grid-cols-2 gap-6">
          <UCard
            v-for="(feature, index) in features"
            :key="index"
            :ui="{
              base: 'h-full',
              body: {
                base: 'h-full flex flex-col',
              },
            }"
            class="hover:shadow-lg transition-shadow duration-300 hover:border-primary/50"
          >
            <div class="flex items-start gap-4 mb-4">
              <div class="p-3 rounded-lg bg-primary/10">
                <UIcon :name="feature.icon" class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3
                  class="text-lg font-bold text-gray-900  mb-1"
                >
                  {{ feature.title }}
                </h3>
                <p class="text-sm text-gray-600 ">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const certifications = ref([
  "شهادات دولية معتمدة",
  "فريق فني مؤهل ومدرب",
  "استخدام مواد أصلية ومعتمدة",
  "ضمان مكتوب على جميع الأعمال",
  "سرعة في الاستجابة والتنفيذ",
]);

const features = ref([
  {
    title: "فحص مجاني",
    description: "فحص مجاني شامل للمنزل وتقرير مفصل",
    icon: "i-heroicons-magnifying-glass",
  },
  {
    title: "حلول متكاملة",
    description: "حلول شاملة لجميع مشاكل العزل والتسربات",
    icon: "i-heroicons-puzzle-piece",
  },
  {
    title: "تقنيات حديثة",
    description: "أحدث الأجهزة والتقنيات في الكشف والمعالجة",
    icon: "i-heroicons-computer-desktop",
  },
  {
    title: "صديق للبيئة",
    description: "مواد صديقة للبيئة وآمنة للعائلة",
    icon: "i-heroicons-leaf",
  },
]);
</script>
