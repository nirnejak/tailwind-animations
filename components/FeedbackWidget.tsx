"use client"
import * as React from "react"

import { GithubFill, ThumbsUp } from "akar-icons"

import useClickOutside from "@/hooks/useClickOutside"

import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Input"
import Textarea from "@/components/atoms/Textarea"

interface ResponseDataType {
  ok: boolean
}

const defaultFormState = {
  title: "",
  email: "",
  description: "",
}

const FeedbackWidget: React.FC = () => {
  const [isWidgetOpen, setIsWidgetOpen] = React.useState(false)

  const ref = useClickOutside(() => {
    setIsWidgetOpen(false)
  })

  React.useEffect(() => {
    const handleKeyDown = (e): void => {
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
  ): void => {
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
        className="fixed bottom-4 right-4 w-[320px] animate-scale rounded-lg bg-zinc-700 p-5 text-sm md:min-w-[400px]"
        style={{
          animationIterationCount: "1",
          transformOrigin: "bottom right",
        }}
      >
        <form onSubmit={handleSubmit}>
          <p className="mb-4 font-medium text-zinc-100">
            Feedback or Request Animation
          </p>

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
          <div className="flex flex-col gap-2">
            <Button type="submit" disabled={isSending} className="w-full">
              {isSending ? "Sending..." : isSent ? "Sent!" : "Send Feedback"}
            </Button>
            <div className="text-center text-xs">or</div>
            <a
              href="https://github.com/nirnejak/tailwind-animations/issues/new"
              className="flex items-center outline-hidden justify-center gap-1.5 rounded-lg px-4 py-2 text-zinc-400 transition-all bg-zinc-800 hover:bg-zinc-900 focus:bg-zinc-900"
              target="_blank"
            >
              <GithubFill size={14} />
              <span>Submit an Issue</span>
            </a>
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <Button
        onClick={() => {
          setIsWidgetOpen(true)
        }}
        className="fixed bottom-4 right-4 flex w-[120px] items-center justify-center gap-1.5"
      >
        <span>Feedback</span>
        <ThumbsUp size={15} />
      </Button>
    )
  }
}

export default FeedbackWidget
