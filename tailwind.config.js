/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        // light: "#fff",
        // dark: "#0E2954"
        // light: "#E5E0FF",
        light: "#EEF1FF",
        dark: "#061532"
      },
      textColor: {
        light: "#000",
        dark: "#fff"
      },
    },
  },
  plugins: [],
}

