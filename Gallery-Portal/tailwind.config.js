/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Custom extra small breakpoint
        sm: "600px", // Custom small breakpoint
        md: "768px",
        lg: "1200px", // Custom medium breakpoint
        "2xl": "2500px", // Custom medium breakpoint
      },
    },
  },
  plugins: [],
}

