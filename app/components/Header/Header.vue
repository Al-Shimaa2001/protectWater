<template>
  <div
    class="header-container relative overflow-hidden"
    :style="backgroundStyle"
  >
    <div v-if="overlay" class="absolute inset-0" :style="overlayStyle"></div>

    <div
      class="relative z-10 h-full py-4 flex flex-col items-center justify-center text-center text-white"
      v-usal="'fade-u duration-500'"
    >
      <div
        class="bg-gray-300/20 p-2 rounded-xl flex items-center w-70 my-5 mx-3 -translate-y-50"
      >
        <span class="m-2 p-2 bg-green-500 rounded-full"></span>
        <p class="text-lg" data-usal="fade-u">
          {{ experienceText }}
        </p>
      </div>
      <slot name="header">
        <h1
          v-if="title"
          class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          {{ title }}
        </h1>
      </slot>

      <p
        v-if="description"
        class="text-lg md:text-xl mb-6 max-w-2xl"
        data-usal="fade-u"
      >
        {{ description }}
      </p>

      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  description?: string;
  background?: string;
  backgroundType?: "color" | "image" | "gradient" | "video";
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  height?: string;
  minHeight?: string;
}

const props = withDefaults(defineProps<Props>(), {
  description: "",
  background: "",
  backgroundType: "color",
  overlay: false,
  overlayColor: "#000",
  overlayOpacity: 0.5,
  height: "100vh",
  minHeight: "400px",
});

const defaultTexts = {
  experience: "خبرة اكثر من 15 عام في المجال",
};

const experienceText = computed(() => defaultTexts.experience);

const backgroundStyle = computed(() => {
  const styles: Record<string, string> = {
    height: props.height,
    minHeight: props.minHeight,
  };

  if (!props.background) return styles;

  switch (props.backgroundType) {
    case "image":
      styles.backgroundImage = `url('${props.background}')`;
      styles.backgroundSize = "cover";
      styles.backgroundPosition = "center";
      styles.backgroundRepeat = "no-repeat";
      break;

    case "gradient":
      styles.background = props.background;
      break;

    case "color":
    default:
      styles.backgroundColor = props.background;
      break;
  }

  return styles;
});

const overlayStyle = computed(() => ({
  backgroundColor: props.overlayColor,
  opacity: props.overlayOpacity.toString(),
}));
</script>

<style scoped>
.header-container {
  height: v-bind(height);
}
</style>
