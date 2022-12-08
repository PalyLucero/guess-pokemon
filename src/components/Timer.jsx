import { useState, useEffect, useRef } from "react"

export default function Timer({ correct, setRemainingTime, gameDone, setGameDone }) {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(30)

  const timerInterval = useRef()

  useEffect(() => {
    if (correct) {
      setRemainingTime((minutes * 60) + seconds)
      setSeconds(seconds + 15)
    }
    if (seconds > 60) {
      let rest = seconds - 60
      setMinutes(minutes + 1)
      setSeconds(rest)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correct])

  useEffect(() => {
    timerInterval.current = setInterval(() => {
      if (seconds > 0) {
        return setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setGameDone(true)
          return clearInterval(timerInterval.current)
        }
      }
      setMinutes(minutes - 1)
      setSeconds(59)

    }, 1000)
    return () => clearInterval(timerInterval.current)
  }, [minutes, seconds])

  return (
    <div className='bg-black bg-opacity-20 px-4 py-2 rounded'>
      {
        correct ?
          "+" :
          `${minutes > 9 ? minutes : "0" + minutes}:${seconds > 9 ? seconds : "0" + seconds}`
      }
    </div>
  )
}
