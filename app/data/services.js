// data/services.js
export const servicesList = [
  {
    id: "cleaning",
    slug: "cleaning",
    title: "خدمات التنظيف المتكاملة",
    description:
      "نقدم أفضل خدمات التنظيف للمنازل والشركات بأحدث المعدات والمواد",
    heroImage: "/images/hero-cleaning-min.webp",
    offerings: [
      {
        icon: "i-heroicons-sparkles",
        details: "تنظيف عام للمنازل والفلل",
      },
      {
        icon: "i-heroicons-sparkles",
        details: "تنظيف السجاد والموكيت",
      },
      {
        icon: "i-heroicons-sparkles",
        details: "تنظيف الواجهات الزجاجية",
      },
      {
        icon: "i-heroicons-sparkles",
        details: "تعقيم وتطهير الأسطح",
      },
    ],
    materials: [
      {
        icon: "heroicons:beaker",
        label: "منظفات صديقة للبيئة",
      },
      {
        icon: "heroicons:beaker",
        label: "أجهزة بخار حديثة",
      },
      {
        icon: "heroicons:beaker",
        label: "مكانس كهربائية صناعية",
      },
      {
        icon: "heroicons:beaker",
        label: "مواد معقمة ألمانية",
      },
    ],
  },
  {
    id: "leak-detection",
    slug: "leak-detection",
    title: "كشف التسريبات",
    description: "كشف تسريبات المياه بأحدث الأجهزة الإلكترونية بدون تكسير",
    heroImage: "/images/hero-leak-detection-min.webp",

    offerings: [
      {
        icon: "i-heroicons-magnifying-glass",
        details: "كشف تسريبات الخزانات",
      },
      {
        icon: "i-heroicons-magnifying-glass",
        details: "كشف تسريبات المواسير",
      },
      {
        icon: "i-heroicons-magnifying-glass",
        details: "كشف تسريبات الحمامات",
      },
      {
        icon: "i-heroicons-magnifying-glass",
        details: "تقرير فني مفصل",
      },
    ],

    materials: [
      {
        icon: "heroicons:cpu-chip",
        label: "جهاز كشف التسرب الصوتي",
      },
      {
        icon: "heroicons:cpu-chip",
        label: "كاميرا حرارية",
      },
      {
        icon: "heroicons:cpu-chip",
        label: "جهاز قياس الرطوبة",
      },
    ],
  },
  {
    id: "insulation",
    slug: "insulation",
    title: "خدمات العزل المتكاملة",
    description:
      "نقدم خدمات عزل متكاملة للخزانات والأسطح والحمامات بأحدث التقنيات",
    heroImage: "/images/hero-insulation-min.webp",

    offerings: [
      {
        icon: "i-heroicons-shield-check",
        details: "عزل الخزانات الأرضية والعلوية",
      },
      {
        icon: "i-heroicons-shield-check",
        details: "عزل الأسطح من تسربات الأمطار",
      },
      {
        icon: "i-heroicons-shield-check",
        details: "عزل الحمامات والمطابخ",
      },
      {
        icon: "i-heroicons-shield-check",
        details: "عزل حراري متكامل للمباني",
      },
    ],

    materials: [
      {
        icon: "heroicons:beaker",
        label: "مادة الإيبوكسي (Epoxy)",
      },
      {
        icon: "heroicons:beaker",
        label: "رولات البيتومين (Bitumen Rolls)",
      },
      {
        icon: "heroicons:beaker",
        label: "مادة السيكا (Sika)",
      },
      {
        icon: "heroicons:beaker",
        label: "مادة البولي يوريثان (Polyurethane)",
      },
      {
        icon: "heroicons:beaker",
        label: "الفوم العازل (Spray Foam)",
      },
      {
        icon: "heroicons:beaker",
        label: "ألواح الصوف الصخري (Rock Wool)",
      },
    ],
  },
  {
    id: "restoration",
    slug: "restoration",
    title: "خدمات الترميم وإعادة التأهيل",
    description:
      "نقدم خدمات متكاملة لترميم المباني القديمة وإصلاح التشققات ومعالجة مشاكل الرطوبة وتجديد الواجهات",
    heroImage: "/images/hero-restoration-min.webp",

    offerings: [
      {
        icon: "i-heroicons-home-modern",
        details: "ترميم المباني الأثرية والقديمة",
      },
      {
        icon: "i-heroicons-sparkles",
        details: "إصلاح التشققات والشروخ في الجدران",
      },
      {
        icon: "i-heroicons-cloud",
        details: "معالجة مشاكل الرطوبة والعفن",
      },
      {
        icon: "i-heroicons-paint-brush",
        details: "تجديد وترميم الواجهات الخارجية",
      },
      {
        icon: "i-heroicons-wrench-screwdriver",
        details: "ترميم الحوائط والأسقف المتضررة",
      },
      {
        icon: "i-heroicons-cube",
        details: "حقن الأساسات ومعالجتها",
      },
    ],

    materials: [
      {
        icon: "heroicons:beaker",
        label: "مواد حقن الأساسات (Injection Materials)",
      },
      {
        icon: "heroicons:beaker",
        label: "مواد الإصلاح الهيكلي (Structural Repair)",
      },
      {
        icon: "heroicons:beaker",
        label: "مواد معالجة الرطوبة (Damp Proofing)",
      },
      {
        icon: "heroicons:beaker",
        label: "مواد الترميم الكيميائية (Chemical Restoration)",
      },
      {
        icon: "heroicons:beaker",
        label: "مواد تقوية الخرسانة (Concrete Strengthening)",
      },
    ],
  },
  {
    id: "gas-extensions",
    slug: "gas-extensions",
    title: "خدمات تمديدات الغاز المركزية",
    description:
      "تصميم وتنفيذ شبكات الغاز المركزية للمباني السكنية والتجارية بأعلى معايير الأمان والجودة",
    heroImage: "/images/hero-gas-min.webp",

    offerings: [
      {
        icon: "i-heroicons-fire",
        details: "تمديدات شبكات الغاز المركزية للمباني",
      },
      {
        icon: "i-heroicons-wrench",
        details: "تركيب وصيانة محابس الغاز ومنظمات الضغط",
      },
      {
        icon: "i-heroicons-shield-check",
        details: "أنظمة الأمان وكواشف تسرب الغاز",
      },
      {
        icon: "i-heroicons-home",
        details: "تمديدات الغاز للفلل والمجمعات السكنية",
      },
      {
        icon: "i-heroicons-building-office",
        details: "شبكات الغاز للمطاعم والفنادق",
      },
      {
        icon: "i-heroicons-arrow-path",
        details: "صيانة دورية وإصلاح أعطال شبكات الغاز",
      },
    ],

    materials: [
      {
        icon: "heroicons:beaker",
        label: "مواسير النحاس (Copper Pipes)",
      },
      {
        icon: "heroicons:beaker",
        label: "مواسير الحديد الأسود (Black Iron Pipes)",
      },
      {
        icon: "heroicons:beaker",
        label: "محابس غاز أمان (Safety Gas Valves)",
      },
      {
        icon: "heroicons:beaker",
        label: "منظمات ضغط (Pressure Regulators)",
      },
      {
        icon: "heroicons:beaker",
        label: "كواشف تسرب غاز (Gas Detectors)",
      },
      {
        icon: "heroicons:beaker",
        label: "خراطيم مرنة معزولة (Flexible Hoses)",
      },
    ],
  },
  {
    id: "pest-control",
    slug: "pest-control",
    title: "مكافحة الحشرات",
    description: "مكافحة جميع أنواع الحشرات بأمان وفعالية",
    heroImage: "/images/hero-pest-control-min.webp",

    offerings: [
      {
        icon: "i-heroicons-bug-ant",
        details: "مكافحة الصراصير",
      },
      {
        icon: "i-heroicons-bug-ant",
        details: "مكافحة النمل الأبيض",
      },
      {
        icon: "i-heroicons-bug-ant",
        details: "مكافحة البق والبراغيث",
      },
      {
        icon: "i-heroicons-bug-ant",
        details: "مكافحة القوارض",
      },
    ],

    materials: [
      {
        icon: "heroicons:beaker",
        label: "مبيدات آمنة للأطفال",
      },
      {
        icon: "heroicons:beaker",
        label: "أجهزة رش حديثة",
      },
      {
        icon: "heroicons:beaker",
        label: "مصائد ضوئية",
      },
      {
        icon: "heroicons:beaker",
        label: "مواد طبيعية عضوية",
      },
    ],
  },
];
