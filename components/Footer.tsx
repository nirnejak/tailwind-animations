import * as React from "react"
import Link from "next/link"

import { Question, SoundOn, Sun } from "akar-icons"

import Container from "./Container"

const Footer: React.FC = () => {
  return (
    <footer className="mt-40 w-full border-t-[1px] border-zinc-800 py-2">
      <Container>
        <div className="-mx-2 flex justify-between text-xs">
          <p className="flex gap-1">
            <button className="rounded-md p-2 text-zinc-300 bg-zinc-900 hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-none">
              <SoundOn size={17} />
            </button>
            <button className="rounded-md p-2 text-zinc-300 bg-zinc-900 hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-none">
              <Sun size={17} />
            </button>
          </p>

          <Link
            href={"/help/"}
            className="flex items-center gap-1 rounded-md p-2 text-zinc-300 bg-zinc-900 hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-none"
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
