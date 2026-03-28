<template>
  <div class="min-h-screen">
    <Header
      background="/images/hero-contact-min.webp"
      backgroundType="image"
      :overlay="true"
      overlayColor="var(--color-blue-800)"
      :overlayOpacity="0.5"
      height="100vh"
      :title="title"
      :description="description"
    >
      <div class="flex gap-4 justify-center my-7" data-usal="fade-d">
        <ButtonContactUs />
        <ButtonWhatsapp />
      </div>
    </Header>
    <main class="pt-20">
      <!-- Contact Content -->
      <section
        class="pb-20 pt-10 flex flex-col justify-center items-center gap-10"
        data-usal="fade-u"
      >
        <p class="text-xl text-center text-gray-800 leading-10 px-4 max-w-3xl">
          {{ subTitle }}
        </p>
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
  title: "تواصل معنا - اعمار البلاد",
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
const title = "تواصل معانا";
const description =
  "تواصل معنا للاستفسار والخدمات - نحن هنا لمساعدتك في أي وقت";
const subTitle =
  "نحن في شركة إعمار البلاد نضع خدمتك وراحتك على رأس أولوياتنا. تواصل معنا اليوم للحصول على معاينة  أو استشارة فنية، أو عرض سعر يناسب احتياجاتك. فريقنا المتخصص جاهز للرد على استفساراتكم، وتقديم الحلول المناسبة لجميع متطلبات العزل المائي والحراري، عزل الخزانات والحمامات والمسابح، الترميمات، مكافحة الحشرات والقوارض، طارد الحمام، تنظيف المجالس والحدائق والخزانات. نخدم جميع مناطق السعودية، ونقدم خدمة سريعة بأسعار تنافسية وضمان ممتد على جميع أعمالنا. اتصل بنا الآن أو اترك رسالة وسنرد عليك في أقرب وقت.";
</script>
