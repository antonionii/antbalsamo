/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(30deg)" },
          "40%": { transform: "rotate(-30deg)" },
          "60%": { transform: "rotate(30deg)" },
          "80%": { transform: "rotate(-30deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97)",
      },
    },
  },
  plugins: [],
};
