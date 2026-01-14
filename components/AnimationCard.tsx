"use client"
import * as React from "react"

import { motion } from "motion/react"
import { Enlarge } from "akar-icons"

import { type IAnimation } from "@/utils/animations"
import Button from "@/components/atoms/Button"

interface Props {
  animation: IAnimation
  setAnimation: (animation: IAnimation) => void
}

const AnimationCard: React.FC<Props> = ({ animation, setAnimation }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative rounded-xl bg-zinc-800 px-14 pt-24 pb-20 text-center"
    >
      <button
        className="
          absolute top-2 right-2 cursor-pointer rounded-md p-2 text-zinc-300
          hover:bg-zinc-950 hover:text-zinc-200
          focus:bg-zinc-950 focus:outline-hidden
        "
        onClick={() => {
          setAnimation(animation)
        }}
      >
        <Enlarge size={16} />
      </button>
      <p className="absolute top-4 left-5 text-sm">{animation.title}</p>
      <Button
        className={animation.animationClass}
        style={{
          animationDirection: "alternate",
          animationIterationCount: "infinite",
        }}
      >
        Button
      </Button>
    </motion.div>
  )
}

export default AnimationCard
