/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      gridTemplateColumns: {
        // Simple 16 row grid
        'two': '20% 80%',
      },
      colors: {
        'blackblack': '#141419',
        'blackpurple': '#282837',
        'blueActive': '#29abe2',
        'white': '#fff'
      }
    },
  },
  plugins: [],
}

