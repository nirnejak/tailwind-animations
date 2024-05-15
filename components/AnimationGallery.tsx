"use client"
import * as React from "react"

import { Search } from "akar-icons"

import { IAnimation, allAnimations } from "utils/animations"

import ColorSelector from "./atoms/ColorSelector"
import { IColorVariants } from "./atoms/Button"
import Input from "./atoms/Input"

import AnimationCard from "./AnimationCard"
import Container from "./Container"
import AnimationDetailsModal from "./AnimationDetailsModal"

interface Props {}

const AnimationGallery: React.FC<Props> = () => {
  const [color, setColor] = React.useState<IColorVariants>("violet")
  const [search, setSearch] = React.useState("")
  const [selectedAnimation, setSelectedAnimation] =
    React.useState<IAnimation | null>(null)

  return (
    <>
      <Container>
        <div>
          <ColorSelector color={color} setColor={setColor} />
          <div className="mt-5">
            <Input
              type="text"
              id="search-input"
              placeholder="Search Animation..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              icon={<Search size={15} />}
            />
          </div>
          <div className="grid grid-cols-5 gap-3 mt-5">
            {allAnimations
              .filter((animation) =>
                animation.title
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              )
              .map((animation, index) => (
                <AnimationCard
                  key={index}
                  color={color}
                  animation={animation}
                  setSelectedAnimation={setSelectedAnimation}
                />
              ))}
          </div>
        </div>
      </Container>
      {selectedAnimation && (
        <AnimationDetailsModal
          animation={selectedAnimation}
          color={color}
          onClose={() => setSelectedAnimation(null)}
        />
      )}
    </>
  )
}

export default AnimationGallery
