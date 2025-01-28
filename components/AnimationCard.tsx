import * as React from "react"

import { Enlarge } from "akar-icons"

import { type IAnimation } from "@/utils/animations"
import Button from "@/components/atoms/Button"

interface Props {
  animation: IAnimation
  setSelectedAnimation: (animation: IAnimation) => void
}

const AnimationCard: React.FC<Props> = ({
  animation,
  setSelectedAnimation,
}) => {
  return (
    <div className="relative rounded-xl bg-zinc-800 px-14 pb-20 pt-24 text-center">
      <button
        className="absolute right-2 top-2 rounded-md p-2 text-zinc-300 hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-hidden"
        onClick={() => {
          setSelectedAnimation(animation)
        }}
      >
        <Enlarge size={16} />
      </button>
      <p className="absolute left-5 top-4 text-sm">{animation.title}</p>
      <Button
        className={animation.animationClass}
        style={
          animation.tailwindAnimationProperty === null
            ? {
                animationDirection: "alternate",
                animationIterationCount: "infinite",
              }
            : {
                /* TODO: pull this value from config */
                animationDirection: "alternate",
                animationIterationCount: "infinite",
              }
        }
      >
        Button
      </Button>
    </div>
  )
}

export default AnimationCard
