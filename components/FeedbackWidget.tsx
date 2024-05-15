"use client"
import * as React from "react"

import useClickOutside from "@/hooks/useClickOutside"

import Input from "./atoms/Input"
import Button from "./atoms/Button"
import Textarea from "./atoms/Textarea"

interface ResponseDataType {
  ok: boolean
}

const defaultFormState = {
  title: "",
  email: "",
  description: "",
}

const FeedbackWidget: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isWidgetOpen, setIsWidgetOpen] = React.useState(false)

  useClickOutside(ref, () => {
    setIsWidgetOpen(false)
  })

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsWidgetOpen(false)
      }
    }

    if (isWidgetOpen) {
      window.addEventListener("keyup", handleKeyDown)
    }
    return () => {
      window.removeEventListener("keyup", handleKeyDown)
    }
  }, [isWidgetOpen])

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
          <p className="text-zinc-300 mb-2">Feedback or Request Animation</p>

          <Input
            id="title"
            type="text"
            placeholder="Title"
            value={formState.title}
            onChange={handleChange}
            name="title"
            className="mb-2"
            required
          />
          <Input
            id="email"
            type="email"
            placeholder="Email(optional)"
            value={formState.email}
            onChange={handleChange}
            name="email"
            className="mb-2"
          />
          <Textarea
            id="description"
            placeholder="Description and/or links.."
            value={formState.description}
            onChange={handleChange}
            name="description"
            required
            className="mb-2"
          />
          <Button type="submit" variant="violet" disabled={isSending}>
            {isSending ? "Sending..." : isSent ? "Sent!" : "Send Feedback"}
          </Button>
        </form>
      </div>
    )
  } else {
    return (
      <>
        <Button
          variant="violet"
          onClick={() => setIsWidgetOpen(true)}
          className="fixed bottom-4 right-4"
        >
          Feedback
        </Button>
      </>
    )
  }
}

export default FeedbackWidget
