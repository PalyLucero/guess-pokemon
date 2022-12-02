import axios from "axios"
import shuffle from "./shuffle"
import makeClues from "./makeClues"

const getPokemon = async () => {
  let pokemonUrls = []

  for (let i = 1; i < 151; i++) {
    pokemonUrls.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
  }

  const pokemonList = await Promise.all(
    shuffle(pokemonUrls).map(async (url) => {
      const poke = await axios(url)
      return poke
    })
  )

  const pokemonData = pokemonList.map(responses => {
    const poke = responses.data
    return {
      id: poke.id,
      name: poke.name,
      types: poke.types,
      weight: poke.weight,
      height: poke.height,
      clues: makeClues({types: poke.types, height: poke.height, weight: poke.weight, name: poke.name})
    }
  })

  return pokemonData
}

export default getPokemon