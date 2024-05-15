const copyToClipboard = (link): void => {
  navigator.clipboard
    .writeText(link)
    .then(() => {})
    .catch((error) => {
      console.log(error)
    })
}

export default copyToClipboard
