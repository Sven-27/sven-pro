import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
      backgroundImage: {
        "l-primary": "linear-gradient(to bottom, var(--txt-secondary), var(--txt-primary))",
        "l-secondary": "var(--lnr-secondary)",
        "l-tertiary": "var(--lnr-tertiary)",
      }
    },
  },
  plugins: [],
}
export default config
