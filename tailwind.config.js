/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        primary : "#2E86AB",
        "primary-dark" : "#041C32",
        success : "#6AC768"
      }
    },
  },
  plugins: [],
}

