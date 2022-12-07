import { useState, useEffect, useRef } from "react"

export default function Timer({ correct, skipped }) {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(30)

  useEffect(() => {
    if (correct) setSeconds(seconds + 15)
    if (seconds > 60) {
      let rest = seconds - 60
      setMinutes(minutes + 1)
      setSeconds(rest)
    }
  }, [correct, skipped])

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        // console.log("seconds - 1")
        return setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          // console.log("done")
          return clearInterval(timer)
        }
      }
      // console.log("minute change")
      setMinutes(minutes - 1)
      setSeconds(59)

    }, 1000)
    return () => clearInterval(timer)
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
