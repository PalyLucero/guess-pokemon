import Pokemon from '../components/Pokemon'
import Navbar from '../components/Navbar'
import SubmitScore from '../components/SubmitScore'
import TestData from '../components/TestData'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useAppContext } from '../context/context'
import { ACTIONS } from '../context/reducer'

const getPokemon = async () => {
  const response = await fetch(`/api/pokemon`)
  const data = await response.json()
  const { pokemonData } = data
  return pokemonData
}

export default function Home({ pokemonData }) {

  const { state, dispatch } = useAppContext()
  const { data: pokemon, isLoading, isRefetching, refetch } = useQuery('pokemon', getPokemon, {
    initialData: pokemonData,
    refetchOnMount: true,
    refetchOnWindowFocus: false
  })

  const { currentPokemon, currentPokemonIndex, gameDone, testMode } = state

  useEffect(() => {
    if (isLoading) return
    if (currentPokemonIndex > 9) return dispatch({ type: ACTIONS.GAME_DONE })
    dispatch({ type: ACTIONS.SET_POKEMON, payload: pokemon[currentPokemonIndex] })
  }, [dispatch, pokemon, currentPokemonIndex, isLoading])


  if (isLoading || !currentPokemon || isRefetching) return <div className='h-screen w-screen flex flex-col justify-around items-center'>Loading</div>

  return (
    <div className='h-screen w-screen flex flex-col justify-start items-center'>
      <Head>
        <title>Pokemon Guesser</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar refetch={refetch} />
      {
        testMode ? (
          <div className='flex flex-col justify-around'>
            <Pokemon />
            <TestData />
          </div>
        ) : <>{
          gameDone ?
            <SubmitScore /> :
            <Pokemon />
        }</>
      }

    </div>
  )
}

