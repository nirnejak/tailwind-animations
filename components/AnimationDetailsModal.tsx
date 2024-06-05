import * as React from "react"

import * as Checkbox from "@radix-ui/react-checkbox"
import { Check, Copy, Telescope, XSmall } from "akar-icons"
import { highlight } from "sugar-high"

import Button from "./atoms/Button"
import { type IAnimation, allModifiers } from "utils/animations"
import copyToClipboard from "utils/copyToClipboard"

interface Props {
  animation: IAnimation
  onClose: () => void
}

const AnimationDetailsModal: React.FC<Props> = ({ animation, onClose }) => {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keyup", handleKeyDown)
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keyup", handleKeyDown)
    }
  }, [])

  const [isClassCopied, setIsClassCopied] = React.useState(false)
  const [isConfigCopied, setIsConfigCopied] = React.useState(false)

  const [animationIterationCount, setAnimationIterationCount] = React.useState<
    1 | "infinite"
  >("infinite")
  const [animationDirection, setAnimationDirection] = React.useState<
    "normal" | "alternate"
  >("alternate")

  const code = React.useMemo(() => {
    if (
      animation.tailwindKeyframesProperty &&
      animation.tailwindAnimationProperty
    ) {
      return JSON.stringify(
        {
          keyframes: {
            ...animation.tailwindKeyframesProperty,
          },
          animation: {
            ...animation.tailwindAnimationProperty,
          },
        },
        null,
        4
      )
    } else {
      return ""
    }
  }, [animation])

  const codeHTML = React.useMemo(() => {
    return highlight(code)
  }, [code])

  const [selectedModifiers, setSelectedModifiers] = React.useState<string[]>([
    "hover",
  ])
  const isAlwaysEnabled = React.useMemo(
    () => selectedModifiers.length === 0,
    [selectedModifiers]
  )

  const animationClassName = React.useMemo(() => {
    return selectedModifiers.length > 0
      ? selectedModifiers
          .map((m) => `${m}:${animation.animationClass}`)
          .join(" ")
      : animation.animationClass
  }, [animation, selectedModifiers])

  const handleCheckedChange = (checked: boolean, modifier: string) => {
    if (checked) {
      setSelectedModifiers([...selectedModifiers, modifier])
    } else {
      setSelectedModifiers((modifiers) => {
        return modifiers.filter((m) => m !== modifier)
      })
    }
  }

  return (
    <div
      tabIndex={0}
      role="button"
      onKeyUp={(e) => {
        e.key === "Enter" && onClose()
      }}
      className="fixed left-0 top-0 grid h-screen w-full place-content-center bg-zinc-900/30 backdrop-blur-lg"
      onClick={onClose}
    >
      <div
        tabIndex={0}
        role="button"
        onKeyUp={(e) => {
          e.key === "Enter" && e.stopPropagation()
        }}
        className="w-[820px] animate-rise rounded-xl bg-zinc-800 p-5"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className="mb-3 flex justify-between">
          <p className="text-zinc-200">{animation.title}</p>
          <button
            onClick={onClose}
            className="-mr-1 -mt-1 rounded-full bg-zinc-700 p-1 hover:bg-zinc-900/40"
          >
            <XSmall />
          </button>
        </div>
        <div className="flex gap-5">
          <div className="flex-1">
            <div className="relative rounded-xl bg-zinc-900 pb-20 pt-24 text-center">
              <Button className={animationClassName}>Click Me</Button>
              <p className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1 text-sm text-zinc-600">
                <span className="select-none">Preview</span>
                <span>
                  <Telescope size={14} />
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="mb-5">
              <p className="mb-2 text-zinc-200">When to animate:</p>
              <div className="flex gap-4">
                {allModifiers.map((modifier, index) => (
                  <label
                    className="flex items-center gap-2 text-sm capitalize leading-none text-zinc-400"
                    htmlFor={`${modifier}-id`}
                    key={index}
                  >
                    <Checkbox.Root
                      className="flex size-[25px] appearance-none items-center justify-center rounded-md bg-zinc-700 outline-none hover:bg-zinc-900/40"
                      checked={selectedModifiers.includes(modifier)}
                      onCheckedChange={(checked: boolean) => {
                        handleCheckedChange(checked, modifier)
                      }}
                      id={`${modifier}-id`}
                    >
                      <Checkbox.Indicator className="text-violet-500">
                        <Check size={15} />
                      </Checkbox.Indicator>
                    </Checkbox.Root>

                    {modifier}
                  </label>
                ))}
                <label
                  className="ml-6 flex items-center gap-2 text-sm leading-none text-zinc-400"
                  htmlFor="is-always-enabled"
                >
                  <Checkbox.Root
                    className="flex size-[25px] appearance-none items-center justify-center rounded-md bg-zinc-700 outline-none hover:bg-zinc-900"
                    checked={isAlwaysEnabled}
                    onCheckedChange={() => {
                      setSelectedModifiers([])
                    }}
                    id="is-always-enabled"
                  >
                    <Checkbox.Indicator className="text-violet-500">
                      <Check size={15} />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  Always
                </label>
              </div>
            </div>
            {codeHTML.length > 0 && (
              <div className="mb-5">
                <p className="mb-2 text-zinc-200">Tailwind Config:</p>
                <div className="relative rounded-md bg-zinc-900 px-3 py-1">
                  <pre className="max-h-[300px] max-w-[400px] overflow-auto">
                    <code
                      className="text-sm"
                      dangerouslySetInnerHTML={{ __html: codeHTML }}
                    />
                  </pre>
                  <button
                    className="absolute right-2 top-2 rounded p-2 text-zinc-300 hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-none"
                    disabled={isConfigCopied}
                    onClick={() => {
                      copyToClipboard(code)
                      setIsConfigCopied(true)
                      setTimeout(() => {
                        setIsConfigCopied(false)
                      }, 3000)
                    }}
                  >
                    {isConfigCopied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            )}
            <div className={codeHTML.length > 0 ? "" : "mt-auto"}>
              <p className="mb-2 text-zinc-200">Class Name:</p>
              <code className="flex min-w-[400px] items-center justify-between rounded-md bg-zinc-900 py-1 pl-3 pr-1 text-sm leading-7">
                {animationClassName}
                <button
                  className="rounded p-2 text-zinc-300 hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-none"
                  disabled={isClassCopied}
                  onClick={() => {
                    copyToClipboard(animationClassName)
                    setIsClassCopied(true)
                    setTimeout(() => {
                      setIsClassCopied(false)
                    }, 3000)
                  }}
                >
                  {isClassCopied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimationDetailsModal
