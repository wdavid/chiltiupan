import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#000000', 
          secondary: '#10002B', 
          hover: '#216339',
        },
        light: {
          secondary: '#FFFFFF', 
        },
        accent: '#4ade80',
        text: {
          light: '#2d864d',
          primary: '#fcfcfb',
          secondary: '#a3a3a3',
        },
        border: '#feae01',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'Lato': ['Lato', 'sans-serif'],
        'Barlow': ['Barlow', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
