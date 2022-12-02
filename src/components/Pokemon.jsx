import React, { useState } from 'react'
import Image from 'next/image'

export default function Pokemon({ pokemon, success, pointer, cluePointer, setClue }) {

  const { clues, sprite } = pokemon

  if (!clues || !sprite) return <div>Loading</div>

  const handleAsk = (e) => {
    e.preventDefault()
    if (clues.length - 1 === cluePointer) setClue(0)
    else setClue(cluePointer + 1)

  }
  const handleNext = (e) => {
    e.preventDefault()
    if (pointer === 150) success(0)
    success(pointer + 1)
  }

  return (
    <div className='w-3/4 h-full flex flex-col items-center'>
      <div className='flex justify-between min-w-full rounded p-2'>
        <div className='bg-black bg-opacity-20 px-4 py-2 rounded'>Time</div>
        <div className='bg-black bg-opacity-20 px-4 py-2 rounded'>Score</div>
      </div>
      <div className='min-w-full h-min p-2 rounded'>
        <div className='bg-black bg-opacity-20 h-52 min-w-full min-h-full rounded grid place-items-center'>
          {
            sprite && <Image src={sprite} width={64} height={64} alt="Skip this" priority className='h-52 w-auto filter brightness-0' />
          }
        </div>
      </div>
      <div className='flex justify-between min-w-full rounded p-2'>
        <input placeholder='Enter your answer' className='bg-black bg-opacity-20 w-5/6 px-4 py-2 rounded placeholder:text-gray-600 placeholder:italic focus:outline-none focus:border-none focus:ring-none focus:ring-none' />
        <div className='p-2' />
        <button className='bg-black bg-opacity-20 w-1/6 px-4 py-2 rounded flex justify-center' onClick={(e) => handleNext(e)}>Skip</button>
      </div>
      <div className='flex justify-between min-w-full rounded p-2'>
        <div className='bg-black bg-opacity-20 w-5/6 px-4 py-2 rounded'>{clues[cluePointer]}</div>
        <div className='p-2' />
        <button className='bg-black bg-opacity-20 w-1/6 px-4 py-2 rounded flex justify-center' onClick={(e) => handleAsk(e)}>Ask</button>
      </div>
    </div>
  )
}
