/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      gridTemplateColumns: {
        // Simple 16 row grid
        'two-sm': '15% 85%',
        'two-lg': '20% 80%',
      },
      colors: {
        'blackblack': '#141419',
        'blackpurple': '#282837',
        'blueActive': '#29abe2',
        'white': '#fafbfd'
      },
    },
  },
  plugins: [],
}

