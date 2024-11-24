/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#1FE9ED",
        neutral: "#CBD5E1",
        "dark-300": "#475569",
        "dark-500": "#1E293B",
        light: "#FCFCFC",
      },
    },
  },
  plugins: [],
};
