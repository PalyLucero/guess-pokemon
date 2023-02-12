import { FlavorText, PokemonClient } from "pokenode-ts"
import { prisma } from "../database/prisma"


const fillDb = async () => {

  const pokeApi = new PokemonClient()

  let pokemonIds = []

  for (let i = 1; i < 152; i++) {
    pokemonIds.push(i)
  }

  const createPokemon = async (id: number) => {

    const { weight, height, types, name } = await pokeApi.getPokemonById(id)
    const { flavor_text_entries } = await pokeApi.getPokemonSpeciesById(id)

    const parseName = (name: string) => {
      let parsedName = ""
      switch (name) {
        case "nidoran-f":
          return parsedName = "nidoran"
        case "nidoran-m":
          return parsedName = "nidoran"
        case "mr-mime":
          return parsedName = "mr. mime"
        case "farfetchd":
          return parsedName = "farfetch’d"
        default:
          return parsedName = name
      }
    }

    const parseDescriptions = (descriptions: FlavorText[]) => {
      const descriptionEn = descriptions.filter(text => text.language.name === "en")
      const descriptionEs = descriptions.filter(text => text.language.name === "es")

      const parsedDescriptionsEn = descriptionEn.map(text => {
        return erasePokemonName(text.flavor_text, parseName(name), "[NAME]")
      })
      const parsedDescriptionsEs = descriptionEs.map(text => {
        return erasePokemonName(text.flavor_text, parseName(name), "[NOMBRE]")
      })

      const uniqueDescriptionsEn = [];
      parsedDescriptionsEn.forEach((c) => {
        if (!uniqueDescriptionsEn.includes(c)) {
          uniqueDescriptionsEn.push(c);
        }
      });
      const uniqueDescriptionsEs = [];
      parsedDescriptionsEs.forEach((c) => {
        if (!uniqueDescriptionsEs.includes(c)) {
          uniqueDescriptionsEs.push(c);
        }
      });

      return {
        uniqueDescriptionsEn,
        uniqueDescriptionsEs
      }
    }

    const pokemon = {
      id: id,
      name: parseName(name),
      height: height,
      weight: weight,
      typesEnglish: JSON.stringify(types.map(t => t.type.name)),
      typesSpanish: JSON.stringify(types.map(t => translateTypes(t.type.name))),
      descriptionEnglish: JSON.stringify(parseDescriptions(flavor_text_entries).uniqueDescriptionsEn),
      descriptionSpanish: JSON.stringify(parseDescriptions(flavor_text_entries).uniqueDescriptionsEs)
    }

    return pokemon
  }

  const allPokemon = await Promise.all(
    pokemonIds.map(async (id) => {
      return await createPokemon(id)
    })
  )

  const creation = await prisma.pokemon.createMany({
    data: allPokemon
  })

  console.log('Creation?', creation)
}

function erasePokemonName(string, name, placeholder) {
  const nameRegex = new RegExp(name, 'gi');
  return string.replace(nameRegex, placeholder);
}

function translateTypes(type) {
  switch (type) {
    case "normal":
      return "normal"
    case "fighting":
      return "lucha"
    case "flying":
      return "volador"
    case "poison":
      return "veneno"
    case "ground":
      return "tierra"
    case "rock":
      return "roca"
    case "bug":
      return "bicho"
    case "ghost":
      return "fantasma"
    case "steel":
      return "acero"
    case "fire":
      return "fuego"
    case "water":
      return "agua"
    case "grass":
      return "planta"
    case "electric":
      return "eléctrico"
    case "psychic":
      return "psíquico"
    case "ice":
      return "hielo"
    case "dragon":
      return "dragón"
    case "dark":
      return "siniestro"
    case "fairy":
      return "hada"
    case "unknown":
      return "desconocido"
    case "shadow":
      return "oscuro"
    default:
      return
  }
}

fillDb()