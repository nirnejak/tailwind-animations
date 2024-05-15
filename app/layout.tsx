import * as React from "react"
import type { Viewport } from "next"
import { Inter } from "next/font/google"

import classNames from "utils/classNames"

import Footer from "components/Footer"
import Header from "components/Header"

import "../styles/main.css"
import Container from "@/components/Container"

const sansFont = Inter({
  variable: "--sans-font",
  subsets: ["latin"],
})

export const viewport: Viewport = {
  themeColor: "#000000",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain="tw-animations.vercel.app"
          src="https://plausible.io/js/script.js"
        />
      </head>

      <body
        className={classNames(
          sansFont.variable,
          "overflow-x-hidden bg-zinc-900 text-zinc-400 font-sans"
        )}
      >
        <div className="py-3 bg-violet-500 text-white text-xs px-3">
          <Container>This project is still in development.</Container>
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
