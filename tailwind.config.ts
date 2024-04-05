import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Merriweather", "serif"],
        text: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "8xl": ["3.5rem", "140%"],
        "7xl": ["3rem", "140%"],
        "6xl": ["2.25rem", "140%"],
        "5xl": ["2rem", "140%"],
        "4xl": ["1.875rem", "140%"],
        "3xl": ["1.75rem", "140%"],
        "2xl": ["1.5rem", "140%"],
        xl: ["1.25rem", "140%"],
        lg: ["1.125rem", "140%"],
        base: ["1rem", "140%"],
        sm: ["0.875rem", "140%"],
        xs: ["0.75rem", "140%"],
        "2xs": ["0.625rem", "140%"],
      }
    },
  },
  plugins: [],
};
export default config;
