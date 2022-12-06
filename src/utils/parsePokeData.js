function sentenceCase(input, lowercaseBefore) {
  input = ( input === undefined || input === null ) ? '' : input;
  if (lowercaseBefore) { input = input.toLowerCase(); }
  return input.toString().replace( /(^|\. *)([a-z])/g, function(match, separator, char) {
      return separator + char.toUpperCase();
  });
}

const parsePokeData = (clues, description, name) => {
  const descParse = JSON.parse(description)
  const cluesParse = JSON.parse(clues)

  const descFormat = descParse.map(desc => {
    return desc.replace(/[\n\f]/gm, ' ')
  })
  
  const descFiltered = descFormat.map((desc) => {
    if(name === 'mr mime') name = 'mr. mime'
    let lower = desc.toLowerCase().replace(name, 'this pokémon')
    return sentenceCase(lower)
  })
  
  const descUnique = [...new Set(descFiltered)]
  
  const cluesParsed = cluesParse
  const descParsed = descUnique

  return { cluesParsed, descParsed }
}

export default parsePokeData