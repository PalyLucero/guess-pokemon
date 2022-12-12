import React from 'react'
import { useAppContext } from '../context/context'

export default function SubmitScore() {

  const { state, dispatch } = useAppContext()
  const { remainingTime, totalScore } = state

  return (
    <div>
      {
        `GAME OVER! Remainig Time: ${remainingTime} Score: ${totalScore}`
      }
    </div>
  )
}
