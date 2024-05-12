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

const animationClasses = [
  "animate-shake",
  "animate-swing",
  "animate-bounce",
  "animate-scale",
  "animate-rise",
  "animate-slide-up",
  "animate-slide-down",
  "animate-slide-left",
  "animate-slide-right",
  "animate-slide-down-and-fade",
  "animate-slide-left-and-fade",
  "animate-slide-up-and-fade",
  "animate-slide-right-and-fade",
]

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    ...animationClasses,
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
        "slide-down-and-fade": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-left-and-fade": {
          from: { opacity: "0", transform: "translateX(-10px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-up-and-fade": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-right-and-fade": {
          from: { opacity: "0", transform: "translateX(10px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-down": {
          from: { transform: "translateY(-10px)" },
          to: { transform: "translateY(0)" },
        },
        "slide-up": {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
        "slide-left": {
          from: { transform: "translateX(-10px)" },
          to: { transform: "translateX(0)" },
        },
        "slide-right": {
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
          from: { transform: "translate(0, 20%) scale(0.8)" },
          to: { transform: "translate(0, 0) scale(1)" },
        },
        shake: {
          "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
          "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
          "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
          "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
          "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
          "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
          "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
          "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
          "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
          "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
        },
      },
      animation: {
        "slide-down-and-fade":
          "slide-down-and-fade 400ms infinite cubic-bezier(0.16, 1, 0.3, 1) alternate",
        "slide-left-and-fade":
          "slide-left-and-fade 400ms infinite cubic-bezier(0.16, 1, 0.3, 1) alternate",
        "slide-up-and-fade":
          "slide-up-and-fade 400ms infinite cubic-bezier(0.16, 1, 0.3, 1) alternate",
        "slide-right-and-fade":
          "slide-right-and-fade 400ms infinite cubic-bezier(0.16, 1, 0.3, 1) alternate",
        "slide-down":
          "slide-down 400ms infinite cubic-bezier(0.16, 1, 0.3, 1) alternate",
        "slide-up":
          "slide-up 400ms infinite cubic-bezier(0.16, 1, 0.3, 1) alternate",
        "slide-left":
          "slide-left 400ms infinite cubic-bezier(0.16, 1, 0.3, 1) alternate",
        "slide-right":
          "slide-right 400ms infinite cubic-bezier(0.16, 1, 0.3, 1) alternate",
        swing: "swing 400ms infinite ease-in-out alternate",
        scale: "scale 400ms infinite cubic-bezier(0.4, 0, 0.2, 1) alternate",
        rise: "rise 400ms infinite cubic-bezier(0.4, 0, 0.2, 1) alternate",
        shake: "shake 400ms infinite cubic-bezier(0.4, 0, 0.2, 1) alternate",
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
