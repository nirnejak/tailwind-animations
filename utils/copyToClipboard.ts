import { toast } from "sonner"

const copyToClipboard = (link): void => {
  navigator.clipboard
    .writeText(link)
    .then(() => {})
    .catch((error) => {
      toast.error("Unable to copy")
      console.log(error)
    })
}

export default copyToClipboard
