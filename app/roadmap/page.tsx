import * as React from "react"

import { type Metadata } from "next"

import { ArrowRight, CircleCheckFill, CircleMinusFill } from "akar-icons"
import Link from "next/link"

import generateMetadata from "@/utils/seo"
import Button from "@/components/atoms/Button"
import Container from "@/components/Container"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title:
    "Roadmap | Tailwind Animations - Copy Paste Animations for TailwindCSS",
  description:
    "Features that are planned and is yet to be added to Tailwind Animations",
})

const features = [
  { title: "Request an animation", isReleased: true },
  { title: "Examples Section", isReleased: false },
  { title: "SVG Animations", isReleased: false },
]

const Roadmap: React.FC = () => {
  return (
    <>
      <Container className="my-40">
        <h1 className="mb-20 text-4xl font-semibold leading-normal text-zinc-100 md:text-6xl lg:text-7xl">
          Roadmap
        </h1>
        <div className="mb-40 flex flex-col gap-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 leading-none">
              {feature.isReleased ? (
                <CircleCheckFill size={15} />
              ) : (
                <CircleMinusFill size={15} />
              )}
              {feature.title}
            </div>
          ))}
        </div>
        <div>
          <Link href={"/"}>
            <Button className="flex items-center gap-2">
              <span>Visit</span>
              <ArrowRight size={14} />
            </Button>
          </Link>
        </div>
      </Container>
      {/* TODO: Check View animations button/CTA, maybe with text */}
    </>
  )
}

export default Roadmap
