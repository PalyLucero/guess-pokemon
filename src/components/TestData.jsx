import React from 'react'
import Image from 'next/image'
import { useAppContext } from '../context/context'

function TestData() {
  const { state, dispatch } = useAppContext()
  const { currentPokemon } = state
  const { id, name, types, height, weight } = currentPokemon

  if(!id) return

  return (
    <div className='bg-black bg-opacity-20 rounded flex justify-around text-xs m-2'>
      <div className='rounded grid place-items-center'>
        {
          id && <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} width={64} height={64} alt="Skip this" priority className={'h-24 w-auto'} />
        }
      </div>
      <div className='flex flex-col items-center justify-around m-2'>
        <div>Name: {name}</div>
        <div>Type: {types[0]}</div>
        {
          types[1] ?
            <div>Type 2: {types[1]}</div> : null
        }
        <div>Height: {height}</div>
        <div>Weight: {weight}</div>
        <div>DexID: {id}</div>
      </div>
    </div>
  )
}

export default TestData