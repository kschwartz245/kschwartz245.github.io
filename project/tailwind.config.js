/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: [
      "../index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    extract: {
      html: (content) => content,
      jsx: (content) => content,
    },
  },
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
