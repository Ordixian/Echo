/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",     // deep blue
        accent: "#3B82F6",      // bright blue
        background: "#F3F4F6",  // light grey
        text: "#111827"         // near black
      },
    },
  },
  plugins: [],
};
