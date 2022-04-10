module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01357a",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
