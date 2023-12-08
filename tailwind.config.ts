import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1535px'
    },
    colors: {
      "white": "#FFF",
      "red-100": "#FF0000",
      "red-200": "#430000",
      "gray-100": "#BABABA",
      "gray-200": "#6D6D6D",
      "gray-300": "#242424",
      "black": "#151515",
    },
    fontFamily: {
      "rw": "var(--raleway)",
      "rc": "var(--roboto)",
      "ro": "var(--reggae)",
      "ks": "var(--kaushan)",
    },
    extend: {
      backgroundImage: ({ theme }) => ({
        'to-right': `linear-gradient(to right, ${theme('colors.white')}, ${theme('colors.red-100')})`,
        'to-left': `linear-gradient(to left, ${theme('colors.white')}, ${theme('colors.red-100')})`,
        'to-bottom': `linear-gradient(to bottom, ${theme('colors.red-100')}, ${theme('colors.white')})`,
        'to-top': `linear-gradient(to top, ${theme('colors.red-100')}, ${theme('colors.white')})`,
      }),
  },
},
  plugins: [],
}
export default config
