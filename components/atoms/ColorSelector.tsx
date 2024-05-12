import * as React from "react"

import * as ToggleGroup from "@radix-ui/react-toggle-group"

interface Props {
  color: string
  setColor: (val) => void
}

const toggleGroupItemClasses =
  "hover:bg-zinc-950 data-[state=on]:bg-zinc-700 flex p-3 items-center justify-center bg-zinc-800 text-base leading-4 first:rounded-l-lg last:rounded-r-lg focus:z-10 focus:outline-none"

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
        <ToggleGroup.Item
          className={toggleGroupItemClasses}
          value="purple"
          aria-label="Purple Theme"
        >
          <div className="rounded-full bg-purple-600 h-[20px] w-[20px]" />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          className={toggleGroupItemClasses}
          value="pink"
          aria-label="Pink Theme"
        >
          <div className="rounded-full bg-pink-600 h-[20px] w-[20px]" />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          className={toggleGroupItemClasses}
          value="red"
          aria-label="Red Theme"
        >
          <div className="rounded-full bg-red-600 h-[20px] w-[20px]" />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          className={toggleGroupItemClasses}
          value="amber"
          aria-label="Amber Theme"
        >
          <div className="rounded-full bg-amber-600 h-[20px] w-[20px]" />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          className={toggleGroupItemClasses}
          value="green"
          aria-label="Green Theme"
        >
          <div className="rounded-full bg-green-600 h-[20px] w-[20px]" />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          className={toggleGroupItemClasses}
          value="sky"
          aria-label="Sky Theme"
        >
          <div className="rounded-full bg-sky-600 h-[20px] w-[20px]" />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          className={toggleGroupItemClasses}
          value="blue"
          aria-label="Blue Theme"
        >
          <div className="rounded-full bg-blue-600 h-[20px] w-[20px]" />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  )
}

export default ColorSelector
