import * as React from "react"
import Link from "next/link"

import Container from "./Container"
import Button from "./atoms/Button"

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full pt-5">
      <Container>
        <div className="flex items-center justify-between">
          <Link href={"/"} className="flex text-zinc-300">
            <span className="font-light">Tailwind</span>
            <span className="font-semibold">Animations</span>
          </Link>
          <div className="flex">
            <Link href={"/home"}>
              <Button>Try now</Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
