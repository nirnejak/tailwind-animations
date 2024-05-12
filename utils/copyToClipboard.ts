import { toast } from "sonner"

const copyToClipboard = (link): void => {
  navigator.clipboard
    .writeText(link)
    .then(() => {
      toast("Copied to clipboard")
    })
    .catch((error) => {
      toast.error("Unable to copy")
      console.log(error)
    })
}

export default copyToClipboard
