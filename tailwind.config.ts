import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    fontFamily: {
      'sans': ['"Helvetica"', 'ui-sans-serif', 'system-ui'],
  },
  container: {
      center: true,
      padding: "2rem",
      screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
      },
  },

    extend: {
      colors: {
        background: {
          DEFAULT: "#b642f5",
          gradient: "#6d2196",
      },
      },
    },
  },
  plugins: [],
};
export default config;
