import { useQuery } from 'react-query'

const getPokemon = async () => {
  const response = await fetch(`/api/pokemon`)
  const data = await response.json()
  const { pokemonData } = data
  return pokemonData
}

const getAllPokemon = async () => {
  const response = await fetch(`/api/pokemon?all=true`)
  const data = await response.json()
  const { allPokemon } = data
  return allPokemon
}

export const usePokemonData = () => {
  return useQuery('pokemon', getPokemon, {
    refetchOnMount: true,
    refetchOnWindowFocus: false
  })
}

export const useAllPokemonData = () => {
  return useQuery('allPokemon', getAllPokemon, {
    refetchOnMount: true,
    refetchOnWindowFocus: false
  })
}