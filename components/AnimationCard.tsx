import * as React from "react"
import { Enlarge } from "akar-icons"

import { IAnimation } from "@/utils/animations"

import Button, { IColorVariants } from "./atoms/Button"

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
    <div className="rounded-xl bg-zinc-800 text-center px-18 pb-20 pt-24 relative">
      <button
        className="absolute top-2 right-2 rounded-md p-2 text-zinc-300 hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-none"
        onClick={() => setSelectedAnimation(animation)}
      >
        <Enlarge size={16} />
      </button>
      <p className="text-sm absolute top-4 left-5">{animation.title}</p>
      <Button variant={color} className={animation.animationClass}>
        Click Me
      </Button>
    </div>
  )
}

export default AnimationCard
