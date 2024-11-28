import * as React from "react"

import type { Viewport } from "next"

import { JetBrains_Mono } from "next/font/google"
import localFont from "next/font/local"

import FeedbackWidget from "components/FeedbackWidget"
import Header from "components/Header"
import classNames from "utils/classNames"

import "../styles/main.css"

const sansFont = localFont({
  variable: "--sans-font",
  src: [
    {
      path: "../fonts/GeneralSans-Variable.woff2",
      weight: "300 800",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-VariableItalic.woff2",
      weight: "300 800",
      style: "italic",
    },
  ],
})

const monoFont = JetBrains_Mono({
  variable: "--mono-font",
  weight: ["400"],
  subsets: ["latin"],
})

export const viewport: Viewport = {
  themeColor: "#18181B",
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
          data-domain="tailwindanimations.vercel.app"
          src="https://plausible.io/js/script.js"
        ></script>
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
