<template>
  <div>
    <HeaderServicesHero
      background="/images/hero-insulation.jpg"
      backgroundType="image"
      :overlay="true"
      overlayColor="var(--color-blue-800)"
      :overlayOpacity="0.5"
      height="100%"
      title="خدمات العزل المتكاملة "
      description="نقدم خدمات عزل متكاملة للخزانات والأسطح والحمامات بأحدث التقنيات والمواد العازلة عالية الجودة"
    />
  </div>
  <UContainer class="px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-5">
    <main class="col-span-2">
      <section class="mb-4">
        <CardServiceCard title="ما نقدمه في هذه الخدمة" />
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-content-center items-center"
        >
          <CardServiceDetails
            v-for="(detail, index) in description"
            :key="index"
            :icon="detail.icon"
            :description="detail.details"
          />
        </div>
      </section>
      <section>
        <CardServiceCard title="المواد والتقنيات المستخدمة" />
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-content-center items-center"
        >
          <CardServiceDetails
            v-for="(material, index) in material"
            :key="index"
            :icon="material.icon"
            :description="material.label"
          />
        </div>
      </section>
    </main>
    <section>
      <div
        class="bg-secondary text-white my-5 flex justify-center items-center flex-col gap-5 rounded-2xl p-3"
      >
        <h1 class="text-xl font-bold">اطلب الخدمة الان</h1>
        <p class="text-sm">احصل على استشارة وعرض سعر مخصص</p>
        <ButtonContactUs />
      </div>
    </section>
  </UContainer>
</template>

<script setup>
const description = ref([
  {
    icon: "i-heroicons-shield-check",
    details: "عزل الخزانات الأرضية والعلوية",
  },
  {
    icon: "i-heroicons-shield-check",
    details: "عزل الأسطح من تسربات الأمطار",
  },
  {
    icon: "i-heroicons-shield-check",
    details: "عزل الحمامات والمطابخ",
  },
  {
    icon: "i-heroicons-shield-check",
    details: "عزل حراري متكامل للمباني",
  },
]);
const material = ref([
  {
    icon: "heroicons:beaker",
    label: "مادة الإيبوكسي (Epoxy)",
  },
  {
    icon: "heroicons:beaker",
    label: "رولات البيتومين (Bitumen Rolls)",
  },
  {
    icon: "heroicons:beaker",
    label: "مادة السيكا (Sika)",
  },
  {
    icon: "heroicons:beaker",
    label: "مادة البولي يوريثان (Polyurethane)",
  },
  {
    icon: "heroicons:beaker",
    label: "الفوم العازل (Spray Foam)",
  },
  {
    icon: "heroicons:beaker ",
    label: "ألواح الصوف الصخري (Rock Wool)",
  },
]);
</script>

<style scoped></style>
