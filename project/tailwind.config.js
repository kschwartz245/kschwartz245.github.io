/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../index.html",
    "../assets/**/*.css",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          brand: {
            background: "#0F1A2B",
            surface: "#1F2937",
            text: "#E5E7EB",
            prussian: "#003153",
            slate: "#4B5563",
            gold: "#bda442",
          },
        },
      },
    },
    plugins: [],
  };

