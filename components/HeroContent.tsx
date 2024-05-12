import * as React from "react"

import Container from "components/Container"

interface Props {}

const HeroContent: React.FC<Props> = () => {
  return (
    <Container className="mt-32">
      <p>
        Explore a curated collection of Tailwind animation classes. Elevate your
        websites with ease.
      </p>
      <p className="mt-5">Just Copy. Paste. Start animating now!</p>
    </Container>
  )
}

export default HeroContent
