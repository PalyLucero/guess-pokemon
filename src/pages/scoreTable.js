import React from 'react'
import Navbar from '../components/Navbar'
import Table from '../components/Table'
import { usePokemonData } from '../hooks/usePokemonData'

export default function ScoreTable() {
  const { refetch } = usePokemonData()
  return (
    <div className='flex flex-col'>
      <Navbar refetch={refetch} />
      <Table />
    </div>
  )
}
