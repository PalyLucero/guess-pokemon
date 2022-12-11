import React from 'react'
import { ACTIONS } from '../context/reducer'
import { useAppContext } from '../context/context'

export default function Navbar({ refetch }) {
  const { state, dispatch } = useAppContext()
  return (
    <div className='bg-red-500 w-full flex justify-between'>
      <div className=' px-8 py-4 text-2xl font-bold text-center'>Guess the Pokémon!</div>
      <div className='flex items-center px-4'>
        <div className=' p-4 text-xl font-bold text-center'>About</div>
        <button className=' p-4 text-xl font-bold text-center' onClick={() => dispatch({ type: ACTIONS.RESET, payload: refetch })}>Replay</button>
        <div className=' p-4 text-xl font-bold text-center'>Scores</div>
      </div>
    </div>
  )
}
