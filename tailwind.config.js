module.exports = {
  content: [
    "./src/pages/**/*.{jsx, js}",
    "./src/features/**/*.{jsx, js}",
    "./src/ui/**/*.{jsx, js}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#484848",
          50: "#f9f9f9",
          100: "#f1f1f1",
          200: "#e6e6e6",
          300: "#dbd9db",
          400: "#cacaca",
          500: "#979797",
          600: "#757575",
          700: "#676767",
          800: "#585858",
          900: "#373737",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
