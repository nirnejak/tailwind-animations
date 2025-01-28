import * as React from "react"

import classNames from "@/utils/classNames"

interface Props {
  children: React.ReactNode
  className?: string
  size?: "narrow" | "normal" | "wide" | "wider" | "ultrawide"
}

const Container: React.FC<Props> = ({
  children,
  className,
  size = "wider",
  ...restProps
}) => {
  let widthClass = ""
  switch (size) {
    case "narrow":
      widthClass = "max-w-[480px]"
      break
    case "wide":
      widthClass = "max-w-[980px]"
      break
    case "wider":
      widthClass = "max-w-[1080px]"
      break
    case "ultrawide":
      widthClass = "max-w-[1200px]"
      break
    case "normal":
    default:
      widthClass = "max-w-[680px]"
  }

  return (
    <div
      className={classNames("mx-auto px-4", widthClass, className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Container
