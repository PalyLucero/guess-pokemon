import Link from "next/link";
import ActionButtons from "../components/ActionButtons";
import { useAppContext } from "../context/context";
import { usePokemonData } from "../hooks/usePokemonData";
import { ACTIONS } from "../context/reducer";

export default function Home() {
  const { state, dispatch } = useAppContext();
  const highLight = state.testMode ? "is-success" : "is-error";

  const { refetch } = usePokemonData()

  const handleTestMode = () => {
    if (!state.testMode) {
      return dispatch({ type: ACTIONS.TEST_MODE });
    }
    dispatch({
      type: ACTIONS.RESET,
      payload: { fn: refetch, disableTestMode: true },
    });
  };

  return (
    <div className="flex flex-col items-center justify-around p-8 w-screen h-screen">
      <div className="nes-container with-title is-rounded w-3/4 h-fit">
        <h1 className="title">INSTRUCTIONS:</h1>
        <p>
          Guess 10 Pokémon in a row
        </p>
        <div className="flex justify-around">
          <Link href={"/game"}>
            <button className="nes-btn is-primary">
              PLAY
            </button>
          </Link>
          <button
            className={"nes-btn " + highLight}
            onClick={() => handleTestMode()}
          >
            Test Mode
          </button>
        </div>
      </div>
      <div className="flex justify-around w-3/4 fixed z-90 bottom-8">
        <Link href={"/list"}>
          <button className="nes-btn">Pokemon list</button>
        </Link>
        <Link href={"/about"}>
          <button className="nes-btn">About</button>
        </Link>
        <Link href={"/scoreTable"}>
          <button className="nes-btn">Score table</button>
        </Link>
      </div>
      <ActionButtons />
    </div>
  );
}
