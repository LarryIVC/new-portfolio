/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      'calibri': ['Calibri', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#2f4c64',
      }
    },
  },
  plugins: [],
}
