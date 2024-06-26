/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      animation: {
        "marquee-slower": "marquee 25s linear infinite",
        marquee: "marquee 20s linear infinite",
        "marquee-fast": "marquee 15s linear infinite",
        "marquee-faster": "marquee 10s linear infinite",
        "marquee-thunder": "marquee 5s linear infinite",
        "scroll-slower": "scroll 15s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        lobster: ['"Lobster"', "cursive"],
        fjalla: ['"Fjalla One"', "sans-serif"],
      },
      rotate: {
        10: "10deg",
        25: "25deg",
        30: "30deg",
        60: "60deg",
      },
    },
  },
  plugins: [require("tailwindcss-3d")({ legacy: true })],
  variants: {},
};
