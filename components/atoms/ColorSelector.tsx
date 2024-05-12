import * as React from "react"

import * as ToggleGroup from "@radix-ui/react-toggle-group"

interface Props {
  color: string
  setColor: (val) => void
}

const colorOptions = [
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
        className="inline-flex bg-mauve6 rounded space-x-px"
        type="single"
        defaultValue={color}
        onValueChange={setColor}
        aria-label="Button Themes"
      >
        {colorOptions.map((color, index) => (
          <ToggleGroup.Item
            key={index}
            className="hover:bg-zinc-950 data-[state=on]:bg-zinc-700 flex p-3 items-center justify-center bg-zinc-800 text-base leading-4 first:rounded-l-lg last:rounded-r-lg focus:z-10 focus:outline-none"
            value={color}
            aria-label={`${color} Theme`}
            title={color}
          >
            <div className={`rounded-full bg-${color}-600 h-[20px] w-[20px]`} />
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  )
}

export default ColorSelector