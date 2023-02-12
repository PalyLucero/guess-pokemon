import makeExtraClues from "./makeExtraClues"
import shuffle from "./shuffle"

function parsePokemonData(poke) {

  const extraClues = makeExtraClues(poke)
  const types = {
    english: JSON.parse(poke.typesEnglish),
    spanish: JSON.parse(poke.typesSpanish)
  }
  const description = {
    english: JSON.parse(poke.descriptionEnglish).map(desc => {
      return desc.replace(/[\n\f]/gm, ' ')
    }),
    spanish: JSON.parse(poke.descriptionSpanish).map(desc => {
      return desc.replace(/[\n\f]/gm, ' ')
    }),
  }

  const parsed = {
    types,
    description,
    extraClues,
    fullClues: {
      spanish: shuffle(description.spanish.concat(extraClues.spanish)),
      english: shuffle(description.english.concat(extraClues.english))
    }
  }
  return parsed
}

export default parsePokemonData