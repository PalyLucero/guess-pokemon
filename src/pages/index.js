import Pokemon from '../components/Pokemon'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import shuffle from '../utils/shuffle'

const getPokemon = async () => {
  const response = await fetch(`/api/getPokemon`)
  const data = await response.json()
  const { pokemonData } = data
  return pokemonData
}

export default function Home({ pokemonData }) {

  const { data: pokemon, isLoading, error } = useQuery('pokemon', getPokemon, {
    initialData: pokemonData,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  })


  const [current, setCurrent] = useState({})
  const [pointer, setPointer] = useState(0)
  const [cluePointer, setCluePointer] = useState(0)

  console.log(current)

  useEffect(() => {
    if (isLoading) return
    if (pointer > 9) return setPointer(0)
    setCurrent(pokemon[pointer])
  }, [pokemon, isLoading, pointer])

  if (isLoading || !current) return <div className='h-screen w-screen flex flex-col justify-around items-center'>Loading</div>

  let fullClues
  current && current.clues && current.description && (fullClues = shuffle(current.clues.concat(current.description)))

  return (
    <div className='h-screen w-screen flex flex-col justify-start items-center'>
      <Head>
        <title>Pokemon Guesser</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Pokemon pokemon={current} setPointer={setPointer} pointer={pointer} cluePointer={cluePointer} setClue={setCluePointer} fullClues={fullClues} />
    </div>
  )
}

