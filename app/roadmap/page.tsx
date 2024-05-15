import * as React from "react"
import { type Metadata } from "next"

import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title:
    "Roadmap | Tailwind Animations - Copy Paste Animations for TailwindCSS",
  description:
    "Features that are planned and is yet to be added to Tailwind Animations",
})

const Roadmap: React.FC = () => {
  return (
    <>
      <Roadmap />
      {/* TODO: Check View animations button/CTA, maybe with text */}
    </>
  )
}

export default Roadmap
