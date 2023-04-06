import React from "react";
import Link from "next/link";
import { ACTIONS } from "../context/reducer";
import { useAppContext } from "../context/context";

import en from "../../locales/en.js";
import es from "../../locales/es";

export default function Navbar({ refetch }) {
  const { dispatch, state } = useAppContext();
  const { lang } = state;
  const t = lang === "en" ? en.navbar : es.navbar;

  const handleReset = () => {
    dispatch({
      type: ACTIONS.RESET,
      payload: { fn: refetch, disableTestMode: false },
    });
  };

  return (
    <div className="nes-container is-dark flex flex-col items-center text-center">
      <Link href="/" className="text-white hover:no-underline">
        {t.title}
      </Link>
      <div className="flex flex-col items-center sm:flex sm:flex-row">
        <Link className="h-full w-full sm:h-auto sm:w-auto" href="/game">
          <button
            className="nes-btn h-full w-full sm:w-auto"
            onClick={() => handleReset()}
          >
            {t.playBtn}
          </button>
        </Link>
        <Link className="h-full w-full sm:h-auto sm:w-auto" href="/about">
          <button className="nes-btn h-full w-full sm:w-auto">
            {t.aboutBtn}
          </button>
        </Link>

        <Link className="h-full w-full sm:h-auto sm:w-auto" href="/scoreTable">
          <button className="nes-btn h-full w-full sm:w-auto">
            {t.scoreBtn}
          </button>
        </Link>
      </div>
    </div>
  );
}
