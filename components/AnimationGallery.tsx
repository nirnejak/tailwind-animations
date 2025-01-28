"use client"
import * as React from "react"

import { Search } from "akar-icons"
import { AnimatePresence, motion } from "motion/react"

import { type IAnimation, allAnimations } from "@/utils/animations"

import Input from "@/components/atoms/Input"
import AnimationCard from "@/components/AnimationCard"
import AnimationDetailsModal from "@/components/AnimationDetailsModal"

const AnimationGallery: React.FC = () => {
  const [search, setSearch] = React.useState("")
  const [animation, setAnimation] = React.useState<IAnimation | null>(null)

  return (
    <main className="container mb-12">
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
      <motion.div className="mt-5 grid gap-3 md:grid-cols-3 lg:grid-cols-5">
        <AnimatePresence>
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
                setAnimation={setAnimation}
              />
            ))}
        </AnimatePresence>
      </motion.div>
      {animation !== null && (
        <AnimationDetailsModal
          title={animation.title}
          animationClass={animation.animationClass}
          tailwindKeyframes={animation.tailwindKeyframes}
          tailwindAnimation={animation.tailwindAnimation}
          onClose={() => {
            setAnimation(null)
          }}
        />
      )}
    </main>
  )
}

export default AnimationGallery
