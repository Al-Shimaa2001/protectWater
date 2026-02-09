<template>
  <div class="min-h-screen">
    <Header
      background="/images/hero-about.jpg"
      backgroundType="image"
      overlay="true"
      overlayColor="var(--color-blue-800)"
      overlayOpacity="0.5"
      height="100%"
      description="شركة متخصصة في العزل المائي والحراري - عزل خزانات المياه والحمامات والمسابح - خدمات الترميمات الشاملة - مكافحة الحشرات (صراصير، بق، فئران) - طارد الحمام - تنظيف المجالس والحدائق - نقدم خدمات بجودة عالية وضمان مميز في المملكة العربية السعودية"
    />
    <main class="pt-20">
      <!-- About Content -->
      <section class="py-20 bg-background">
        <UContainer>
          <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div data-aos="fade-right" data-aos-duration="1000">
              <UBadge size="lg" color="primary" variant="soft" class="mb-4">
                قصتنا
              </UBadge>
              <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
                رحلة نجاح امتدت لأكثر من 15 عاماً
              </h2>
              <p class="text-lg text-muted-foreground mb-6 leading-relaxed">
                بدأت شركة العزل الذهبي رحلتها في عام 2008 برؤية واضحة لتقديم
                أفضل خدمات العزل وكشف التسربات في المملكة العربية السعودية. منذ
                ذلك الحين، نمت الشركة لتصبح واحدة من أبرز الشركات المتخصصة في
                هذا المجال.
              </p>
              <p class="text-lg text-muted-foreground mb-8 leading-relaxed">
                نفخر بأننا خدمنا أكثر من 5000 عميل وأنجزنا أكثر من 10000 مشروع
                بنجاح، مما يجعلنا الخيار الأول للعملاء الذين يبحثون عن الجودة
                والاحترافية.
              </p>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <Counter
              v-for="(stat, index) in stats"
              :key="index"
              :data-aos="'fade-up'"
              :data-aos-delay="index * 100"
              data-aos-duration="800"
              :icon="stat.icon"
              :number="stat.value"
              :label="stat.label"
            />
          </div>

          <!-- Vision & Mission -->
          <div class="grid md:grid-cols-2 gap-8 mb-20">
            <Card
              v-for="(item, index) in vision"
              :key="index"
              :data-aos="'fade-up'"
              :data-aos-delay="index * 100"
              data-aos-duration="800"
              :name="item.icon"
              :header="item.title"
              :details="item.description"
            />
          </div>

          <!-- Values -->

          <HeaderSection main-title="قيمنا" sub-title="القيم التي نؤمن بها" />
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              v-for="(value, index) in values"
              :key="index"
              :data-aos="'fade-up'"
              :data-aos-delay="index * 100"
              data-aos-duration="800"
              :name="value.icon"
              :header="value.title"
              :details="value.description"
            />
          </div>
        </UContainer>
      </section>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
  title: "من نحن",
});
useHead({
  title: "من نحن - العزل الذهبي",
});

const stats = ref([
  { icon: "i-heroicons-clock", value: "15", label: "سنوات خبرة" },
  { icon: "i-heroicons-users", value: "5000", label: "عميل راضٍ" },
  { icon: "i-heroicons-building-office", value: "10000", label: "مشروع منجز" },
  { icon: "i-heroicons-award", value: "10", label: "سنوات ضمان" },
]);
const vision = ref([
  {
    icon: "i-heroicons-eye",
    title: "رؤيتنا",
    description:
      "أن نكون الشركة الرائدة والأولى في مجال خدمات العزل والتنظيف ومكافحة الحشرات على مستوى المملكة، وأن نحقق أعلى مستويات رضا العملاء من خلال تقديم خدمات متميزة وحلول مبتكرة.",
  },
  {
    icon: "i-heroicons-target",
    title: "مهمتنا",
    description:
      "تقديم خدمات عزل وتنظيف ومكافحة حشرات عالية الجودة باستخدام أحدث التقنيات والمواد المعتمدة، مع الالتزام بالمواعيد وتقديم ضمانات حقيقية لعملائنا الكرام.",
  },
]);
const values = ref([
  {
    icon: "i-heroicons-shield-check",
    title: "الجودة",
    description:
      "نلتزم بأعلى معايير الجودة في جميع خدماتنا ونستخدم أفضل المواد المعتمدة دولياً",
  },
  {
    icon: "i-heroicons-award",
    title: "الاحترافية",
    description: "فريق عمل مدرب ومؤهل يقدم خدمات احترافية تلبي توقعات عملائنا",
  },
  {
    icon: "i-heroicons-clock",
    title: "الالتزام",
    description:
      "نلتزم بالمواعيد المحددة ونحرص على إنجاز العمل في الوقت المتفق عليه",
  },
  {
    icon: "i-heroicons-users",
    title: "خدمة العملاء",
    description: "نوفر دعم فني متميز ومتابعة مستمرة لضمان رضا العملاء",
  },
]);
</script>

<style scoped></style>
