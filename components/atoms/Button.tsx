"use client"
import * as React from "react"

import classNames from "@/utils/classNames"

interface Props {
  variant?: "primary" | "light" | "dark"
  children: React.ReactNode
  type?: "reset" | "button" | "submit"
  className?: string
  style?: React.CSSProperties
  disabled?: boolean
  isBlock?: boolean
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  variant = "primary",
  children,
  type = "button",
  className,
  style,
  onClick,
  disabled,
  isBlock = false,
  ...props
}) => {
  const buttonStyleClassName = React.useMemo(() => {
    switch (variant) {
      case "primary":
      default:
        return `bg-neutral-200 text-neutral-800 hover:bg-neutral-300 focus:bg-neutral-300`
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
      disabled={disabled}
      style={style}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
