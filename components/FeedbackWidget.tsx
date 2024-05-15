"use client"
import * as React from "react"

import useClickOutside from "@/hooks/useClickOutside"

import Input from "./atoms/Input"
import Button from "./atoms/Button"

interface ResponseDataType {
  ok: boolean
}

const defaultFormState = {
  name: "",
  description: "",
}

const FeedbackWidget: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isWidgetOpen, setIsWidgetOpen] = React.useState(false)

  useClickOutside(ref, () => {
    setIsWidgetOpen(false)
  })

  const [formState, setFormState] = React.useState(defaultFormState)
  const [isSending, setIsSending] = React.useState(false)
  const [isSent, setIsSent] = React.useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setIsSending(true)
    fetch("https://formspree.io/f/xleqvadd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    })
      .then(async (response) => await response.json())
      .then((data: ResponseDataType) => {
        setIsSending(false)
        if (data.ok) {
          setIsSent(true)
          setTimeout(() => {
            setIsSent(false)
            setFormState(defaultFormState)
          }, 3000)
        }
      })
      .catch(() => {
        setIsSending(false)
      })
  }

  if (isWidgetOpen) {
    return (
      <div
        ref={ref}
        className="fixed bottom-4 right-4 bg-zinc-700 rounded-lg text-sm p-5 animate-scale min-w-[400px] max-w-[400px]"
        style={{
          animationIterationCount: "1",
          transformOrigin: "bottom right",
        }}
      >
        <form onSubmit={handleSubmit}>
          <p className="text-zinc-300 mb-2">Request Animation</p>

          <Input
            id="animation-name"
            type="text"
            placeholder="Animation Name"
            value={formState.name}
            onChange={handleChange}
            name="name"
            className="mb-2"
          />
          <textarea
            id="animation-name"
            placeholder="Description and/or links.."
            className="w-full rounded-lg text-zinc-300 px-4 py-2.5 text-sm bg-zinc-800 outline-none placeholder:text-zinc-500 mb-2"
            value={formState.description}
            onChange={handleChange}
            name="description"
          />
          <Button type="submit" variant="purple" disabled={isSending}>
            {isSending ? "Sending..." : isSent ? "Sent!" : "Send Feedback"}
          </Button>
        </form>
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
