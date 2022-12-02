import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-red-500 w-full flex justify-between'>
      <div className=' px-8 py-4 text-2xl font-bold text-center'>Guess the Pokémon!</div>
      <div className='flex items-center px-4'>
        <div className=' p-4 text-xl font-bold text-center'>About</div>
        <div className=' p-4 text-xl font-bold text-center'>Replay</div>
        <div className=' p-4 text-xl font-bold text-center'>Scores</div>
      </div>
    </div>
  )
}
