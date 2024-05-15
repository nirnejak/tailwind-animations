"use client"
import * as React from "react"

import classNames from "utils/classNames"

export type IColorVariants =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"

interface Props {
  variant?: IColorVariants
  children: React.ReactNode
  type?: "reset" | "button" | "submit"
  className?: string
  disabled?: boolean
  isBlock?: boolean
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  variant = "violet",
  children,
  type = "button",
  className,
  onClick,
  disabled,
  isBlock = false,
  ...props
}) => {
  const buttonStyleClassName = React.useMemo(() => {
    return `bg-${variant}-600 text-${variant}-50 hover:bg-${variant}-700 focus:bg-${variant}-700`
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
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
