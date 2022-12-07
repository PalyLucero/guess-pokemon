import Score from '../components/Score'
import Timer from '../components/Timer'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Pokemon({ pokemon, setPointer, pointer, cluePointer, setClue, fullClues }) {

  const [answer, setAnswer] = useState("")
  const [correct, setCorrect] = useState(false)
  const [skipped, setSkipped] = useState(false)

  const { clues, id, name, description } = pokemon
  const blacked = correct ? "" : "filter brightness-0"

  useEffect(() => {
    if (name === answer.toLowerCase()) {
      setCorrect(true)
    }
  }, [name, answer])

  useEffect(() => {
    if (correct) {
      const timer = setTimeout(() => {
        setCorrect(false)
        setPointer(pointer + 1)
        setAnswer("")
      }, 1000)
    } else if (skipped) {
      setSkipped(false)
      setPointer(pointer + 1)
      setAnswer("")
    }
  }, [correct, skipped, pointer, setPointer])


  if (!clues || !id || !description) return <div>Loading</div>

  const handleAsk = (e) => {
    e.preventDefault()
    if (fullClues.length - 1 === cluePointer) return setClue(0)
    else setClue(cluePointer + 1)
  }

  return (
    <div className='w-3/4 h-full flex flex-col items-center'>
      <div className='flex justify-between rounded p-2 w-full'>
        <Timer correct={correct} skipped={skipped} />
        <Score correct={correct} skipped={skipped} />
      </div>
      <div className='min-w-full h-min p-2 rounded'>
        <div className='bg-black bg-opacity-20 h-52 min-w-full min-h-full rounded grid place-items-center'>
          {
            id && <Image src={`/pokemon/${id}.png`} width={64} height={64} alt="Skip this" priority className={'h-52 w-auto ' + blacked} />
          }
        </div>
      </div>
      <div className='flex justify-between min-w-full rounded p-2'>
        <input placeholder='Enter your answer' value={answer} onChange={(e) => setAnswer(e.target.value.toUpperCase())} className='bg-black bg-opacity-20 w-5/6 px-4 py-2 rounded placeholder:text-gray-600 placeholder:italic focus:outline-none focus:border-none focus:ring-none focus:ring-none' />
        <div className='p-2' />
        <button className='bg-black bg-opacity-20 w-1/6 px-4 py-2 rounded flex justify-center' onClick={e => setSkipped(true)}>Skip</button>
      </div>
      <div className='flex justify-between min-w-full rounded p-2'>
        <div className='bg-black bg-opacity-20 w-5/6 px-4 py-2 rounded'>{fullClues[cluePointer]}</div>
        <div className='p-2' />
        <button className='bg-black bg-opacity-20 w-1/6 px-4 py-2 rounded flex justify-center' onClick={(e) => handleAsk(e)}>Ask</button>
      </div>
    </div>
  )
}
