"use client"
import * as React from "react"

import classNames from "utils/classNames"

export type IColorVariants =
  | "purple"
  | "pink"
  | "red"
  | "amber"
  | "green"
  | "sky"
  | "primary"

interface Props {
  variant?: IColorVariants
  children: React.ReactNode
  type?: "reset" | "button" | "submit"
  className?: string
  isBlock?: boolean
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  variant = "primary",
  children,
  type = "button",
  className,
  onClick,
  isBlock = false,
  ...props
}) => {
  const buttonStyleClassName = React.useMemo(() => {
    switch (variant) {
      case "purple":
        return "bg-purple-600 text-purple-50 hover:bg-purple-700 focus:bg-purple-700"
      case "pink":
        return "bg-pink-600 text-pink-50 hover:bg-pink-700 focus:bg-pink-700"
      case "red":
        return "bg-red-600 text-red-50 hover:bg-red-700 focus:bg-red-700"
      case "amber":
        return "bg-amber-600 text-amber-50 hover:bg-amber-700 focus:bg-amber-700"
      case "green":
        return "bg-green-600 text-green-50 hover:bg-green-700 focus:bg-green-700"
      case "sky":
        return "bg-sky-600 text-sky-50 hover:bg-sky-700 focus:bg-sky-700"
      case "blue":
        return "bg-blue-600 text-blue-50 hover:bg-blue-700 focus:bg-blue-700"
      case "primary":
      default:
        return "bg-zinc-100 text-zinc-700 hover:bg-zinc-300 focus:bg-zinc-300"
    }
  }, [variant])

  return (
    <button
      type={type}
      onClick={() => {
        if (onClick != null) {
          onClick()
        }
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter" && onClick != null) {
          onClick()
        }
      }}
      className={classNames(
        "rounded-lg px-4 py-2 text-sm transition-all focus:outline-none active:scale-95",
        buttonStyleClassName,
        isBlock && "block",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
