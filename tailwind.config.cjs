/** @type {import('tailwindcss').Config} */

// temporary solution to fix tailwind I
export default {
<<<<<<< HEAD
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ['"Clash Display Variable"', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
      },
      colors: {
        'brands-primary': 'var(--Brands-Primary, #4640DE)',
        primary: '#4640DE',
      },
    },
  },
  plugins: [],
};
=======
   content: ["./index.html", "./src/**/.{js,ts,jsx,tsx}"],
   theme: {
      extend: {},
   },
   plugins: [],
};
    
>>>>>>> develop
