"use client"
import * as React from "react"

import Button from "./atoms/Button"
import Input from "./atoms/Input"

interface Props {}

const AnimationGallery: React.FC<Props> = () => {
  return (
    <div>
      <div className="mb-3">
        <Input id="input" type="text" placeholder="Enter something..." />
      </div>
      <div>
        <Button
          variant="primary"
          type="button"
          onClick={() => {
            console.log("copy this")
          }}
        >
          Hello
        </Button>
      </div>
    </div>
  )
}

export default AnimationGallery
