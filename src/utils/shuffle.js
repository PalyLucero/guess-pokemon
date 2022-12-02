const shuffle = (array) => {
  const shuffled = array.sort((a, b) => Math.random() - 0.5)
  return shuffled
}

export default shuffle