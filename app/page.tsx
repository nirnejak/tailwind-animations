import * as React from "react"

import { type Metadata } from "next"

import AnimationGallery from "components/AnimationGallery"
import HeroContent from "components/HeroContent"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Tailwind Animations - Copy Paste Animations for TailwindCSS",
  description:
    "A gallery of TailwindCSS animations that you can just copy-paste into your projects",
})

const Home: React.FC = () => {
  return (
    <>
      <HeroContent />
      <AnimationGallery />
    </>
  )
}

export default Home
