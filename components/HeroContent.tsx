"use client"
import * as React from "react"

import { motion } from "framer-motion"

import Container from "components/Container"

const HeroContent: React.FC = () => {
  return (
    <Container className="my-40 text-center">
      <motion.h1
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="mx-auto mb-5 max-w-[800px] text-7xl font-semibold leading-tight text-zinc-100"
      >
        Copy Paste animations for TailwindCSS
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring" }}
        className="mx-auto max-w-[560px] text-xl"
      >
        Explore a curated collection of TailwindCSS animation classes. Just copy
        and paste them into your code for free.
      </motion.p>
    </Container>
  )
}

export default HeroContent
