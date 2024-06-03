import * as React from "react"

import Container from "components/Container"

const HeroContent: React.FC = () => {
  return (
    <Container className="my-40 text-center">
      <h1 className="mb-5 text-6xl font-medium leading-tight text-zinc-100">
        Copy Paste animations for TailwindCSS
      </h1>
      <p className="mx-auto max-w-[560px] text-xl">
        Explore a curated collection of TailwindCSS animation classes. Just copy
        and paste them into your code for free.
      </p>
    </Container>
  )
}

export default HeroContent
