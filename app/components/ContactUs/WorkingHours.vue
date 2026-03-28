<template>
  <div>
    <div class="bg-card rounded-2xl p-6 shadow-card border border-border mb-8">
      <div class="flex items-center gap-3 mb-6">
        <div
          class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center"
        >
          <Icon name="lucide:clock" class="w-6 h-6 text-accent" />
        </div>
        <h3 class="text-xl font-bold text-foreground">{{ title }}</h3>
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
  </div>
</template>

<script setup>
const title = "ساعات العمل";
const workingHours = [
  { day: "السبت : الخميس", hours: "7:00 صباحاً - 10:00 مساءً" },
  { day: "الجمعة", hours: "4:00 عصراً - 11:00 مساءً" },
];
</script>

<style scoped></style>
