import * as React from "react"
import Link from "next/link"
import { type Metadata } from "next"

import { ArrowRight, CircleCheckFill } from "akar-icons"

import generateMetadata from "utils/seo"

import Container from "components/Container"
import Button from "components/atoms/Button"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title:
    "Roadmap | Tailwind Animations - Copy Paste Animations for TailwindCSS",
  description:
    "Features that are planned and is yet to be added to Tailwind Animations",
})

const features = [
  { title: "Request an animation", isReleased: false },
  { title: "Examples Section", isReleased: false },
]

const Roadmap: React.FC = () => {
  return (
    <>
      <Container className="my-40">
        <h1 className="text-xl mb-20">Roadmap</h1>
        <div className="flex flex-col gap-2 mb-40">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-sm leading-none text-zinc-400 flex items-center gap-2"
            >
              <CircleCheckFill size={15} />
              {feature.title}
            </div>
          ))}
        </div>
        <div>
          <Link href={"/"}>
            <Button variant="purple" className="flex gap-2 items-center">
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
