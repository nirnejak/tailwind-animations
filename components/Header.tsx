"use client"
import * as React from "react"

import { motion } from "framer-motion"
import Link from "next/link"

import Container from "./Container"

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 1,
        delay: 0.4,
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
    >
      <Container className="mt-5">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="flex text-zinc-100">
            <span className="font-light">Tailwind</span>
            <span className="font-semibold">Animations</span>
          </Link>
          <p className="text-sm">
            <span>Designed and built by </span>
            <Link
              href={"https://nirnejak.com/"}
              target="_blank"
              className="font-medium text-zinc-300 underline underline-offset-4 hover:no-underline"
            >
              Jitendra Nirnejak
            </Link>
          </p>
        </div>
      </Container>
    </motion.header>
  )
}

export default Header
