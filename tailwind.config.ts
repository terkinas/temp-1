import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          'custom-gray': {
            100: '#f3faf5',
            200: '#e0f2e9',
            300: '#bbb',
            400: '#848b8d',
            500: '#343943',
            600: '#25292c',
            700: '#1f2325',
            800: '#1a1d20',
            900: '#151719',
          },
          'custom-red': {
            400: '#f87171',
            500: '#FF4A4A'
          },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
