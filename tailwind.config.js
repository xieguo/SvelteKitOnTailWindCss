import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
      plugin(function ({ addComponents, theme}) {
          addComponents({
            '.card': {
              backgroundColor: theme('colors.white'),
              borderRadius: theme('borderRadius.lg'),
              padding: theme('spacing.6'),
              boxShadow: theme('boxShadow.xl'),
            }
          })
      })
  ],
}

