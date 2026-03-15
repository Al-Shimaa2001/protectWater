<template>
  <div class="min-h-screen">
    <Header
      background="/images/hero-contact-min.webp"
      backgroundType="image"
      :overlay="true"
      overlayColor="var(--color-blue-800)"
      :overlayOpacity="0.5"
      height="100vh"
      title="تواصل معنا"
      description="تواصل معنا للاستفسار والخدمات - نحن هنا لمساعدتك في أي وقت"
    >
      <div class="flex gap-4 justify-center my-7" data-usal="fade-d">
        <ButtonContactUs />
        <ButtonWhatsapp />
      </div>
    </Header>
    <main class="pt-20">
      <!-- Contact Content -->
      <section
        class="py-20 flex flex-col justify-center items-center"
        data-usal="fade-u"
      >
        <div
          class="container flex flex-col justify-center gap-4 items-center max-w-4xl"
        >
          <ContactUsContactCards />
          <ContactUsWorkingHours />

          <!-- Quick Contact Buttons -->
          <div class="flex items-center gap-4">
            <ButtonContactUs />
            <ButtonWhatsapp />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  title: "تواصل معنا ",
  meta: [
    {
      name: "description",
      content:
        "تواصل معنا للحصول على استشارة مجانية حول خدمات العزل وكشف التسربات والتنظيف ومكافحة الحشرات. نحن هنا لمساعدتك في أي وقت.",
    },
  ],
});
useHead({
  title: "تواصل معنا ",
  meta: [
    {
      name: "description",
      content:
        "تواصل معنا للحصول على استشارة مجانية حول خدمات العزل وكشف التسربات والتنظيف ومكافحة الحشرات. نحن هنا لمساعدتك في أي وقت.",
    },
  ],
});
</script>
