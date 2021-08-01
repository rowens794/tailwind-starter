module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 60s linear infinite",
      },
      height: {
        screenLessHeader: "calc(100% - 64px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["@tailwindcss/aspect-ratio", require("@tailwindcss/forms")],
};
