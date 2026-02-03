import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // تفعيل وضع الظلام
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // تحويل المتغيرات CSS إلى ألوان Tailwind
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"], // إضافة خط Cairo
      },
      borderRadius: {
        lg: "var(--radius)", // 0.75rem
        md: "calc(var(--radius) - 2px)", // 0.5rem
        sm: "calc(var(--radius) - 4px)", // 0.25rem
      },
    },
  },
  plugins: [],
} satisfies Config;
