import { prisma } from "../../../database/prisma"
import parsePokeData from "../../utils/parsePokeData"
import shuffle from "../../utils/shuffle"

const getPokemon = async (req, res) => {

  const { method } = req

  switch (method) {
    case "GET":
      const pokemonRaw = await prisma.pokemon.findMany()
      const allPokemon = pokemonRaw.map(poke => {
        const { cluesParsed, descParsed } = parsePokeData(poke.clues, poke.description, poke.name)
        return {
          ...poke,
          types: JSON.parse(poke.types),
          clues: cluesParsed,
          description: descParsed
        }
      })
      const shuffled = shuffle(allPokemon)
      const pokemonData = shuffled.slice(0, 10)
      return res.json({ pokemonData: pokemonData })

    default:
      return res.status(400).json('Method not allowed')
  }
}

export default getPokemon
