<template>
  <header class="py-4 md:py-6 lg:py-8">
    <div class="container max-w-4xl mx-auto px-4">
      <div class="flex flex-col gap-6 items-center justify-center">
        <div class="bg-gray-300/20 p-2 rounded-xl flex items-center">
          <span class="m-2 p-2 bg-green-500 rounded-full"></span>
          <p class="text-lg text-white">خبرة اكثر من 15 عام في المجال</p>
        </div>
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl lg:text-6xl mt-2">
            شركة متخصصة في
            <p class="text-orange-300 pt-2 mt-2 pb-6">العزل المائي والحراري</p>
            وكشف تسربات المياه
          </h1>
        </div>
        <div>
          <p
            class="text-center text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto text-white mt-2"
          >
            نقدم حلولاً متكاملة لحماية منزلك من التسربات والرطوبة بأحدث التقنيات
            وضمان يصل إلى 15 سنة
          </p>
        </div>
        <div class="flex gap-x-4">
          <ButtonContactUs />
          <ButtonWhatsapp />
        </div>
        <div>
          <Counter />
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  background: linear-gradient(
    147deg,
    rgb(29, 173, 235) 88%,
    rgb(133, 182, 223) 100%
  );
  height: 100vh;
}
</style>
