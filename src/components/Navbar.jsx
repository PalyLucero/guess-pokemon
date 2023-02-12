import React from "react";
import Link from "next/link";
import { ACTIONS } from "../context/reducer";
import { useAppContext } from "../context/context";

export default function Navbar({ refetch }) {
  const { dispatch } = useAppContext();

  const handleReset = () => {
    dispatch({
      type: ACTIONS.RESET,
      payload: { fn: refetch, disableTestMode: false },
    });
  };


  return (
    <div className="nes-container is-dark flex flex-col items-center text-center">
      <Link href="/" className="text-white hover:no-underline">
        Guess the Pokémon!
      </Link>
      <div className="flex flex-col items-center sm:flex sm:flex-row">
        <Link className="h-full w-full sm:h-auto sm:w-auto" href="/game">
          <button className="nes-btn h-full w-full sm:w-auto" onClick={() => handleReset()}>
            New game
          </button>
        </Link>
        <Link className="h-full w-full sm:h-auto sm:w-auto" href="/about">
          <button className="nes-btn h-full w-full sm:w-auto">About</button>
        </Link>

        <Link className="h-full w-full sm:h-auto sm:w-auto" href="/scoreTable">
          <button className="nes-btn h-full w-full sm:w-auto">Score table</button>
        </Link>
      </div>
    </div>
  );
}
