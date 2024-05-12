import type { Config } from "tailwindcss"

const usedColors = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
]

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    ...usedColors.map((c) => `text-${c}-50`),
    ...usedColors.map((c) => `text-${c}-100`),
    ...usedColors.map((c) => `text-${c}-200`),
    ...usedColors.map((c) => `text-${c}-300`),
    ...usedColors.map((c) => `text-${c}-400`),
    ...usedColors.map((c) => `text-${c}-500`),
    ...usedColors.map((c) => `text-${c}-600`),
    ...usedColors.map((c) => `text-${c}-700`),
    ...usedColors.map((c) => `text-${c}-800`),
    ...usedColors.map((c) => `text-${c}-900`),
    ...usedColors.map((c) => `text-${c}-950`),
    ...usedColors.map((c) => `bg-${c}-50`),
    ...usedColors.map((c) => `bg-${c}-100`),
    ...usedColors.map((c) => `bg-${c}-200`),
    ...usedColors.map((c) => `bg-${c}-300`),
    ...usedColors.map((c) => `bg-${c}-400`),
    ...usedColors.map((c) => `bg-${c}-500`),
    ...usedColors.map((c) => `bg-${c}-600`),
    ...usedColors.map((c) => `bg-${c}-700`),
    ...usedColors.map((c) => `bg-${c}-800`),
    ...usedColors.map((c) => `bg-${c}-900`),
    ...usedColors.map((c) => `bg-${c}-950`),
  ],
  theme: {
    extend: {
      keyframes: {
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(-10px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(10px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideDown: {
          from: { transform: "translateY(-10px)" },
          to: { transform: "translateY(0)" },
        },
        slideUp: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
        slideLeft: {
          from: { transform: "translateX(-10px)" },
          to: { transform: "translateX(0)" },
        },
        slideRight: {
          from: { transform: "translateX(10px)" },
          to: { transform: "translateX(0)" },
        },
        swing: {
          from: { transform: "rotate(3deg)" },
          to: { transform: "rotate(-3deg)" },
        },
        scale: {
          from: { opacity: "0", transform: "scale(0)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        rise: {
          from: { transform: "translate(-50%, -40%) scale(0.95)" },
          to: { transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDown: "slideDown 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUp: "slideUp 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeft: "slideLeft 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRight: "slideRight 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        swing: "swing 1s infinite ease-in-out alternate",
        scale: "scale 150ms cubic-bezier(0.4, 0, 0.2, 1)",
        rise: "rise 150ms cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
    fontFamily: {
      sans: ["var(--inter-font)"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

export default config
