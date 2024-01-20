/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    screens: {
      'phone':'340px',
      'tablet':'640px',
      'tablet2':'820px',
      'laptop':'1024px',
      'desktop':'1280px',

    },
    extend: {
      colors:{
     "dark":"#232A3C",
     "medium":"#293245"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

