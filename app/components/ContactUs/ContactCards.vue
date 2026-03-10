<template>
  <div>
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
        <p class="text-primary font-medium mb-1 hover:cursor-pointer">
          {{ item.value }}
        </p>
        <p class="text-sm text-muted-foreground">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const contactInfo = [
  {
    icon: "lucide:phone",
    title: "اتصل بنا",
    value: "9660547202483" + " |  " + "",
    description: "متاحون على مدار الساعة",
  },
  {
    icon: "lucide:message-circle",
    title: "واتساب",
    value: "9660547202483" + " |  " + " ",
    description: "رد فوري على استفساراتك",
  },
  {
    icon: "lucide:map-pin",
    title: "الموقع",
    value: "القصيم، المملكة العربية السعودية",
    description: "فروع في جميع أنحاء المملكة",
  },
];
</script>

<style scoped></style>
