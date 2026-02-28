<template>
  <footer id="contact" class="bg-gray-900 text-white">
    <!-- Main Footer -->
    <UContainer class="mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Company Info -->
        <div>
          <NuxtLink to="/" class="flex items-center gap-3 mb-6">
            <div
              class="flex bg-blue-500 rounded-lg p-1 items-center justify-center me-2 shadow-blue-200"
            >
              <UIcon
                name="lucide:droplets"
                width="24"
                height="24"
                style="color: #fffffe"
              />
            </div>
            <div class="flex flex-col">
              <h1 class="text-lg font-bold text-foreground">
                {{ companyName }}
              </h1>
              <span class="text-xs text-muted">{{ companyTagline }}</span>
            </div>
          </NuxtLink>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            {{ companyDescription }}
          </p>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-bold mb-6">{{ servicesTitle }}</h4>
          <ul class="space-y-3">
            <li v-for="(service, index) in services" :key="index">
              <NuxtLink
                :to="service.href"
                class="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                external
              >
                {{ service.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-bold mb-6">{{ quickLinksTitle }}</h4>
          <ul class="space-y-3">
            <li v-for="(link, index) in quickLinks" :key="index">
              <NuxtLink
                :to="link.href"
                class="text-gray-400 hover:text-amber-400 text-sm"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-bold mb-6">{{ contactTitle }}</h4>
          <ul class="space-y-4">
            <li
              v-for="(contact, index) in contactInfo"
              :key="index"
              class="flex items-center gap-3"
            >
              <div
                class="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center"
              >
                <UIcon :name="contact.icon" class="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p class="text-xs text-gray-400">{{ contact.label }}</p>
                <p class="font-semibold text-sm">{{ contact.value }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </UContainer>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <UContainer
        class="mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p class="text-sm text-gray-400">
          {{ copyrightText }} {{ time }} {{ companyName }}.
          {{ rightsReservedText }}
        </p>
        <div class="flex items-center gap-6">
          <NuxtLink
            v-for="(link, index) in bottomLinks"
            :key="index"
            :to="link.href"
            class="text-sm text-gray-400 hover:text-amber-400 transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </UContainer>
    </div>
  </footer>
</template>

<script setup>
const time = ref("");
const mounted = ref(false);

onMounted(() => {
  time.value = new Date().getFullYear();
  mounted.value = true;
});

const companyName = "العزل الذهبي";
const companyTagline = "للعزل وكشف التسريبات";
const companyDescription =
  "شركة متخصصة في العزل والتنظيف ومكافحة الحشرات بأحدث التقنيات وضمان يصل إلى 10 سنوات";

const servicesTitle = "خدماتنا";
const quickLinksTitle = "روابط سريعة";
const contactTitle = "تواصل معنا";

const copyrightText = "©";
const rightsReservedText = "جميع الحقوق محفوظة";

const services = [
  { label: "كشف التسربات", href: "/services/leak-detection" },
  { label: "العزل المائي والحراري", href: "/services/insulation" },
  { label: "الترميمات وإعادة التأهيل", href: "/services/restoration" },
  { label: "تمديدات الغاز المركزية", href: "/services/gas-extensions" },
  { label: "خدمات التنظيف", href: "/services/cleaning" },
  { label: "مكافحة الحشرات", href: "/services/pest-control" },
];

const quickLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "خدماتنا", href: "/services" },
  { label: "من نحن", href: "/whoUs" },
  { label: "أعمالنا", href: "/ourWork" },
  { label: "تواصل معنا", href: "/contactUs" },
];

const contactInfo = [
  {
    icon: "i-heroicons-phone",
    label: "اتصل بنا",
    value: "0500000000",
  },
  {
    icon: "i-heroicons-envelope",
    label: "البريد الإلكتروني",
    value: "info@golden-insulation.com",
  },
  {
    icon: "i-heroicons-map-pin",
    label: "الموقع",
    value: "القصيم - فروع في جميع أنحاء المملكة",
  },
  {
    icon: "i-heroicons-clock",
    label: "ساعات العمل",
    value: "7 ص - 10 م | الجمعة: 4 ع - 11 م",
  },
];

const bottomLinks = [
  { label: "سياسة الخصوصية", href: "/privacy-policy" },
  { label: "الشروط والأحكام", href: "/terms-conditions" },
];
</script>

<style scoped></style>
