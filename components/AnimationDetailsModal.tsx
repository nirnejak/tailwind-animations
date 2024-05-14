import * as React from "react"

import { highlight } from "sugar-high"
import { Check, Copy, Telescope } from "akar-icons"
import * as Checkbox from "@radix-ui/react-checkbox"

import { IAnimation } from "@/utils/animations"
import copyToClipboard from "@/utils/copyToClipboard"

import Button, { IColorVariants } from "./atoms/Button"

interface Props {
  animation: IAnimation
  color: IColorVariants
  onClose: () => void
}

const allModifiers = ["hover", "active", "focus"]

const AnimationDetailsModal: React.FC<Props> = ({
  animation,
  color,
  onClose,
}) => {
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

  const code = React.useMemo(() => {
    const config = {
      keyframes: {
        ...animation.tailwindKeyframesProperty,
      },
      animation: {
        ...animation.tailwindAnimationProperty,
      },
    }
    return JSON.stringify(config, null, 4)
  }, [animation])
  const codeHTML = highlight(code)

  const [modifiers, setModifiers] = React.useState<string[]>(["hover"])

  const isAlwaysEnabled = React.useMemo(
    () => modifiers.length === 0,
    [modifiers]
  )

  const handleCardClick = (e) => {
    e.stopPropagation()
  }

  const handleCheckedChange = (checked: boolean, modifier: string) => {
    if (checked) {
      setModifiers([...modifiers, modifier])
    } else {
      setModifiers((modifiers) => {
        return modifiers.filter((m) => m !== modifier)
      })
    }
  }

  return (
    <div
      className="fixed left-0 top-0 z-max h-screen w-full bg-zinc-900/30 backdrop-blur-lg grid place-content-center"
      onClick={onClose}
    >
      <div
        className="bg-zinc-800 rounded-xl p-5 w-[880px]"
        onClick={handleCardClick}
      >
        <div className="mb-3">{animation.title}</div>
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="rounded-xl bg-zinc-900 text-center px-18 pb-20 pt-24 relative mb-5">
              <Button variant={color} className={animation.animationClass}>
                Click Me
              </Button>
              <p className="text-zinc-600 absolute left-1/2 bottom-3 -translate-x-1/2 text-sm flex items-center gap-1">
                <span>Preview</span>
                <span>
                  <Telescope size={14} />
                </span>
              </p>
            </div>
            <div>
              <p className="mb-2 font-sm">When to animate:</p>
              <div className="flex gap-2">
                {allModifiers.map((modifier, index) => (
                  <div className="flex items-center gap-2">
                    <Checkbox.Root
                      className="hover:bg-zinc-950 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-zinc-700 outline-none"
                      checked={modifiers.includes(modifier)}
                      onCheckedChange={(checked: boolean) =>
                        handleCheckedChange(checked, modifier)
                      }
                      id={`${modifier}-id`}
                    >
                      <Checkbox.Indicator
                        className={`text-${color}-500 bg-zinc-700`}
                      >
                        <Check />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    <label
                      className="text-sm leading-none text-zinc-400 capitalize"
                      htmlFor={`${modifier}-id`}
                    >
                      {modifier}
                    </label>
                  </div>
                ))}
                <div className="flex items-center gap-2 ml-7">
                  <Checkbox.Root
                    className="hover:bg-zinc-950 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-zinc-700 outline-none"
                    checked={isAlwaysEnabled}
                    onCheckedChange={() => setModifiers([])}
                    id="is-always-enabled"
                  >
                    <Checkbox.Indicator
                      className={`text-${color}-500 bg-zinc-700`}
                    >
                      <Check />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <label
                    className="text-sm leading-none text-zinc-400"
                    htmlFor="is-always-enabled"
                  >
                    Always
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="relative bg-zinc-900 px-3 py-1 mb-2 rounded-md">
              <pre className="max-h-[300px] max-w-[400px] overflow-auto">
                <code
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: codeHTML }}
                />
              </pre>
              <button
                className="rounded p-2 absolute top-2 right-2 text-zinc-300 hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-none"
                onClick={() => copyToClipboard(animation.animationClass)}
              >
                <Copy size={16} />
              </button>
            </div>
            <code className="bg-zinc-900 pl-3 py-1 pr-1 flex items-center justify-between rounded-md text-sm">
              {modifiers.length
                ? modifiers.map(
                    (modifier) => `${modifier}:${animation.animationClass} `
                  )
                : animation.animationClass}
              <button
                className="rounded p-2 text-zinc-300 hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-none"
                onClick={() => copyToClipboard(animation.animationClass)}
              >
                <Copy size={16} />
              </button>
            </code>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimationDetailsModal
