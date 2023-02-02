import Pokemon from "../components/Pokemon";
import Navbar from "../components/Navbar";
import SubmitScore from "../components/SubmitScore";
import TestData from "../components/TestData";
import Head from "next/head";
import { useEffect } from "react";
import { usePokemonData } from "../hooks/usePokemonData";
import { useAppContext } from "../context/context";
import { ACTIONS } from "../context/reducer";

export default function Home() {
  const { data: pokemon, isLoading, isRefetching, refetch } = usePokemonData();

  const { state, dispatch } = useAppContext();
  const { currentPokemon, currentPokemonIndex, gameDone, testMode } = state;

  useEffect(() => {
    if (isLoading) return;
    if (currentPokemonIndex > 9) return dispatch({ type: ACTIONS.GAME_DONE });
    dispatch({
      type: ACTIONS.SET_POKEMON,
      payload: pokemon[currentPokemonIndex],
    });
  }, [dispatch, pokemon, currentPokemonIndex, isLoading]);

  if (isLoading || !currentPokemon || isRefetching)
    return (
      <div className="h-screen w-screen flex flex-col justify-around items-center">
        Loading
      </div>
    );

  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center">
      <Head>
        <title>Pokemon Guesser</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar refetch={refetch} />
      <div className="flex flex-col justify-center items-center">
        {testMode ? (
          <div className="flex flex-col justify-around">
            <Pokemon />
            <TestData />
          </div>
        ) : (
          <>{gameDone ? <SubmitScore /> : <Pokemon />}</>
        )}
      </div>
    </div>
  );
}
