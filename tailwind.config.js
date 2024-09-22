/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-text": "#f0f0f3",
        "secondary-text": "#88949c",
        "tertiary-text": "#f9eb6a",
      },
    },
  },
  plugins: [],
};
