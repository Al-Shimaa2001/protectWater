<template>
  <footer
    id="contact"
    class="bg-gray-900 text-white"
    data-aos="fade-up"
    data-aos-duration="800"
  >
    <!-- Main Footer -->
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Company Info -->
        <div data-aos="fade-up" data-aos-delay="100">
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
              <h1 class="text-lg font-bold text-foreground">العزل الذهبي</h1>
              <span class="text-xs text-muted">للعزل وكشف التسريبات </span>
            </div>
          </NuxtLink>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            شركة متخصصة في العزل والتنظيف ومكافحة الحشرات بأحدث التقنيات وضمان
            يصل إلى 10 سنوات
          </p>
        </div>

        <!-- Services -->
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 class="text-lg font-bold mb-6">خدماتنا</h4>
          <ul class="space-y-3">
            <li
              v-for="(service, index) in services"
              :key="index"
              data-aos="fade-up"
              :data-aos-delay="200 + index * 50"
            >
              <NuxtLink
                :to="service.href"
                class="text-gray-400 hover:text-amber-400 transition-colors text-sm"
              >
                {{ service.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div data-aos="fade-up" data-aos-delay="300">
          <h4 class="text-lg font-bold mb-6">روابط سريعة</h4>
          <ul class="space-y-3">
            <li
              v-for="(link, index) in quickLinks"
              :key="index"
              data-aos="fade-up"
              :data-aos-delay="300 + index * 50"
            >
              <NuxtLink
                :to="link.href"
                class="text-gray-400 hover:text-amber-400 transition-colors text-sm"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div data-aos="fade-up" data-aos-delay="400">
          <h4 class="text-lg font-bold mb-6">تواصل معنا</h4>
          <ul class="space-y-4">
            <li
              v-for="(contact, index) in contactInfo"
              :key="index"
              class="flex items-center gap-3"
              data-aos="fade-up"
              :data-aos-delay="400 + index * 100"
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
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div
        class="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p class="text-sm text-gray-400">
          © {{ currentYear }} العزل الذهبي. جميع الحقوق محفوظة
        </p>
        <div class="flex items-center gap-6">
          <a
            v-for="(link, index) in bottomLinks"
            :key="index"
            :href="link.href"
            class="text-sm text-gray-400 hover:text-amber-400 transition-colors"
            data-aos="fade-left"
            :data-aos-delay="100 * index"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();

const services = [
  { label: "العزل المائي والحراري", href: "/services#insulation" },
  { label: "كشف التسربات", href: "/services#leak-detection" },
  { label: "خدمات التنظيف", href: "/services#cleaning" },
  { label: "مكافحة الحشرات", href: "/services#pest-control" },
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
  { label: "سياسة الخصوصية", href: "#" },
  { label: "الشروط والأحكام", href: "#" },
];
</script>

<style scoped></style>
