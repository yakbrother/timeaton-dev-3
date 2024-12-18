/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        mocha: {
          50: "hsl(30, 33%, 97%)",
          100: "hsl(27, 35%, 85%)",
          200: "hsl(27, 35%, 74%)",
          300: "hsl(27, 28%, 59%)",
          400: "hsl(27, 28%, 50%)",
          500: "hsl(27, 28%, 43%)",
          600: "hsl(27, 32%, 35%)",
          700: "hsl(27, 28%, 28%)",
          800: "hsl(15, 45%, 12%)",
          900: "hsl(27, 45%, 7%)",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
