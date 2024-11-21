const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    options: {
      safelist: [
        'rounded-none', 'rounded-full',
      ]
    },
    content: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}"

    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      robotoMono: ["Roboto Mono", "monospace", ...defaultTheme.fontFamily.sans],
    },

    extend: {
      colors: {},
      fontFamily: {
        sans: ["Roboto Mono", "monospace", ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        'tiny': '.6rem',
      }

    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};