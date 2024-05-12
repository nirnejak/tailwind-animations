"use client"
import * as React from "react"

import Button from "./atoms/Button"
import Input from "./atoms/Input"
import AnimationCard from "./AnimationCard"
import Container from "./Container"

interface Props {}

const AnimationGallery: React.FC<Props> = () => {
  return (
    <Container>
      <div className="grid grid-cols-5 gap-3 mt-32">
        <AnimationCard />
        <AnimationCard />
        <AnimationCard />
        <AnimationCard />
        <AnimationCard />
        <AnimationCard />
        <AnimationCard />
        <AnimationCard />
        <AnimationCard />
        <AnimationCard />
        <AnimationCard />
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
    </Container>
  )
}

export default AnimationGallery
