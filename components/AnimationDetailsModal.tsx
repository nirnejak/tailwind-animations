import * as React from "react"

import * as Checkbox from "@radix-ui/react-checkbox"
import { Check, Copy, Telescope, XSmall } from "akar-icons"
import { AnimatePresence, motion } from "motion/react"
import { codeToHtml } from "shiki"

import { allModifiers } from "@/utils/animations"
import copyToClipboard from "@/utils/copyToClipboard"

import Button from "@/components/atoms/Button"

interface Props {
  title: string
  animationClass: string
  tailwindKeyframes: string
  tailwindAnimation: string
  onClose: () => void
}

const AnimationDetailsModal: React.FC<Props> = ({
  title,
  animationClass,
  tailwindKeyframes,
  tailwindAnimation,
  onClose,
}) => {
  React.useEffect(() => {
    const handleKeyDown = (e): void => {
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

  const [selectedModifiers, setSelectedModifiers] = React.useState<string[]>([])
  const isAlwaysEnabled = React.useMemo(
    () => selectedModifiers.length === 0,
    [selectedModifiers]
  )

  const animationClassName = React.useMemo(() => {
    return selectedModifiers.length > 0
      ? selectedModifiers.map((m) => `${m}:${animationClass}`).join(" ")
      : animationClass
  }, [animationClass, selectedModifiers])

  const [codeHTML, setCodeHTML] = React.useState("")

  React.useEffect(() => {
    const generateCodeHTML = async () => {
      if (tailwindKeyframes.length && tailwindAnimation.length) {
        const code = await codeToHtml(tailwindKeyframes, {
          lang: "css",
          theme: "github-dark-default",
        })
        setCodeHTML(code)
      } else {
        setCodeHTML("")
      }
    }
    generateCodeHTML()
  }, [tailwindKeyframes, tailwindAnimation])

  const handleCheckChange = (checked: boolean, modifier: string): void => {
    if (checked) {
      setSelectedModifiers([...selectedModifiers, modifier])
    } else {
      setSelectedModifiers((modifiers) =>
        modifiers.filter((m) => m !== modifier)
      )
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
      <AnimatePresence>
        <motion.div
          initial={{ translateY: 50, scale: 0.8, opacity: 0 }}
          animate={{ translateY: 0, scale: 1, opacity: 1 }}
          exit={{ translateY: 50, scale: 0.8, opacity: 0 }}
          tabIndex={0}
          role="button"
          onKeyUp={(e) => {
            e.key === "Enter" && e.stopPropagation()
          }}
          className="w-[820px] rounded-xl bg-zinc-800 p-5"
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <div className="mb-3 flex justify-between">
            <p className="text-zinc-200">{title}</p>
            <button
              onClick={onClose}
              className="-mr-1 -mt-1 rounded-full bg-zinc-700 p-1 hover:bg-zinc-900/40 cursor-pointer"
            >
              <XSmall />
            </button>
          </div>
          <div className="flex gap-5">
            <div className="flex-1">
              <div className="relative rounded-xl bg-zinc-900 pb-20 pt-24 text-center">
                <Button
                  className={animationClassName}
                  style={{ animationIterationCount, animationDirection }}
                >
                  Button
                </Button>
                <p className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1 text-sm text-zinc-600">
                  <span className="select-none">Preview</span>
                  <span>
                    <Telescope size={14} />
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="mb-8">
                <p className="mb-2 text-zinc-200 font-medium">
                  When to animate:
                </p>
                <div className="flex gap-4">
                  {allModifiers.map((modifier, index) => (
                    <label
                      className="flex items-center gap-2 text-sm capitalize leading-none text-zinc-400"
                      htmlFor={`${modifier}-id`}
                      key={index}
                    >
                      <Checkbox.Root
                        className="flex size-[25px] appearance-none items-center justify-center rounded-md bg-zinc-700 outline-hidden hover:bg-zinc-900/40"
                        checked={selectedModifiers.includes(modifier)}
                        onCheckedChange={(checked: boolean) => {
                          handleCheckChange(checked, modifier)
                        }}
                        id={`${modifier}-id`}
                      >
                        <Checkbox.Indicator className="text-neutral-300">
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
                      className="flex size-[25px] appearance-none items-center justify-center rounded-md bg-zinc-700 outline-hidden hover:bg-zinc-900"
                      checked={isAlwaysEnabled}
                      onCheckedChange={() => {
                        setSelectedModifiers([])
                      }}
                      id="is-always-enabled"
                    >
                      <Checkbox.Indicator className="text-neutral-300">
                        <Check size={15} />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    Always
                  </label>
                </div>
              </div>
              <div className="mb-8">
                <p className="mb-2 text-zinc-200 font-medium">Behavior:</p>
                <div className="flex gap-4">
                  <label
                    className="flex items-center gap-2 text-sm leading-none text-zinc-400"
                    htmlFor="is-playing-infinite"
                  >
                    <Checkbox.Root
                      className="flex size-[25px] appearance-none items-center justify-center rounded-md bg-zinc-700 outline-hidden hover:bg-zinc-900"
                      checked={animationIterationCount === "infinite"}
                      onCheckedChange={(checked) => {
                        setAnimationIterationCount(
                          checked === true ? "infinite" : 1
                        )
                      }}
                      id="is-playing-infinite"
                    >
                      <Checkbox.Indicator className="text-neutral-300">
                        <Check size={15} />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    Play Infinite
                  </label>
                  <label
                    className="flex items-center gap-2 text-sm leading-none text-zinc-400"
                    htmlFor="alternate-animation"
                  >
                    <Checkbox.Root
                      className="flex size-[25px] appearance-none items-center justify-center rounded-md bg-zinc-700 outline-hidden hover:bg-zinc-900"
                      checked={animationDirection === "alternate"}
                      onCheckedChange={(checked) => {
                        setAnimationDirection(
                          checked === true ? "alternate" : "normal"
                        )
                      }}
                      id="alternate-animation"
                    >
                      <Checkbox.Indicator className="text-neutral-300">
                        <Check size={15} />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    Alternate
                  </label>
                </div>
              </div>
              {codeHTML.length > 0 && (
                <div className="mb-8">
                  <p className="mb-2 text-zinc-200 font-medium">
                    Tailwind Config:
                  </p>
                  <div className="relative rounded-md bg-[#0D1116] px-3 py-1">
                    <pre className="max-h-[300px] max-w-[400px] overflow-auto p-3">
                      <code
                        className="font-mono text-sm"
                        dangerouslySetInnerHTML={{ __html: codeHTML }}
                      />
                    </pre>
                    <button
                      className="absolute right-2 top-2 rounded-sm cursor-pointer p-2 text-zinc-300 hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-hidden"
                      disabled={isConfigCopied}
                      onClick={() => {
                        copyToClipboard(tailwindKeyframes)
                        setIsConfigCopied(true)
                        setTimeout(() => {
                          setIsConfigCopied(false)
                        }, 3000)
                      }}
                    >
                      {isConfigCopied ? (
                        <Check size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                </div>
              )}
              <div>
                <p className="mb-2 text-zinc-200 font-medium">Class Name:</p>
                <code className="flex min-w-[400px] items-center justify-between rounded-md bg-[#0D1116] text-[#FFA656] py-1 pl-3 pr-1 font-mono text-sm leading-7">
                  {animationClassName}
                  <button
                    className="rounded-sm cursor-pointer p-2 text-zinc-300 hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-hidden"
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
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default AnimationDetailsModal
