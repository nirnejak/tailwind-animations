const copyToClipboard = (content: string): void => {
  navigator.clipboard
    .writeText(content)
    .then(() => {})
    .catch((error) => {
      console.log(error)
    })
}

export default copyToClipboard
