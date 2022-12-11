import Pokemon from '../components/Pokemon'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import shuffle from '../utils/shuffle'
import { useAppContext } from '../context/context'
import { ACTIONS } from '../context/reducer'

const getPokemon = async () => {
  const response = await fetch(`/api/getPokemon`)
  const data = await response.json()
  const { pokemonData } = data
  return pokemonData
}

export default function Home({ pokemonData }) {

  const { state, dispatch } = useAppContext()
  const { data: pokemon, isLoading, refetch } = useQuery('pokemon', getPokemon, {
    initialData: pokemonData,
    refetchOnMount: true,
    refetchOnWindowFocus: false
  })


  // const [current, setCurrent] = useState({})
  // const [pointer, setPointer] = useState(0)
  // const [cluePointer, setCluePointer] = useState(0)
  // const [gameDone, setGameDone] = useState(false)

  const { currentPokemon, currentPokemonIndex, currentClueIndex, gameDone, remainingTime, totalScore } = state
  console.log(state)

  useEffect(() => {
    if (isLoading) return
    if (currentPokemonIndex > 9) return dispatch({ type: ACTIONS.GAME_DONE })
    dispatch({ type: ACTIONS.SET_POKEMON, payload: pokemon[currentPokemonIndex] })
  }, [dispatch, pokemon, currentPokemonIndex, isLoading])


  if (isLoading || !currentPokemon) return <div className='h-screen w-screen flex flex-col justify-around items-center'>Loading</div>

  let fullClues
  currentPokemon && currentPokemon.clues && currentPokemon.description && (fullClues = shuffle(currentPokemon.clues.concat(currentPokemon.description)))

  return (
    <div className='h-screen w-screen flex flex-col justify-start items-center'>
      <Head>
        <title>Pokemon Guesser</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar refetch={refetch}/>
      {
        gameDone ?
          <div>
            {`GAME OVER! Remainig Time: ${remainingTime} Score: ${totalScore}`}
          </div> :
          <Pokemon pokemon={{ ...currentPokemon, clues: fullClues }} pointer={currentPokemonIndex} cluePointer={currentClueIndex} gameDone={gameDone} />
      }
    </div>
  )
}

