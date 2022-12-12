import React from 'react'
import { ACTIONS } from '../context/reducer'
import { useAppContext } from '../context/context'

export default function Navbar({ refetch }) {
  const { state, dispatch } = useAppContext()

  const highLight = state.testMode ? "text-green-600" : ""

  const handleReset = () => {
    dispatch({ type: ACTIONS.RESET, payload: {fn: refetch, disableTestMode: false} })
  }

  const handleTestMode = () => {
    if (!state.testMode) {
      return dispatch({ type: ACTIONS.TEST_MODE })
    }
    dispatch({ type: ACTIONS.RESET, payload: {fn: refetch, disableTestMode: true} })
  }

  return (
    <div className='bg-red-500 w-full flex justify-between'>
      <div className=' px-8 py-4 text-2xl font-bold text-center'>Guess the Pokémon!</div>
      <div className='flex items-center px-4'>
        <button className='p-4 text-xl font-bold text-center' onClick={() => handleReset()}>Replay</button>
        <button className={'p-4 text-xl font-bold text-center ' + highLight} onClick={() => handleTestMode()}>Test Mode</button>
        <div className='p-4 text-xl font-bold text-center'>About</div>
        <div className='p-4 text-xl font-bold text-center'>Scores</div>
      </div>
    </div>
  )
}
