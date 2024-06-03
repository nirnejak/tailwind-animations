import * as React from "react"

import { Question, SoundOn, Sun } from "akar-icons"
import Link from "next/link"

import Container from "./Container"

const Footer: React.FC = () => {
  return (
    <footer className="mt-40 w-full border-t border-zinc-800 py-2">
      <Container>
        <div className="-mx-2 flex justify-between text-xs">
          <p className="flex gap-1">
            <button className="rounded-md bg-zinc-900 p-2 transition-colors hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-none">
              <SoundOn size={17} />
            </button>
            <button className="rounded-md bg-zinc-900 p-2 transition-colors hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-none">
              <Sun size={17} />
            </button>
          </p>

          <Link
            href={"/help/"}
            className="-mr-3 flex items-center gap-1 rounded-md bg-zinc-900 px-3 py-2 transition-colors hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-none"
          >
            <span>help</span>
            <span>
              <Question size={15} />
            </span>
          </Link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
