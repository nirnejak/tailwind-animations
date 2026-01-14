import * as React from "react"

import { type Metadata } from "next"
import { Link } from "next-view-transitions"

import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/404/",
  title: "Not Found | Roasted Studio | a design and engineering agency",
  description:
    "Cannot find the page you're looking for on Roasted Studio Website",
})

const NotFoundPage: React.FC = () => {
  return (
    <main className="container my-40 min-h-[calc(100vh-450px)]">
      <h1
        className="
          mb-20 text-4xl/normal font-semibold tracking-tight text-zinc-100
          md:text-6xl
          lg:text-7xl
        "
      >
        Not Found
      </h1>
      <div className="mb-40 font-medium">
        The page you&apos;re looking for does not exists, go{" "}
        <Link
          href={"/"}
          className="
            text-zinc-300 underline underline-offset-4
            hover:no-underline
          "
        >
          Home
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
