<template>
  <section
    id="faq"
    class="py-16 md:py-24 bg-background"

  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
        <!-- Section Header -->
        <HeaderSection
          mainTitle="الأسئلة الشائعة"
          subTitle="هل لديك أسئلة؟"
          description="إليك إجابات على أكثر الأسئلة شيوعاً حول خدماتنا. انقر على أي سؤال لعرض الإجابة"
        />
        <!-- FAQ Accordion - Same for mobile and desktop -->
        <div class="mt-8 md:mt-12" >
          <UAccordion
            :items="faqItems"
            :multiple="false"
            variant="soft"
            size="lg"
          >
          </UAccordion>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui";

const faqItems = ref<AccordionItem[]>([
  {
    label: "هل العزل المائي آمن على الصحة؟",
    content:
      "نعم، جميع المواد المستخدمة في العزل معتمدة ومطابقة للمواصفات العالمية وآمنة تماماً على الصحة والبيئة. نستخدم مواد خالية من المركبات الضارة. نحن نحرص على استخدام مواد صديقة للبيئة ولا تسبب أي أضرار صحية للأفراد، كما نقدم شهادات السلامة والجودة لجميع المواد المستخدمة.",
    slot: "default",
  },
  {
    label: "كم مدة الضمان على أعمال العزل؟",
    content:
      "نقدم ضمان كتابي يصل إلى 10 سنوات على جميع أعمال العزل، يشمل الصيانة المجانية في حال حدوث أي مشكلة خلال فترة الضمان. يتم تقديم وثيقة ضمان رسمية موثقة، ونلتزم بكافة بنودها. كما نوفر خدمة متابعة دورية خلال فترة الضمان.",
    slot: "default",
  },

  {
    label: "كم يستغرق تنفيذ أعمال العزل؟",
    content:
      "يعتمد ذلك على حجم المشروع، لكن بشكل عام عزل السطح العادي يستغرق من يوم إلى ثلاثة أيام. نلتزم دائماً بالمواعيد المتفق عليها ونسلم المشروع في الوقت المحدد دون تأخير، مع الحافظ على أعلى معايير الجودة.",
    slot: "default",
  },
  {
    label: "ما هي طرق الدفع المتاحة؟",
    content:
      "نوفر عدة خيارات للدفع تشمل: الدفع النقدي، التحويل البنكي، والدفع بالتقسيط لبعض المشاريع الكبيرة. كما نقدم خصومات خاصة على الدفع المقدم. يمكنك اختيار الطريقة التي تناسبك، ونوفر فواتير رسمية معتمدة لجميع المدفوعات.",
    slot: "default",
  },
  {
    label: "هل يمكن الكشف عن التسربات بدون تكسير؟",
    content:
      "نعم، نستخدم أحدث الأجهزة الإلكترونية التي تكشف التسربات بدقة عالية دون الحاجة للتكسير، مما يوفر الوقت والتكلفة ويحافظ على جمال منزلك. تشمل هذه الأجهزة كاميرات التصوير الحراري وأجهزة الكشف الصوتية المتطورة.",
    slot: "default",
  },
]);
</script>

<style scoped>
/* Custom animation for the icon */
.rotate-45 {
  transform: rotate(45deg);
}

/* Smooth shadow transitions */
.shadow-sm {
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);
}

.shadow-card {
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

/* Ensure RTL text alignment */
.text-right {
  text-align: right;
}
</style>
