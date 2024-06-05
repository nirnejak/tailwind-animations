import * as React from "react"

import * as ToggleGroup from "@radix-ui/react-toggle-group"

interface Props {
  color: string
  setColor: (val) => void
}

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

const colorOptions: IColorVariants[] = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
]

const ColorSelector: React.FC<Props> = ({ color, setColor }) => {
  return (
    <div>
      <ToggleGroup.Root
        className="inline-flex space-x-px rounded"
        type="single"
        defaultValue={color}
        onValueChange={setColor}
        aria-label="Button Themes"
      >
        {colorOptions.map((color, index) => (
          <ToggleGroup.Item
            key={index}
            className="flex items-center justify-center bg-zinc-800 p-3 text-base leading-4 first:rounded-l-lg last:rounded-r-lg hover:bg-zinc-950 focus:z-10 focus:outline-none data-[state=on]:bg-zinc-700"
            value={color}
            aria-label={`${color} Theme`}
            title={color}
          >
            <div className={`rounded-full ${color}-600 size-[20px]`} />
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  )
}

export default ColorSelector
