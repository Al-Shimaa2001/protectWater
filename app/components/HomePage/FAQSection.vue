<template>
  <section
    id="faq"
    class="py-24 bg-background"
    data-aos="fade-up"
    data-aos-duration="800"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <UBadge
            color="primary"
            variant="soft"
            size="lg"
            data-aos="flip-up"
            class="mb-4"
          >
            الأسئلة الشائعة
          </UBadge>

          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
            هل لديك أسئلة؟
          </h2>
          <p class="text-muted-foreground max-w-2xl mx-auto">
            إليك إجابات على أكثر الأسئلة شيوعاً حول خدماتنا. انقر على أي سؤال
            لعرض الإجابة
          </p>
        </div>

        <div
          class="grid grid-cols-1 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <!-- Mobile Accordion (Hidden on desktop) -->
          <div class="mt-12 flex" data-aos="fade-up" data-aos-delay="300">
            <UAccordion
              :items="mobileFaqItems"
              :multiple="false"
              variant="soft"
              size="lg"
              class="space-y-4"
            >
              <template #item="{ item, open }">
                <UAccordionItem
                  class="bg-card rounded-xl border border-border px-6 shadow-sm"
                  :class="open ? 'border-primary/20 shadow-card' : ''"
                >
                  <Transition
                    enter-active-class="transition-all duration-300 ease-out"
                    enter-from-class="transform opacity-0 max-h-0"
                    enter-to-class="opacity-100 max-h-[500px]"
                    leave-active-class="transition-all duration-300 ease-in"
                    leave-from-class="opacity-100 max-h-[500px]"
                    leave-to-class="transform opacity-0 max-h-0"
                  >
                    <div v-if="open" class="overflow-hidden">
                      <UAccordionContent class="pb-4">
                        <p class="text-gray-700 leading-relaxed">
                          {{ item.content }}
                        </p>
                      </UAccordionContent>
                    </div>
                  </Transition>
                </UAccordionItem>
              </template>
            </UAccordion>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui";

const activeIndex = ref<number>(0); // Default to first question

const faqItems = ref<AccordionItem[]>([
  {
    label: "هل العزل المائي آمن على الصحة؟",
    content:
      "نعم، جميع المواد المستخدمة في العزل معتمدة ومطابقة للمواصفات العالمية وآمنة تماماً على الصحة والبيئة. نستخدم مواد خالية من المركبات الضارة. نحن نحرص على استخدام مواد صديقة للبيئة ولا تسبب أي أضرار صحية للأفراد، كما نقدم شهادات السلامة والجودة لجميع المواد المستخدمة.",
  },
  {
    label: "كم مدة الضمان على أعمال العزل؟",
    content:
      "نقدم ضمان كتابي يصل إلى 10 سنوات على جميع أعمال العزل، يشمل الصيانة المجانية في حال حدوث أي مشكلة خلال فترة الضمان. يتم تقديم وثيقة ضمان رسمية موثقة، ونلتزم بكافة بنودها. كما نوفر خدمة متابعة دورية خلال فترة الضمان.",
  },
  {
    label: "هل الفحص المبدئي مجاني؟",
    content:
      "نعم، نقدم خدمة الفحص والكشف المبدئي مجاناً لتحديد حجم المشكلة وتقديم عرض سعر واضح ومفصل قبل بدء العمل. يتم الفحص بواسطة خبراء متخصصين باستخدام أحدث الأجهزة، ونقدم تقريراً مفصلاً عن حالة المبنى والتوصيات اللازمة.",
  },
  {
    label: "كم يستغرق تنفيذ أعمال العزل؟",
    content:
      "يعتمد ذلك على حجم المشروع، لكن بشكل عام عزل السطح العادي يستغرق من يوم إلى ثلاثة أيام. نلتزم دائماً بالمواعيد المتفق عليها ونسلم المشروع في الوقت المحدد دون تأخير، مع الحفاظ على أعلى معايير الجودة.",
  },
  {
    label: "ما هي طرق الدفع المتاحة؟",
    content:
      "نوفر عدة خيارات للدفع تشمل: الدفع النقدي، التحويل البنكي، والدفع بالتقسيط لبعض المشاريع الكبيرة. كما نقدم خصومات خاصة على الدفع المقدم. يمكنك اختيار الطريقة التي تناسبك، ونوفر فواتير رسمية معتمدة لجميع المدفوعات.",
  },
  {
    label: "هل يمكن الكشف عن التسربات بدون تكسير؟",
    content:
      "نعم، نستخدم أحدث الأجهزة الإلكترونية التي تكشف التسربات بدقة عالية دون الحاجة للتكسير، مما يوفر الوقت والتكلفة ويحافظ على جمال منزلك. تشمل هذه الأجهزة كاميرات التصوير الحراري وأجهزة الكشف الصوتية المتطورة.",
  },
]);

const mobileFaqItems = computed(() =>
  faqItems.value.map((item, index) => ({
    ...item,
    slot: "item" as const,
    value: `mobile-item-${index}`,
  })),
);
</script>
