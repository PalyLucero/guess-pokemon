import Timer from '../components/Timer'
import Image from 'next/image'
import { useAppContext } from '../context/context'
import { ACTIONS } from '../context/reducer'
import { useState, useEffect } from 'react'

export default function Pokemon() {

  const [answer, setAnswer] = useState("")
  const [skipped, setSkipped] = useState(false)
  const [showClue, setShowClue] = useState(false)

  const { state, dispatch } = useAppContext()
  const { currentPokemon, currentClueIndex, correctAnswer } = state

  const { id, name, fullClues } = currentPokemon
  const blacked = correctAnswer ? "" : "filter brightness-0"

  useEffect(() => {
    if (name === answer.toLowerCase()) {
      dispatch({ type: ACTIONS.CORRECT_ANSWER, payload: correctAnswer })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, answer, dispatch])

  useEffect(() => {
    if (correctAnswer) {
      const timer = setTimeout(() => {
        dispatch({ type: ACTIONS.CORRECT_ANSWER })
        dispatch({ type: ACTIONS.NEXT_POKEMON })
        setAnswer("")
      }, 1000)
    } else if (skipped) {
      dispatch({ type: ACTIONS.SKIP_POKEMON, payload: currentPokemon.id })
      setSkipped(false)
      setAnswer("")
    }
  }, [correctAnswer, skipped, dispatch, currentPokemon])

  const handleAsk = (e) => {
    e.preventDefault()
    setShowClue(true)
    dispatch({ type: ACTIONS.NEXT_CLUE })
  }

  return (
    <div className='h-full flex flex-col items-center'>
      <div >
        <Timer />
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
          {
            <div className='bg-black bg-opacity-20 w-5/6 px-4 py-2 rounded'>{showClue && fullClues[currentClueIndex]}</div>
          }
          <div className='p-2' />
          <button className='bg-black bg-opacity-20 w-1/6 px-4 py-2 rounded flex justify-center' onClick={(e) => handleAsk(e)}>Ask</button>
        </div>
      </div>
    </div>
  )
}
