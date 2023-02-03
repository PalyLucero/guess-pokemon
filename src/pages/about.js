import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import About from '../components/About'
import { usePokemonData } from '../hooks/usePokemonData'

export default function ScoreTable() {
  const { refetch } = usePokemonData()
  return (
    <div>
      <Head>
        <title>Pokemon Guesser</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar refetch={refetch} />
      <About />
    </div>
  )
}