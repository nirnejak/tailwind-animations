"use client"
import * as React from "react"

import useClickOutside from "@/hooks/useClickOutside"

import Input from "./atoms/Input"

interface Props {}

const FeedbackWidget: React.FC<Props> = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isWidgetOpen, setIsWidgetOpen] = React.useState(false)

  useClickOutside(ref, () => {
    setIsWidgetOpen(false)
  })

  const [formState, setFormState] = React.useState({
    animationName: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  if (isWidgetOpen) {
    return (
      <div
        ref={ref}
        className="fixed bottom-4 right-4 bg-zinc-700 rounded-lg text-sm p-5 animate-scale"
        style={{
          animationIterationCount: "1",
          transformOrigin: "bottom right",
        }}
      >
        <p className="text-zinc-300 mb-2">Request Animation</p>

        <Input
          id="animation-name"
          type="text"
          placeholder="Animation Name"
          value={formState.animationName}
          onChange={handleChange}
          name="animationName"
          className="py-1"
        />
      </div>
    )
  } else {
    return (
      <>
        <button
          className="fixed bottom-4 right-4 bg-violet-600 rounded-full px-4 py-2 text-zinc-100 text-sm"
          onClick={() => setIsWidgetOpen(true)}
        >
          Request animation
        </button>
      </>
    )
  }
}

export default FeedbackWidget
