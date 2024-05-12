"use client"
import * as React from "react"

import classNames from "utils/classNames"

interface Props {
  variant?: "primary" | "danger" | "success"
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
      case "danger":
        return "bg-red-600 text-red-50 hover:bg-red-700 focus:bg-red-700"
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
