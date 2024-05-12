"use client"
import * as React from "react"

import classNames from "utils/classNames"

interface Props {
  variant?: "primary" | "danger" | "success" | "warning" | "info" | "purple"
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
      case "danger":
        return "bg-red-600 text-red-50 hover:bg-red-700 focus:bg-red-700"
      case "success":
        return "bg-green-600 text-green-50 hover:bg-green-700 focus:bg-green-700"
      case "warning":
        return "bg-amber-600 text-amber-50 hover:bg-amber-700 focus:bg-amber-700"
      case "info":
        return "bg-sky-600 text-sky-50 hover:bg-sky-700 focus:bg-sky-700"
      case "primary":
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-300 focus:bg-gray-300"
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
