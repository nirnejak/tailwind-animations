import * as React from "react"

import { type Metadata } from "next"

import generateMetadata from "@/utils/seo"
import Container from "@/components/Container"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "About | Tailwind Animations - About Tailwind Animations",
  description: "Who's behind TailwindCSS Animations",
})

const AboutPage: React.FC = () => {
  return (
    <Container className="my-40 min-h-[calc(100vh-450px)]">
      <h1 className="mb-20 text-4xl font-semibold tracking-tight leading-normal text-zinc-100 md:text-6xl lg:text-7xl">
        About
      </h1>
      <div className="mb-40">
        <p>
          This project is built by{" "}
          <a
            href="https://nirnejak.com/"
            className="underline underline-offset-2 hover:no-underline transition-all"
            target="_blank"
          >
            Jitendra Nirnejak
          </a>
        </p>
      </div>
    </Container>
  )
}

export default AboutPage
