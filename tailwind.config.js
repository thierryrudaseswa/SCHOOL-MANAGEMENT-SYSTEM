/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'phone':'340px',
      'tablet':'640px',
      'tablet2':'820px',
      'laptop':'1024px',
      'desktop':'1280px',

    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

