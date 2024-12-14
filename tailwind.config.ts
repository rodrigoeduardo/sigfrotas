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
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: {
          100: "#ffffff",
        },
        black: {
          100: "#000000",
          400: "#282828",
        },
        blue: {
          500: "#000842",
        },
        gray: {
          200: "#ABABAB",
          600: "#878787",
          700: "#999999",
        },
        green: {
          900: "#0C1F1F",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        publicSans: ["var(--font-public-sans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
