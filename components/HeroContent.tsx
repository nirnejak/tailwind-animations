import * as motion from "motion/react-client"
import type * as React from "react"

const HeroContent: React.FC = () => {
  return (
    <main className="container my-24 text-center md:my-40">
      <motion.h1
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 530,
          damping: 20,
        }}
        className="mx-auto mb-5 max-w-[800px] font-semibold text-5xl text-zinc-100 leading-[1.2] tracking-tight md:text-6xl lg:text-7xl"
      >
        Copy Paste animations for TailwindCSS
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          delay: 0.1,
          type: "spring",
          stiffness: 530,
          damping: 20,
        }}
        className="mx-auto max-w-[560px] font-medium text-base md:text-xl"
      >
        Explore a curated collection of TailwindCSS animation classes. Just copy
        and paste them into your code for free.
      </motion.p>
    </main>
  )
}

export default HeroContent
