import * as React from "react"

import Container from "components/Container"

interface Props {}

const HeroContent: React.FC<Props> = () => {
  return (
    <Container className="my-40">
      <h1 className="text-4xl mb-5 text-zinc-100 font-medium">
        Copy Paste animations for TailwindCSS
      </h1>
      <p>
        Explore a curated collection of TailwindCSS animation classes. Just copy
        and paste them into your code for free.
      </p>
    </Container>
  )
}

export default HeroContent
