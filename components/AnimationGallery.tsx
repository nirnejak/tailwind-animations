"use client"
import * as React from "react"

import { Search } from "akar-icons"

import AnimationCard from "./AnimationCard"
import AnimationDetailsModal from "./AnimationDetailsModal"
import Input from "./atoms/Input"
import Container from "./Container"
import { type IAnimation, allAnimations } from "utils/animations"

const AnimationGallery: React.FC = () => {
  const [search, setSearch] = React.useState("")
  const [selectedAnimation, setSelectedAnimation] =
    React.useState<IAnimation | null>(null)

  return (
    <>
      <Container>
        <div>
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
        </div>
      </Container>
      {selectedAnimation !== null && (
        <AnimationDetailsModal
          animation={selectedAnimation}
          onClose={() => {
            setSelectedAnimation(null)
          }}
        />
      )}
    </>
  )
}

export default AnimationGallery
