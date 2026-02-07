<template>
  <div class="h-full py-4">
    <Header
      background="/images/hero-home.jpg"
      backgroundType="image"
      overlay="true"
      overlayColor="var(--color-blue-800)"
      overlayOpacity="0.5"
      height="100%"
      description="نقدم حلولاً متكاملة لحماية منزلك من التسربات والرطوبة بأحدث التقنيات وضمان يصل إلى 15 سنة"
    >
      <h1 class="text-4xl md:text-5xl lg:text-6xl my-2">
        شركة متخصصة في
        <p class="text-orange-300 pt-2 my-2 pb-6">العزل المائي والحراري</p>
        وكشف تسربات المياه
      </h1>
      <div class="flex gap-4 justify-center my-3">
        <ContactUs />
        <Whatsapp />
      </div>
      <div class="my-3">
        <Counter />
      </div>
    </Header>
  </div>
</template>

<script setup>
import ContactUs from "../Button/contactUs.vue";
import Whatsapp from "../Button/whatsapp.vue";
</script>

<style scoped></style>
