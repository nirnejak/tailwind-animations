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
  "animate-spin",
  "animate-ping",
  "animate-pulse",
  "animate-bounce",

  "animate-flash",
  "animate-rubber-band",
  "animate-shake",
  "animate-shake",
  "animate-shake",
  "animate-swing",
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

const modifiers = ["hover", "focus", "active"]

const animationClassesWithModifier = animationClasses

animationClasses.forEach((cls) => {
  modifiers.forEach((m) => {
    animationClassesWithModifier.push(`${m}:${cls}`)
  })
})

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    ...animationClassesWithModifier,
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
        flash: {
          "from, 50%, to": {
            opacity: "1",
          },
          "25%, 75%": {
            opacity: "0",
          },
        },
        "rubber-band": {
          from: {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(1.25, 0.75, 1)",
          },
          "40%": {
            transform: "scale3d(0.75, 1.25, 1)",
          },
          "50%": {
            transform: "scale3d(1.15, 0.85, 1)",
          },
          "65%": {
            transform: "scale3d(0.95, 1.05, 1)",
          },
          "75%": {
            transform: "scale3d(1.05, 0.95, 1)",
          },
          to: {
            transform: "scale3d(1, 1, 1)",
          },
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
          "slide-down-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-and-fade":
          "slide-left-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up-and-fade":
          "slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-and-fade":
          "slide-right-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down": "slide-down 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up": "slide-up 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left": "slide-left 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right": "slide-right 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        flash: "flash 1s cubic-bezier(0.4, 0, 0.2, 1)",
        "rubber-band": "rubber-band 2s cubic-bezier(0.4, 0, 0.2, 1)",
        swing: "swing 400ms ease-in-out",
        scale: "scale 400ms cubic-bezier(0.4, 0, 0.2, 1)",
        rise: "rise 400ms cubic-bezier(0.4, 0, 0.2, 1)",
        shake: "shake 400ms cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
    fontFamily: {
      sans: ["var(--sans-font)"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

export default config
