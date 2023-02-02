import { useQuery } from 'react-query'

const getPokemon = async () => {
  const response = await fetch(`/api/pokemon`)
  const data = await response.json()
  const { pokemonData } = data
  return pokemonData
}

export const usePokemonData = () => {
  return useQuery('pokemon', getPokemon, {
    refetchOnMount: true,
    refetchOnWindowFocus: false
  })
}