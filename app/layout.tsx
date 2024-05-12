import * as React from "react"
import type { Viewport } from "next"

import { Inter } from "next/font/google"

import classNames from "utils/classNames"

import "../styles/main.css"

const inter = Inter({
  variable: "--inter-font",
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
          inter.variable,
          "overflow-x-hidden bg-zinc-900 font-sans"
        )}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
