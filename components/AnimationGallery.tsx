"use client"
import * as React from "react"

import Button from "./atoms/Button"
import Input from "./atoms/Input"
import AnimationCard from "./AnimationCard"

interface Props {}

const AnimationGallery: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-5 gap-3">
      <AnimationCard />
      <AnimationCard />
      <AnimationCard />
      <AnimationCard />
      <AnimationCard />
      <AnimationCard />
      <AnimationCard />
      <AnimationCard />
      <AnimationCard />
    </div>
  )
}

export default AnimationGallery
