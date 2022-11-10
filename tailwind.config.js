/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        "very-dark-saturated-blue": "hsl(229, 23%, 23%)",
        "dark-grayish-blue": "hsl(227, 10%, 46%)",
        "dark-gray": "hsl(0, 0%, 59%)",
        "dark-cyan": "hsl(185, 75%, 39%)",
      },
    },
  },
  plugins: [],
};
