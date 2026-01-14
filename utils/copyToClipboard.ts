const copyToClipboard = async (content: string): Promise<void> => {
  await navigator.clipboard.writeText(content)
}

export default copyToClipboard
