import { PokemonClient } from "pokenode-ts"
import { prisma } from "../database/prisma"

const shuffle = (array: string[]) => {
  const shuffled = array.sort((a: string, b: string) => Math.random() - 0.5)
  return shuffled
}

const makeClues = (types: string[], height: number, weight: number, name: string) => {

  if (!types || !name) return ["no clues yet"]

  const heightClue = `This pokémon height is ${height}`
  const weightClue = `This pokémon weight is ${weight}`
  const nameClue = `The name starts with ${name.slice(0, 3).toUpperCase()}`
  const typeClue = `The 1st type is ${types[0].toUpperCase()}`
  let SecTypeClue: string | null = null
  if (types[1]) SecTypeClue = `The 2nd type is ${types[1].toUpperCase()}`

  let clues = [typeClue, heightClue, weightClue, nameClue]
  if (SecTypeClue) clues.push(SecTypeClue)

  return shuffle(clues)
}

const fillDb = async () => {

  const pokeApi = new PokemonClient()

  let pokemonIds = []

  for (let i = 1; i < 152; i++) {
    pokemonIds.push(i)
  }

  const resPokemon = await Promise.all(
    pokemonIds.map(async (id) => {
      return await pokeApi.getPokemonById(id)
    })
  )

  const getDescriptions = async (id: number) => {
    const species = await pokeApi.getPokemonSpeciesById(id)
    const name = species.name
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    const description = species.flavor_text_entries.filter(text => text.language.name === "en" && !text.flavor_text.includes(capitalizedName))
    return { desc: description.map((text) => { return text.flavor_text }), name }
  }

  const resDecriptions = await Promise.all(
    pokemonIds.map(async (id) => {
      return await getDescriptions(id)
    })
  )

  const pokemonData = resPokemon.map(responses => {
    const poke = responses
    const types = poke.types.map((t) => t.type.name)
    return {
      id: poke.id,
      name: poke.name,
      types: JSON.stringify(types),
      weight: poke.weight,
      height: poke.height,
      clues: JSON.stringify(makeClues(types, poke.height, poke.weight, poke.name)),
      description: JSON.stringify(resDecriptions.filter(desc => desc.name === poke.name)[0].desc)
    }
  })

  const creation = await prisma.pokemon.createMany({
    data: pokemonData
  })

  console.log('Creation?', creation)
}

fillDb()