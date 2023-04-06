import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import ActionButtons from '../components/ActionButtons'
import { useAllPokemonData } from '../hooks/usePokemonData'
import { usePokemonData } from '../hooks/usePokemonData'
import { useAppContext } from "../context/context";

import en from "../../locales/en.js";
import es from "../../locales/es";

export default function List() {

  const [showGoToTop, setShowGoTotop] = useState(false)
  const { data: allPokemon, isLoading } = useAllPokemonData()
  const { refetch } = usePokemonData()

  const { state } = useAppContext();
  const { lang } = state;

  const t = lang === "en" ? en.list : es.list;

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
          <h1>{t.loading}</h1> :
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
                            <td>{t.id}</td>
                            <td>{id}</td>
                          </tr>
                          <tr>
                            <td>{t.height}</td>
                            <td>{height / 10}m</td>
                          </tr>
                          <tr>
                            <td>{t.weight}</td>
                            <td>{weight / 10}Kg</td>
                          </tr>
                          <tr>
                            <td>{t.types}</td>
                            {
                              lang === "en" ?
                                <td>{types.english[0].toUpperCase() + `${types.english[1] ? ", " + types.english[1].toUpperCase() : ""}`}</td> :
                                <td>{types.spanish[0].toUpperCase() + `${types.spanish[1] ? ", " + types.spanish[1].toUpperCase() : ""}`}</td>
                            }
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
    <ActionButtons />
  </div>
}
