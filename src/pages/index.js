import Pokemon from '../components/Pokemon'
import Navbar from '../components/Navbar'
import getPokemon from '../utils/getPokemon'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

// export async function getServerSideProps() {
//   let pokemonData = await getPokemon()
//   return {
//     props: {
//       pokemonData
//     }
//   }
// }

export default function Home({ pokemonData }) {

  const { data: pokemon, isLoading, error } = useQuery('pokemon', getPokemon, {
    initialData: pokemonData,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  })

  const [current, setCurrent] = useState({})
  const [pointer, setPointer] = useState(0)
  const [cluePointer, setCluePointer] = useState(0)


  useEffect(() => {
    if (isLoading) return
    setCurrent(pokemon[pointer])
  }, [pokemon, isLoading, pointer])

  if (isLoading || !current) return <div className='h-screen w-screen flex flex-col justify-around items-center'>Loading</div>

  return (
    <div className='h-screen w-screen flex flex-col justify-start items-center'>
      <Navbar />
      <Pokemon pokemon={current} success={setPointer} pointer={pointer} cluePointer={cluePointer} setClue={setCluePointer} />
    </div>
  )
}

