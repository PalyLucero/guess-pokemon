import { prisma } from "../../../database/prisma"

const getPokemon = async (req, res) => {

  const { method } = req

  switch (method) {
    case "GET":
      const pokemonRaw = await prisma.pokemon.findMany()
      const pokemonData = pokemonRaw.map(poke => {
        const descParse = JSON.parse(poke.description)
        const descFormatted = [...new Set(descParse)].map( d => {
          return d.split('\f').concat(' ')
        })
        return {
          ...poke,
          types: JSON.parse(poke.types),
          clues: JSON.parse(poke.clues),
          description: descFormatted
        }
      })
      // console.log(pokemonData)
      return res.json({ pokemonData })

    default:
      return res.status(400).json('Method not allowed')
  }
}

export default getPokemon



  // let pokemonUrls = []

  // for (let i = 1; i < 151; i++) {
  //   pokemonUrls.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
  // }

  // const pokemonList = await Promise.all(
  //   shuffle(pokemonUrls).map(async (url) => {
  //     const poke = await axios(url)
  //     return poke
  //   })
  // )

  // const pokemonData = pokemonList.map(responses => {
  //   const poke = responses.data
  //   return {
  //     id: poke.id,
  //     name: poke.name,
  //     types: poke.types,
  //     weight: poke.weight,
  //     height: poke.height,
  //     clues: makeClues({types: poke.types, height: poke.height, weight: poke.weight, name: poke.name})
  //   }
  // })
