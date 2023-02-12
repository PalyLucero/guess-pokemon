import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useAllPokemonData } from '../hooks/usePokemonData'
import { usePokemonData } from '../hooks/usePokemonData'

export default function List() {

  const [showGoToTop, setShowGoTotop] = useState(false)
  const { data: allPokemon, isLoading } = useAllPokemonData()
  const { refetch } = usePokemonData()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowGoTotop(true);
      } else {
        setShowGoTotop(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isLoading) return

  return <div>
    <Navbar refetch={refetch} />
    <div className='flex flex-wrap'>
      {
        isLoading ?
          <h1>Loading...</h1> :
          allPokemon.map(poke => {
            const { id, name, height, weight, types, description } = poke
            return <div key={id} className='xl:w-1/2 w-full px-4 my-8'>
              <div className="nes-container is-dark with-title">
                <h1 className='title'>{name.toUpperCase()}</h1>
                <div className='sm:grid sm:grid-cols-2 items-center flex flex-col'>
                  <div>
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} width={256} height={256} alt="Skip this" priority className="" />
                  </div>
                  <div className='nes-table-responsive'>
                    <div className='overflow-hidden h-full w-full'>
                      <table className='nes-table is-bordered is-dark h-full w-full'>
                        <tbody>
                          <tr>
                            <td>DexID</td>
                            <td>{id}</td>
                          </tr>
                          <tr>
                            <td>HEIGHT</td>
                            <td>{height / 10}m</td>
                          </tr>
                          <tr>
                            <td>WEIGHT</td>
                            <td>{weight / 10}Kg</td>
                          </tr>
                          <tr>
                            <td>TYPE(S)</td>
                            <td>{types.english[0].toUpperCase() + `${types.english[1] ? ", " + types.english[1].toUpperCase() : ""}`}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  {
                    description.english.map((desc, index) => {
                      return <p key={id + "desc" + name + index} className="hidden">{desc}</p>
                    })
                  }
                </div>
              </div>
            </div>
          })
      }
    </div>
    {
      <div className='fixed z-90 bottom-8 right-8'>
        {showGoToTop && <button className='nes-btn is-error rotate-90' onClick={goToTop}>{"<"}</button>}
      </div>
    }
  </div>
}
