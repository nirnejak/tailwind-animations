import * as React from "react"

import { Enlarge } from "akar-icons"

import Button, { type IColorVariants } from "./atoms/Button"
import { type IAnimation } from "utils/animations"

interface Props {
  color: IColorVariants
  animation: IAnimation
  setSelectedAnimation: (animation: IAnimation) => void
}

const AnimationCard: React.FC<Props> = ({
  color,
  animation,
  setSelectedAnimation,
}) => {
  return (
    <div className="relative rounded-xl bg-zinc-800 px-16 pb-20 pt-24 text-center">
      <button
        className="absolute right-2 top-2 rounded-md p-2 text-zinc-300 hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-none"
        onClick={() => {
          setSelectedAnimation(animation)
        }}
      >
        <Enlarge size={16} />
      </button>
      <p className="absolute left-5 top-4 text-sm">{animation.title}</p>
      <Button
        variant={color}
        className={animation.animationClass}
        style={
          animation.tailwindAnimationProperty === null
            ? {
                animationDirection: "alternate",
                animationIterationCount: "infinite",
              }
            : {}
        }
      >
        Click Me
      </Button>
    </div>
  )
}

export default AnimationCard
