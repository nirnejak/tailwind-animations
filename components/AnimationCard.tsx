import * as React from "react"
import Button from "./atoms/Button"
import { Copy } from "akar-icons"

interface Props {}

const AnimationCard: React.FC<Props> = () => {
  return (
    <div className="rounded-xl bg-zinc-800 text-center px-20 pb-20 pt-24 relative">
      <button className="absolute top-2 right-2 rounded-md p-2 text-zinc-300 hover:bg-zinc-950 hover:text-zinc-200 focus:bg-zinc-950 focus:outline-none">
        <Copy size={16} />
      </button>
      <p className="text-sm absolute top-4 left-5">Bounce</p>
      <Button variant="purple">Click Me</Button>
    </div>
  )
}

export default AnimationCard
