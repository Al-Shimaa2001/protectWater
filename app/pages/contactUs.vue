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
          <!-- Contact Cards -->
          <div class="grid grid-col-1 md:grid-cols-2 gap-6 mb-8">
            <div
              v-for="(item, index) in contactInfo"
              :key="index"
              class="bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/20 transition-colors"
            >
              <div
                class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
              >
                <Icon :name="item.icon" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="font-bold text-foreground mb-1">{{ item.title }}</h3>
              <p class="text-primary font-medium mb-1">{{ item.value }}</p>
              <p class="text-sm text-muted-foreground">
                {{ item.description }}
              </p>
            </div>
          </div>

          <!-- Working Hours -->
          <div
            class="bg-card rounded-2xl p-6 shadow-card border border-border mb-8"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center"
              >
                <Icon name="lucide:clock" class="w-6 h-6 text-accent" />
              </div>
              <h3 class="text-xl font-bold text-foreground">ساعات العمل</h3>
            </div>
            <div class="space-y-4">
              <div
                v-for="(item, index) in workingHours"
                :key="index"
                class="flex justify-between items-center py-3 border-b border-border last:border-0"
              >
                <span class="font-medium text-foreground">{{ item.day }}</span>
                <span class="text-muted-foreground">{{ item.hours }}</span>
              </div>
            </div>
          </div>

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
  title: "تواصل معنا - Golden Insulation",
  meta: [
    {
      name: "description",
      content:
        "تواصل معنا للحصول على استشارة مجانية حول خدمات العزل وكشف التسربات والتنظيف ومكافحة الحشرات. نحن هنا لمساعدتك في أي وقت.",
    },
  ],
});
useHead({
  title: "تواصل معنا -  الشركة الذهبية للعزل",
  meta: [
    {
      name: "description",
      content:
        "تواصل معنا للحصول على استشارة مجانية حول خدمات العزل وكشف التسربات والتنظيف ومكافحة الحشرات. نحن هنا لمساعدتك في أي وقت.",
    },
  ],
});
const contactInfo = [
  {
    icon: "lucide:phone",
    title: "اتصل بنا",
    value: "0500000000" + " ||" + "023999929292929",
    description: "متاحون على مدار الساعة",
  },
  {
    icon: "lucide:message-circle",
    title: "واتساب",
    value: "0500000000" + " ||" + "023999929292929",
    description: "رد فوري على استفساراتك",
  },
  {
    icon: "lucide:mail",
    title: "البريد الإلكتروني",
    value: "info@golden-insulation.com",
    description: "راسلنا في أي وقت",
  },
  {
    icon: "lucide:map-pin",
    title: "الموقع",
    value: "القصيم، المملكة العربية السعودية",
    description: "فروع في جميع أنحاء المملكة",
  },
];

const workingHours = [
  { day: "السبت - الخميس", hours: "7:00 صباحاً - 10:00 مساءً" },
  { day: "الجمعة", hours: "4:00 عصراً - 11:00 مساءً" },
];
</script>
