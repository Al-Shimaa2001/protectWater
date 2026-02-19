<template>
  <div
    :class="[
      'group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl',
      tall ? 'row-span-2' : '',
    ]"
  >
    <div
      class="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent z-10"
    />
    <NuxtImg
      :src="image"
      :alt="title"
      loading="lazy"
      class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div class="relative z-20 h-full flex flex-col justify-end p-6">
      <span
        class="inline-block bg-primary/90 text-primary-foreground font-cairo font-bold text-xs px-3 py-1 rounded-full mb-3 self-start"
      >
        {{ category }}
      </span>
      <h3 class="text-xl font-cairo font-black text-white mb-2">
        {{ title }}
      </h3>
      <p class="text-white/90 font-cairo text-sm mb-3 line-clamp-2">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  category: String,
  description: String,
  tall: Boolean,
});
</script>
