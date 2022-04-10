module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01357a",
        ugYellow: "#ffbf0f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
