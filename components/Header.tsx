import * as React from "react"
import Link from "next/link"

import Container from "./Container"
import Button from "./atoms/Button"
import { GithubFill } from "akar-icons"

const Header: React.FC = () => {
  return (
    <header className="pt-5">
      <Container>
        <div className="flex items-center justify-between">
          <Link href={"/"} className="flex text-zinc-100">
            <span className="font-light">Tailwind</span>
            <span className="font-semibold">Animations</span>
          </Link>
          <div className="flex">
            <Link
              href={"https://github.com/nirnejak/tailwind-animations/"}
              target="_blank"
            >
              <button className="flex gap-2 items-center rounded-md p-2 text-sm px-3 py-2 bg-zinc-900 hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-none transition-colors -mt-2 -mr-3">
                <span>View Source</span>
                <span>
                  <GithubFill size={16} />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
