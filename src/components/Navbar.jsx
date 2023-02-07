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
    <div className="nes-container is-dark flex flex-col items-center">
      <Link href="/" className="text-white hover:no-underline">
        Guess the Pokémon!
      </Link>
      <div className="">
        <Link className="" href="/game">
          <button className="nes-btn" onClick={() => handleReset()}>
            Replay
          </button>
        </Link>
        <Link href="/about">
          <button className="nes-btn">About</button>
        </Link>

        <Link href="/scoreTable">
          <button className="nes-btn">Scores</button>
        </Link>
      </div>
    </div>
  );
}
