/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "light",
    base: false,
    styled: true,
    utils: true,
    prefix: "ui-",
    logs: true,
    themeRoot: ":root",
  },
};
