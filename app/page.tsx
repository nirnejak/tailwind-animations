import * as React from "react"
import { type Metadata } from "next"

import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Next.js App",
  description: "Next.js Typescript Starter",
})

const Home: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <h1 className="text-center text-xl font-medium text-zinc-300">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </main>
  )
}

export default Home
