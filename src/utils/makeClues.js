import shuffle from "./shuffle"

const makeClues = (data) => {
  const { types, height, weight, name } = data

  if (!types || !name) return ["no clues yet"]

  const heightClue = `This pokémon height is ${height}`
  const weightClue = `This pokémon weight is ${weight}`
  const nameClue = `The name starts with ${name.slice(0, 3).toUpperCase()}`
  const typeClue = `The 1st type is ${types[0].type.name.toUpperCase()}`
  let SecTypeClue = null
  if (types[1]) SecTypeClue = `The 2nd type is ${types[1].type.name.toUpperCase()}`

  let clues = [typeClue, heightClue, weightClue, nameClue]
  if (SecTypeClue) clues.push(SecTypeClue)

  return shuffle(clues)
}

export default makeClues