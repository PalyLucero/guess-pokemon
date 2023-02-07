import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'
import { useAllPokemonData } from '../hooks/usePokemonData'

export default function List() {

  const { data: allPokemon, isLoading } = useAllPokemonData()

  if (isLoading) return

  return <div>
    <Navbar />
    <div className='flex flex-wrap'>
      {
        isLoading ?
          <h1>Loading...</h1> :
          allPokemon.map(poke => {
            const { id, name, height, weight, types, fullClues } = poke
            return <div key={id} className='xl:w-1/2 w-full px-4 my-8'>
              <div className="nes-container is-dark with-title">
                <h1 className='title'>{name.toUpperCase()}</h1>
                <div className='sm:grid sm:grid-cols-2 items-center flex flex-col'>
                  <div>
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} width={256} height={256} alt="Skip this" priority className="" />
                  </div>
                  <div className='nes-table-responsive'>
                    <div className='overflow-hidden h-full w-full'>
                      <table className='nes-table is-bordered is-dark h-full w-full'>
                        <tbody>
                          <tr>
                            <td>DexID</td>
                            <td>{id}</td>
                          </tr>
                          <tr>
                            <td>HEIGHT</td>
                            <td>{height}</td>
                          </tr>
                          <tr>
                            <td>WEIGHT</td>
                            <td>{weight}</td>
                          </tr>
                          <tr>
                            <td>TYPE(S)</td>
                            <td>{types[0].toUpperCase() + `${types[1] ? ", " + types[1].toUpperCase() : ""}`}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  {
                    fullClues.map((clue) => {
                      return <p key={id + "clue" + name} className="hidden">{clue}</p>
                    })
                  }
                </div>
              </div>
            </div>
          })
      }
    </div>
  </div>
}

{/*
 <div className='nes-container flex items-center m-4 space-x-4'>
  <div className=''>
  {
    id && <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} width={64} height={64} alt="Skip this" priority className={'h-24 w-auto'} />
  }
</div>
<div className='nes-table-responsive w-full'>
  <table className='nes-table is-centered'>
    <thead>
      <tr>
        <th>Name</th>
        <th>DexID</th>
        <th>Type(s)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{name.toUpperCase()}</td>
        <td>{id}</td>
        <td>{types[0].toUpperCase() +`${types[1] ? ", " + types[1].toUpperCase() : ""}`}</td>
      </tr>
    </tbody>
  </table>
</div>
</div> 
*/}