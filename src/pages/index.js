import Link from "next/link";
import { useAppContext } from "../context/context";
import { usePokemonData } from "../hooks/usePokemonData";
import { ACTIONS } from "../context/reducer";
import ActionButtons from "../components/ActionButtons";

import en from "../../locales/en.js"
import es from "../../locales/es"

export default function Home() {

  const { state, dispatch } = useAppContext();
  const { testMode, lang } = state

  const highLight = testMode ? "is-success" : "is-error";

  const t = lang === "en" ? en.index : es.index

  const { refetch } = usePokemonData()

  const handleTestMode = () => {
    if (!testMode) {
      return dispatch({ type: ACTIONS.TEST_MODE });
    }
    dispatch({
      type: ACTIONS.RESET,
      payload: { fn: refetch, disableTestMode: true },
    });
  };

  return (
    <div className="flex flex-col items-center justify-around p-8 w-screen h-screen">
      <div className="nes-container with-title is-rounded w-10/12 h-fit">
        <h1 className="title">{t.title}</h1>
        <ul className="nes-list is-disc p-4">
          <li className="py-1">{t.instructions.objective}</li>
          <li className="py-1">{t.instructions.gameplay}</li>
          <li className="py-1">{t.instructions.scoring}</li>
          <li className="py-1">{t.instructions.skip}</li>
          <li className="py-1">{t.instructions.time}</li>
        </ul>
        <div className="flex justify-around">
          <Link href={"/game"}>
            <button className="nes-btn is-primary">
              {t.playBtn}
            </button>
          </Link>
          <button
            className={"nes-btn " + highLight}
            onClick={() => handleTestMode()}
          >
            {t.testBtn}
          </button>
        </div>
      </div>
      <div className="flex justify-around w-3/4 fixed z-90 bottom-8">
        <Link href={"/list"}>
          <button className="nes-btn">{t.listBtn}</button>
        </Link>
        <Link href={"/about"}>
          <button className="nes-btn">{t.aboutBtn}</button>
        </Link>
        <Link href={"/scoreTable"}>
          <button className="nes-btn">{t.scoreBtn}</button>
        </Link>
      </div>
      <ActionButtons />
    </div>
  );
}
