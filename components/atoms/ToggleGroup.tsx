import * as ToggleGroup from "@radix-ui/react-toggle-group"
import type * as React from "react"

interface Props {
  options: React.ReactNode[]
  value: string
  setValue: (val) => void
}

const CustomToggleGroup: React.FC<Props> = ({ options, value, setValue }) => {
  return (
    <div>
      <ToggleGroup.Root
        className="inline-flex space-x-px rounded-sm"
        type="single"
        defaultValue={value}
        onValueChange={setValue}
        aria-label="Button Themes"
      >
        {options.map((_option, i) => (
          <ToggleGroup.Item
            // biome-ignore lint/suspicious/noArrayIndexKey: options are static and don't reorder
            key={i}
            className="flex items-center justify-center bg-zinc-800 p-3 text-base/4 first:rounded-l-lg last:rounded-r-lg hover:bg-zinc-950 focus:z-10 focus:outline-hidden data-[state=on]:bg-zinc-700"
            value={value}
            aria-label={value}
          >
            {value}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  )
}

export default CustomToggleGroup
