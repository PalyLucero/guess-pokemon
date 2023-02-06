import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import { usePokemonData } from '../hooks/usePokemonData'

export default function ScoreTable() {
  const { refetch } = usePokemonData()
  return (
    <div>
      <Navbar refetch={refetch} />
      <About />
    </div>
  )
}