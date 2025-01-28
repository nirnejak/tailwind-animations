import * as React from "react"

import { type Metadata } from "next"

import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "About | Tailwind Animations - About Tailwind Animations",
  description: "Who's behind TailwindCSS Animations",
})

const AboutPage: React.FC = () => {
  return (
    <main className="container my-40 min-h-[calc(100vh-450px)]">
      <h1 className="mb-20 text-4xl font-semibold tracking-tight leading-normal text-zinc-100 md:text-6xl lg:text-7xl">
        About
      </h1>
      <div className="mb-40 font-medium">
        <p>
          This project is built by{" "}
          <a
            href="https://nirnejak.com/"
            className="text-zinc-300 underline underline-offset-4 hover:no-underline"
            target="_blank"
          >
            Jitendra Nirnejak
          </a>
        </p>
      </div>
    </main>
  )
}

export default AboutPage
