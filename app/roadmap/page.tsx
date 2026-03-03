import { ArrowRight, CircleCheckFill, CircleMinusFill } from "akar-icons"

import type { Metadata } from "next"
import { Link } from "next-view-transitions"
import type * as React from "react"
import Button from "@/components/atoms/Button"
import generateMetadata from "@/utils/seo"

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
    <main className="container my-40">
      <h1 className="mb-20 font-semibold text-4xl/normal text-zinc-100 tracking-tight md:text-6xl lg:text-7xl">
        Roadmap
      </h1>
      <div className="mb-40 flex flex-col gap-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-center gap-2 leading-none"
          >
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
    </main>
  )
}

export default Roadmap
