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
        light: "#EEF1FF",
        dark: "#061532"
      },
      textColor: {
        light: "#000",
        dark: "#fff"
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
      },
      animation: {
        rotate: 'rotate 6s linear infinite',
      },
      boxShadow: {
        'card-light': '0 2px 21px 5px rgba(0, 0, 0, 0.1)',
        'card-dark': '0 2px 21px 3px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}

