"use client"
import * as React from "react"

import AnimationCard from "./AnimationCard"
import Container from "./Container"
import { animations } from "@/utils/animations"

interface Props {}

const AnimationGallery: React.FC<Props> = () => {
  return (
    <Container>
      <div className="grid grid-cols-5 gap-3 mt-32">
        {animations.map((animation) => (
          <AnimationCard
            title={animation.title}
            animationClass={animation.animationClass}
          />
        ))}
      </div>
    </Container>
  )
}

export default AnimationGallery
