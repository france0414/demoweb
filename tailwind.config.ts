import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {}, // Keep extend empty if no custom theme is needed yet
  },
  plugins: [
    require('@tailwindcss/typography'), // Add the typography plugin here
  ],
  safelist: [
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
    'lg:grid-cols-4',
  ],
};
export default config;
