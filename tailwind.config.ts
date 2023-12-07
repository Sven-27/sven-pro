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
    extend: {
      colors: {
        "t-primary": "var(--txt-primary)",
        "t-secondary": "var(--txt-secondary)",
        "t-tertiary": "var(--txt-tertiary)",
        "t-quaternary": "var(--txt-accent)",
        "b-primary": "var(--bg-primary)",
        "b-secondary": "var(--bg-secondary)",
        "b-tertiary": "var(--bg-tertiary)",
      },
      fontFamily: {
        "raleway": "var(--raleway)",
        "roboto": "var(--roboto)",
        "reggae": "var(--reggae)",
        "kaushan": "var(--kaushan)",
      }
    },
  },
  plugins: [],
}
export default config
