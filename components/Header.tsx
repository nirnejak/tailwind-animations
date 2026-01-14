import * as React from "react"

import { Link } from "next-view-transitions"
import * as motion from "motion/react-client"

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        type: "spring",
        stiffness: 530,
        damping: 20,
      }}
    >
      <div className="mx-auto mt-5 max-w-[1080px] px-4">
        <div
          className="
            flex flex-col items-center justify-between gap-3 font-medium
            md:flex-row
          "
        >
          <Link
            href={"/"}
            className="flex font-medium tracking-tighter text-zinc-100"
          >
            Tailwind Animations
          </Link>
          <p
            className="
              hidden gap-1 text-sm
              md:flex
            "
          >
            <span>Designed and built by </span>
            <Link
              href={"https://nirnejak.com/"}
              target="_blank"
              className="
                font-medium text-zinc-300 underline underline-offset-4
                hover:no-underline
              "
            >
              Jitendra Nirnejak
            </Link>
          </p>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
