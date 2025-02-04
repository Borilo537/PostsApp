import { Geist } from 'next/font/google';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        black: "var(--black)",
        gray: "var(--gray)",
        sage: "var(--sage)",
        lightsage: "var(--lightsage)",
        light: "var(--light)",
        green: "var(--green)",
        orange: "var(--orange)",
      },
    },
  },
  plugins: [],
} satisfies Config;
