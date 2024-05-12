"use client"
import * as React from "react"

import { animations } from "@/utils/animations"

import ColorSelector from "./atoms/ColorSelector"
import { IColorVariants } from "./atoms/Button"
import AnimationCard from "./AnimationCard"
import Container from "./Container"

interface Props {}

const AnimationGallery: React.FC<Props> = () => {
  const [color, setColor] = React.useState<IColorVariants>("violet")

  return (
    <Container>
      <div className="mt-32">
        <ColorSelector color={color} setColor={setColor} />
        <div className="grid grid-cols-5 gap-3 mt-5">
          {animations.map((animation) => (
            <AnimationCard
              color={color}
              title={animation.title}
              animationClass={animation.animationClass}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default AnimationGallery
