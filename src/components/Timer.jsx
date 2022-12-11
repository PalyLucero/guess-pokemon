import { useAppContext } from '../context/context'
import { ACTIONS } from '../context/reducer'
import { useState, useEffect, useRef } from "react"


export default function Timer() {

  const { state, dispatch } = useAppContext()
  const { gameDone, correctAnswer, totalScore } = state

  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(30)

  const timerInterval = useRef()

  useEffect(() => {
    if (correctAnswer) {
      let remainingTime = (minutes * 60) + seconds
      dispatch({ type: ACTIONS.REMAINING_TIME, payload: remainingTime })
      setSeconds(seconds + 15)
      dispatch({ type: ACTIONS.TOTAL_SCORE})
    }
    if (seconds > 60) {
      let rest = seconds - 60
      setMinutes(minutes + 1)
      setSeconds(rest)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correctAnswer])

  useEffect(() => {
    timerInterval.current = setInterval(() => {
      if (seconds > 0) {
        return setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timerInterval.current)
          return dispatch({ type: ACTIONS.GAME_DONE })
        }
      }
      setMinutes(minutes - 1)
      setSeconds(59)

    }, 1000)
    return () => clearInterval(timerInterval.current)
  }, [minutes, seconds, dispatch])

  return (
    <div className='flex justify-between rounded p-2 w-full'>
      <div className='bg-black bg-opacity-20 px-4 py-2 rounded'>
        {
          correctAnswer ?
            "+" :
            `${minutes > 9 ? minutes : "0" + minutes}:${seconds > 9 ? seconds : "0" + seconds}`
        }
      </div>
      <div className='bg-black bg-opacity-20 px-4 py-2 rounded'>
        {totalScore}
      </div>
    </div>
  )
}
