<template>
  <div>
    <section
      class="flex flex-col items-center justify-center py-20 bg-linear-to-br from-primary-50 to-blue-50"
    >
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {{ pageContent.booking.title }}
            </h2>
            <p class="text-gray-600 text-lg">
              {{ pageContent.booking.subtitle }}
            </p>
          </div>

          <!-- Booking Features -->

          <div class="grid md:grid-cols-3 gap-6 mt-12">
            <div
              v-for="feature in bookingFeatures"
              :key="feature.title"
              class="text-center"
            >
              <div
                class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4"
              >
                <UIcon :name="feature.icon" class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                {{ feature.title }}
              </h3>
              <p class="text-gray-600 text-sm">
                {{ feature.description }}
              </p>
            </div>
          </div>
          <div class="flex gap-4 items-center justify-center my-3 py-4 w-full">
            <ButtonContactUs />
            <ButtonWhatsapp />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Booking Features
const bookingFeatures = [
  {
    icon: "i-heroicons-clock",
    title: "حجز سريع",
    description: "احجز خدمتك خلال دقائق",
    delay: 100,
  },
  {
    icon: "i-heroicons-shield-check",
    title: "ضمان الجودة",
    description: "خدمات معتمدة وموثوقة",
    delay: 200,
  },
  {
    icon: "i-heroicons-phone",
    title: "دعم فوري",
    description: "نتواصل معك خلال 24 ساعة",
    delay: 300,
  },
];
// Page content constants
const pageContent = {
  booking: {
    title: "حجز خدمة سريع",
    subtitle: "اختر الخدمة المطلوبة تواصل معانا فوراً",
  },
};
</script>

<style scoped></style>
