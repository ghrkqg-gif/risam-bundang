import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C2A26",
        secondary: "#8B6F47",
        accent: "#C9A961",
        background: "#FAF7F2",
        surface: "#F0EBE1",
        textmain: "#1A1814",
        textsub: "#6B6358",
        bordercolor: "#E5DFD3",
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
