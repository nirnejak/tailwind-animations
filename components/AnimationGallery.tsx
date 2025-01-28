"use client"
import * as React from "react"

import { Search } from "akar-icons"

import { type IAnimation, allAnimations } from "@/utils/animations"

import Input from "@/components/atoms/Input"
import Container from "@/components/Container"
import AnimationCard from "@/components/AnimationCard"
import AnimationDetailsModal from "@/components/AnimationDetailsModal"

const AnimationGallery: React.FC = () => {
  const [search, setSearch] = React.useState("")
  const [selectedAnimation, setSelectedAnimation] =
    React.useState<IAnimation | null>(null)

  return (
    <>
      <Container className="mb-12">
        <div className="mt-5">
          <Input
            type="text"
            id="search-input"
            placeholder="Search Animation..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            icon={<Search size={15} />}
          />
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3 lg:grid-cols-5">
          {allAnimations
            .filter((animation) =>
              animation.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            )
            .map((animation, index) => (
              <AnimationCard
                key={index}
                animation={animation}
                setSelectedAnimation={setSelectedAnimation}
              />
            ))}
        </div>
      </Container>
      {selectedAnimation !== null && (
        <AnimationDetailsModal
          title={selectedAnimation.title}
          animationClass={selectedAnimation.animationClass}
          tailwindKeyframes={selectedAnimation.tailwindKeyframes}
          tailwindAnimation={selectedAnimation.tailwindAnimation}
          onClose={() => {
            setSelectedAnimation(null)
          }}
        />
      )}
    </>
  )
}

export default AnimationGallery
