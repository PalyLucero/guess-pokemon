import Pokemon from "../components/Pokemon";
import Navbar from "../components/Navbar";
import SubmitScore from "../components/SubmitScore";
import TestData from "../components/TestData";
import ActionButtons from "../components/ActionButtons";
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
    if (currentPokemonIndex > 9) {
      if (testMode) {
        return dispatch({
          type: ACTIONS.RESET,
          payload: { fn: refetch, disableTestMode: false },
        });
      }
      return dispatch({ type: ACTIONS.GAME_DONE })
    };
    dispatch({
      type: ACTIONS.SET_POKEMON,
      payload: pokemon[currentPokemonIndex],
    });
  }, [dispatch, pokemon, currentPokemonIndex, isLoading, testMode, refetch]);

  if (isLoading || !currentPokemon || isRefetching) return 

  return (
    <div className="">
      <Navbar refetch={refetch} />
      <div className="flex flex-col justify-center items-center">
        {testMode ? (
          <div className="flex flex-col w-full justify-center items-center">
            <Pokemon />
            <TestData />
          </div>
        ) : (
          <>{gameDone ? <SubmitScore /> : <Pokemon />}</>
        )}
      </div>
      <ActionButtons refetch={refetch} />
    </div>
  );
}
