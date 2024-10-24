import * as React from "react"

import type { Viewport } from "next"

import localFont from "next/font/local"

import FeedbackWidget from "components/FeedbackWidget"
import Header from "components/Header"
import classNames from "utils/classNames"

import "../styles/main.css"

const sansFont = localFont({
  variable: "--sans-font",
  src: [
    {
      path: "../fonts/GeneralSans-Variable.ttf",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-VariableItalic.ttf",
      style: "italic",
    },
  ],
})

const monoFont = localFont({
  variable: "--mono-font",
  src: [
    {
      path: "../fonts/JetBrainsMono-Regular.ttf",
      style: "normal",
    },
  ],
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
          monoFont.variable,
          "overflow-x-hidden bg-zinc-900 text-zinc-400 font-sans"
        )}
      >
        <Header />
        {children}

        <FeedbackWidget />
      </body>
    </html>
  )
}

export default RootLayout
