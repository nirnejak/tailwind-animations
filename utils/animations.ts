export interface IAnimation {
  title: string
  animationClass: string
  tailwindKeyframesProperty: Record<string, any> | null
  tailwindAnimationProperty: Record<string, any> | null
}

export const allAnimations: IAnimation[] = [
  {
    title: "Spin",
    animationClass: "animate-spin",
    tailwindKeyframesProperty: null,
    tailwindAnimationProperty: null,
  },
  {
    title: "Ping",
    animationClass: "animate-ping",
    tailwindKeyframesProperty: null,
    tailwindAnimationProperty: null,
  },
  {
    title: "Pulse",
    animationClass: "animate-pulse",
    tailwindKeyframesProperty: null,
    tailwindAnimationProperty: null,
  },
  {
    title: "Bounce",
    animationClass: "animate-bounce",
    tailwindKeyframesProperty: null,
    tailwindAnimationProperty: null,
  },
  {
    title: "Flash",
    animationClass: "animate-flash",
    tailwindKeyframesProperty: {
      flash: {
        "from, 50%, to": {
          opacity: "1",
        },
        "25%, 75%": {
          opacity: "0",
        },
      },
    },
    tailwindAnimationProperty: {
      flash: "flash 1s infinite cubic-bezier(0.4, 0, 0.2, 1) alternate",
    },
  },
  {
    title: "Rubber Band",
    animationClass: "animate-rubber-band",
    tailwindKeyframesProperty: {
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
    },
    tailwindAnimationProperty: {
      "rubber-band":
        "rubber-band 2s infinite cubic-bezier(0.4, 0, 0.2, 1) alternate",
    },
  },
  {
    title: "Shake",
    animationClass: "animate-shake",
    tailwindKeyframesProperty: {
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
    tailwindAnimationProperty: {
      shake: "shake 400ms infinite cubic-bezier(0.4, 0, 0.2, 1) alternate",
    },
  },
  {
    title: "Swing",
    animationClass: "animate-swing",
    tailwindKeyframesProperty: {
      swing: {
        from: { transform: "rotate(3deg)" },
        to: { transform: "rotate(-3deg)" },
      },
    },
    tailwindAnimationProperty: {
      swing: "swing 400ms infinite ease-in-out alternate",
    },
  },
  {
    title: "Scale",
    animationClass: "animate-scale",
    tailwindKeyframesProperty: {
      scale: {
        from: { opacity: "0", transform: "scale(0)" },
        to: { opacity: "1", transform: "scale(1)" },
      },
    },
    tailwindAnimationProperty: {
      scale: "scale 400ms infinite cubic-bezier(0.4, 0, 0.2, 1) alternate",
    },
  },
  {
    title: "Rise",
    animationClass: "animate-rise",
    tailwindKeyframesProperty: {
      rise: {
        from: { transform: "translate(0, 20%) scale(0.8)" },
        to: { transform: "translate(0, 0) scale(1)" },
      },
    },
    tailwindAnimationProperty: {
      rise: "rise 400ms infinite cubic-bezier(0.4, 0, 0.2, 1) alternate",
    },
  },
  {
    title: "Slide Up",
    animationClass: "animate-slide-up",
    tailwindKeyframesProperty: {
      "slide-up": {
        from: { transform: "translateY(10px)" },
        to: { transform: "translateY(0)" },
      },
    },
    tailwindAnimationProperty: {
      "slide-up":
        "slide-up 400ms infinite cubic-bezier(0.16, 1, 0.3, 1) alternate",
    },
  },
  {
    title: "Slide Down",
    animationClass: "animate-slide-down",
    tailwindKeyframesProperty: {
      "slide-down": {
        from: { transform: "translateY(-10px)" },
        to: { transform: "translateY(0)" },
      },
    },
    tailwindAnimationProperty: {
      "slide-down":
        "slide-down 400ms infinite cubic-bezier(0.16, 1, 0.3, 1) alternate",
    },
  },
  {
    title: "Slide Left",
    animationClass: "animate-slide-left",
    tailwindKeyframesProperty: {
      "slide-left": {
        from: { transform: "translateX(-10px)" },
        to: { transform: "translateX(0)" },
      },
    },
    tailwindAnimationProperty: {
      "slide-left":
        "slide-left 400ms infinite cubic-bezier(0.16, 1, 0.3, 1) alternate",
    },
  },
  {
    title: "Slide Right",
    animationClass: "animate-slide-right",
    tailwindKeyframesProperty: {
      "slide-right": {
        from: { transform: "translateX(10px)" },
        to: { transform: "translateX(0)" },
      },
    },
    tailwindAnimationProperty: {
      "slide-right":
        "slide-right 400ms infinite cubic-bezier(0.16, 1, 0.3, 1) alternate",
    },
  },
  {
    title: "Slide Down and Fade",
    animationClass: "animate-slide-down-and-fade",
    tailwindKeyframesProperty: {
      "slide-down-and-fade": {
        from: { opacity: "0", transform: "translateY(-10px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
    },
    tailwindAnimationProperty: {
      "slide-down-and-fade":
        "slide-down-and-fade 400ms infinite cubic-bezier(0.16, 1, 0.3, 1) alternate",
    },
  },
  {
    title: "Slide Left and Fade",
    animationClass: "animate-slide-left-and-fade",
    tailwindKeyframesProperty: {
      "slide-left-and-fade": {
        from: { opacity: "0", transform: "translateX(-10px)" },
        to: { opacity: "1", transform: "translateX(0)" },
      },
    },
    tailwindAnimationProperty: {
      "slide-left-and-fade":
        "slide-left-and-fade 400ms infinite cubic-bezier(0.16, 1, 0.3, 1) alternate",
    },
  },
  {
    title: "Slide Up and Fade",
    animationClass: "animate-slide-up-and-fade",
    tailwindKeyframesProperty: {
      "slide-up-and-fade": {
        from: { opacity: "0", transform: "translateY(10px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
    },
    tailwindAnimationProperty: {
      "slide-up-and-fade":
        "slide-up-and-fade 400ms infinite cubic-bezier(0.16, 1, 0.3, 1) alternate",
    },
  },
  {
    title: "Slide Right and Fade",
    animationClass: "animate-slide-right-and-fade",
    tailwindKeyframesProperty: {
      "slide-right-and-fade": {
        from: { opacity: "0", transform: "translateX(10px)" },
        to: { opacity: "1", transform: "translateX(0)" },
      },
    },
    tailwindAnimationProperty: {
      "slide-right-and-fade":
        "slide-right-and-fade 400ms infinite cubic-bezier(0.16, 1, 0.3, 1) alternate",
    },
  },
]
