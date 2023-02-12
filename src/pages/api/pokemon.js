import { prisma } from "../../../database/prisma"
import parsePokemonData from "../../utils/parsePokemonData"
import shuffle from "../../utils/shuffle"

const getPokemon = async (req, res) => {

  const { method, query } = req
  const { all } = query
  switch (method) {
    case "GET":
      const pokemonRaw = await prisma.pokemon.findMany()
      const allPokemon = pokemonRaw.map(poke => {
        const { types, description, extraClues, fullClues } = parsePokemonData(poke)
        return {
          id: poke.id,
          name: poke.name,
          weight: poke.weight,
          height: poke.height,
          description,
          types,
          extraClues,
          fullClues
        }
      })
      if (all === 'true') return res.json({ allPokemon: allPokemon })
      const shuffled = shuffle(allPokemon)
      const pokemonData = shuffled.slice(0, 10)
      return res.json({ pokemonData: pokemonData })

    default:
      return res.status(400).json('Method not allowed')
  }
}

export default getPokemon
