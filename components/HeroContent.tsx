import * as React from "react"

import Container from "components/Container"

interface Props {}

const HeroContent: React.FC<Props> = () => {
  return (
    <Container className="my-40">
      <h1 className="text-2xl mb-5 text-zinc-100">
        Copy Paste animations for TailwindCSS
      </h1>
      <p>Explore a curated collection of Tailwind animation classes.</p>
    </Container>
  )
}

export default HeroContent
