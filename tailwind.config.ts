import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: "#F2F2F2",
        black: "#000",
        activeButton: "#323832",
        primary: "#61C551",
        white: "white"
      },
      borderRadius: {
        DEFAULT: "21px"
      },
    },
  },
  plugins: [],
}
export default config
