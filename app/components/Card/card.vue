<template>
  <UCard
    data-aos="fade-up"
    variant="outlined"
    class="flex flex-col items-start rounded-lg border border-gray-200 p-2 h-full"
  >
    <template #header>
      <div class="mb-4 w-14 h-14 rounded-xl bg-blue-100/90 p-2">
        <UIcon :name="name" class="text-4xl text-primary-500" />
      </div>
    </template>

    <div>
      <h3 class="text-xl font-bold mb-2">{{ header }}</h3>
      <p class="text-sm text-muted">{{ details }}</p>
    </div>

    <template v-if="footer" #footer>
      <button
        class="focus:bg-primary-600 hover:bg-primary-600 focus:text-white hover:text-white px-4 py-2 rounded-md flex items-center gap-x-3"
      >
        <p>
          {{ footer }}
        </p>
        <Icon
          name="mdi-light:arrow-left"
          width="24"
          height="24"
          style="color: #ffffff"
        />
      </button>
    </template>
  </UCard>
</template>
<script setup>
defineProps({
  name: { type: String, default: "i-heroicons-photo" },
  header: { type: String },
  details: { type: String },
  footer: { type: String     },
});
</script>
