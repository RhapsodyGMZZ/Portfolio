import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-red-500',
    'hover:bg-red-500',
    'bg-red-700',
    'hover:bg-red-700',
    'bg-green-500',
    'hover:bg-green-700',
    'text-red-500',
    'text-red-700',
    'text-green-500',
    'text-green-700'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
