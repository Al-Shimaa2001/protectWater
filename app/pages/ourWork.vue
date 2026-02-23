<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <Header
      background="/images/hero-projects-min.webp"
      backgroundType="image"
      :overlay="true"
      overlayColor="var(--color-secondary)"
      :overlayOpacity="0.6"
      height="100vh"
      title="أعمالنا تتحدث عنّا"
      description="نفخر بتقديم خدمات بأعلى معايير الجودة في مجالات العزل والترميم ومكافحة الحشرات والتنظيف في جميع مناطق المملكة"
    />
    <!-- Stats -->
    <section class="py-12 border bg-card">
      <div
        class="px-3 mx-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-8 md:gap-16"
      >
        <counter
          v-for="(stat, index) in stats"
          :key="stat.index"
          :number="stat.number"
          :label="stat.label"
          textColor="var(--color-secondary)"
        />
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="py-10 px-4">
      <div class="container mx-auto">
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <UButton
            v-for="cat in categories"
            :key="cat.id"
            :variant="activeCategory === cat.id ? 'solid' : 'outline'"
            :color="activeCategory === cat.id ? 'primary' : 'gray'"
            class="font-semibold gap-2 rounded-full px-5"
            @click="setActiveCategory(cat.id)"
          >
            <Icon :name="cat.icon" class="w-4 h-4" />
            {{ cat.label }}
          </UButton>
        </div>

        <!-- Project Grid -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[240px]"
        >
          <ProjectCard
            v-for="project in filtered"
            :key="project.id"
            :image="project.image"
            :title="project.title"
            :category="project.categoryLabel"
            :description="project.description"
            :tall="project.tall"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-4 bg-secondary" data-usal="fade-d">
      <div class="container mx-auto text-center">
        <h2
          class="text-3xl md:text-4xl font-cairo font-black text-primary-foreground mb-4"
        >
          {{ question }}
        </h2>
        <p class="text-primary-foreground/80 font-cairo mb-8 max-w-lg mx-auto">
          {{ contactUsText }}
        </p>
        <div class="flex gap-4 justify-center">
          <ButtonContactUs />
          <ButtonWhatsapp />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  title: "أعمالنا -  شركة العزل الذهبي",
  description:
    "استعرض مجموعة من مشاريعنا الناجحة في العزل المائي والحراري، الترميمات، مكافحة الحشرات، وتنظيف المجالس والحدائق. شاهد كيف نقدم حلولاً مبتكرة وجودة عالية لعملائنا في جميع أنحاء المملكة العربية السعودية.",
});
useHead({
  title: "أعمالنا -  شركة العزل الذهبي",
  meta: [
    {
      name: "description",
      content:
        "استعرض مجموعة من مشاريعنا الناجحة في العزل المائي والحراري، الترميمات، مكافحة الحشرات، وتنظيف المجالس والحدائق. شاهد كيف نقدم حلولاً مبتكرة وجودة عالية لعملائنا في جميع أنحاء المملكة العربية السعودية.",
    },
  ],
});
const question = "هل لديك مشروع يحتاج تنفيذ؟";
const contactUsText =
  "   تواصل معنا اليوم للحصول على استشارة وعرض سعر مخصص لمشروعك";

// Categories
const categories = [
  { id: "all", label: "الكل", icon: "i-heroicons-shield-check" },
  { id: "waterproofing", label: "العزل المائي", icon: "i-heroicons-cloud" },
  { id: "renovation", label: "الترميمات", icon: "i-heroicons-paint-brush" },
  { id: "pest", label: "مكافحة الحشرات", icon: "i-heroicons-bug-ant" },
  { id: "cleaning", label: "التنظيف", icon: "i-heroicons-sparkles" },
  { id: "pools", label: "المسابح", icon: "guidance:swimming-pool" },
];

// Projects
const projects = [
  {
    id: 1,
    image: "/images/work-waterproofing.webp",
    title: "عزل سطح مبنى سكني",
    category: "waterproofing",
    categoryLabel: "العزل المائي",
    description:
      "تنفيذ عزل مائي وحراري كامل لسطح مبنى سكني بمساحة ٥٠٠ متر مربع باستخدام أحدث المواد العازلة.",
    tall: true,
  },
  {
    id: 2,
    image: "/images/work-tank.webp",
    title: "عزل خزان مياه أرضي",
    category: "waterproofing",
    categoryLabel: "العزل المائي",
    description: "عزل خزان مياه أرضي بسعة ٢٠ طن مع ضمان ١٠ سنوات على العزل.",
    tall: true,
  },
  {
    id: 3,
    image: "/images/work-bathroom.webp",
    title: "ترميم حمامات فاخرة",
    category: "renovation",
    categoryLabel: "الترميمات",
    description: "ترميم وتجديد حمامات بتصميم عصري فاخر مع عزل مائي كامل.",
  },
  {
    id: 4,
    image: "/images/work-pest.webp",
    title: "مكافحة حشرات منزلية",
    category: "pest",
    categoryLabel: "مكافحة الحشرات",
    description: "رش ومكافحة شاملة للصراصير وبق الفراش مع ضمان ٦ أشهر.",
  },
  {
    id: 5,
    image: "/images/work-cleaning.webp",
    title: "تنظيف مجلس عربي",
    category: "cleaning",
    categoryLabel: "التنظيف",
    description: "تنظيف عميق لمجلس عربي فاخر مع تعقيم الأقمشة والسجاد.",
  },
  {
    id: 6,
    image: "/images/work-pool.webp",
    title: "عزل وترميم مسبح",
    category: "pools",
    categoryLabel: "المسابح",
    description: "ترميم وعزل مسبح خاص مع تجديد البلاط وأنظمة الفلترة.",
  },
];

// Stats
const stats = [
  { number: 1200, label: "مشروع منجز" },
  { number: 98, label: "رضا العملاء" },
  { number: 15, label: "سنة خبرة" },
  { number: 50, label: "فني متخصص" },
];

// State
const activeCategory = ref("all");

// Computed
const filtered = computed(() => {
  return activeCategory.value === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory.value);
});

// Methods
const setActiveCategory = (category) => {
  activeCategory.value = category;
};
</script>
