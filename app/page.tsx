import * as React from "react"
import { type Metadata } from "next"

import generateMetadata from "utils/seo"

import Footer from "components/Footer"
import Header from "components/Header"

import AnimationGallery from "components/AnimationGallery"
import HeroContent from "components/HeroContent"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Tailwind Animations - Copy Paste Animations for TailwindCSS",
  description:
    "A gallery of TailwindCSS animations that you can just copy-paste into your projects",
})

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HeroContent />
      <AnimationGallery />
      <Footer />
    </>
  )
}

export default Home
