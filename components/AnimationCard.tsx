import * as React from "react"
import { Copy } from "akar-icons"

import copyToClipboard from "@/utils/copyToClipboard"
import classNames from "@/utils/classNames"

import Button, { IColorVariants } from "./atoms/Button"

interface Props {
  color: IColorVariants
  title: string
  animationClass: string
}

const AnimationCard: React.FC<Props> = ({ color, title, animationClass }) => {
  return (
    <div className="rounded-xl bg-zinc-800 text-center px-18 pb-20 pt-24 relative">
      <button
        className="absolute top-2 right-2 rounded-md p-2 text-zinc-300 hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-none"
        onClick={() => copyToClipboard(animationClass)}
      >
        <Copy size={16} />
      </button>
      <p className="text-sm absolute top-4 left-5">{title}</p>
      <Button variant={color} className={animationClass}>
        Click Me
      </Button>
    </div>
  )
}

export default AnimationCard
