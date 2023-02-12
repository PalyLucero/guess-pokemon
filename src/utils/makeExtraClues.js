function makeExtraClues(pokemon) {
  const { name, weight, height, typesSpanish, typesEnglish } = pokemon
  const parsedTypesEs = JSON.parse(typesSpanish)
  const parsedTypesEn = JSON.parse(typesEnglish)
  const nameStarts = name.slice(0, 1)
  const sizeClueEn = `This POKéMON weight is ${weight / 10}Kg and heights ${height / 10}m`
  const sizeClueEs = `El peso de este POKéMON es ${weight / 10}Kg y mide ${height / 10}m`
  const nameClueEn = `The name starts with ${nameStarts.toUpperCase()}`
  const nameClueEs = `El nombre empieza con ${nameStarts.toUpperCase()}`
  const typeClueEn = `Has ${parsedTypesEn.length} type${parsedTypesEn.length === 2 ? "s" : ""}: ${parsedTypesEn[0].toUpperCase() + `${parsedTypesEn[1] ? ", " + parsedTypesEn[1].toUpperCase() : ""}`}`
  const typeClueEs = `Tiene ${parsedTypesEs.length} tipo${parsedTypesEs.length === 2 ? "s" : ""}: ${parsedTypesEs[0].toUpperCase() + `${parsedTypesEs[1] ? ", " + parsedTypesEs[1].toUpperCase() : ""}`}`
  const extraClues = {
    english: [sizeClueEn, nameClueEn, typeClueEn],
    spanish: [sizeClueEs, nameClueEs, typeClueEs]
  }
  return extraClues
}

export default makeExtraClues