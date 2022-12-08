import React, { useEffect } from 'react'

const calculateTotal = (totalScore, remainingTime, skippedCount) => {
  const updatedTotalScore = Math.max(
    0,
    (totalScore + ((remainingTime * 100) / 30)) * ((10 - skippedCount) / 10)
  )
  return Math.floor(updatedTotalScore)
}

export default function Score({ remainingTime, skippedCount, totalScore, setTotalScore }) {

  useEffect(() => {
    const score = calculateTotal(totalScore, remainingTime, skippedCount)
    setTotalScore(score)
  }, [remainingTime, skippedCount])

  return (
    <div className='bg-black bg-opacity-20 px-4 py-2 rounded'>
      <p>{totalScore}</p>
    </div>
  )
}
