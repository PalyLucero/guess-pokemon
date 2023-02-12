import Timer from "../components/Timer";
import Image from "next/image";
import { useAppContext } from "../context/context";
import { ACTIONS } from "../context/reducer";
import { useState, useEffect, useRef } from "react";
import shuffle from "../utils/shuffle";

export default function Pokemon() {
  const [answer, setAnswer] = useState("");
  const [skipped, setSkipped] = useState(false);
  const [showClue, setShowClue] = useState(false);
  const inputRef = useRef(null);

  const { state, dispatch } = useAppContext();
  const { currentPokemon, currentClueIndex, correctAnswer } = state;

  const { id, name, fullClues } = currentPokemon;
  const blacked = correctAnswer ? "" : "filter brightness-0";

  useEffect(() => {
    if (name === answer.toLowerCase()) {
      dispatch({ type: ACTIONS.CORRECT_ANSWER, payload: correctAnswer });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, answer, dispatch]);

  useEffect(() => {
    if (correctAnswer) {
      const timer = setTimeout(() => {
        dispatch({ type: ACTIONS.CORRECT_ANSWER });
        dispatch({ type: ACTIONS.NEXT_POKEMON });
        setAnswer("");
      }, 1000);
    } else if (skipped) {
      dispatch({ type: ACTIONS.SKIP_POKEMON, payload: currentPokemon.id });
      setSkipped(false);
      setAnswer("");
    }
    setShowClue(false);
    inputRef.current.focus();
  }, [correctAnswer, skipped, dispatch, currentPokemon]);

  const handleAsk = (e) => {
    e.preventDefault();
    setShowClue(true);
    dispatch({ type: ACTIONS.NEXT_CLUE });
  };

  const joinClues = (descriptions, extras) => {
    return shuffle([...descriptions, ...extras]);
  };

  return (
    <div className="w-9/12">
      <Timer />
      <div className="flex flex-col w-full items-center">
        <div className="w-full flex justify-around">
          {id && (
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              width={256}
              height={256}
              alt="Skip this"
              priority
              className={"object-cover" + blacked}
            />
          )}
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center w-full mb-2 space-x-2">
            <input
              placeholder="Enter your answer"
              ref={inputRef}
              value={answer}
              onChange={(e) => setAnswer(e.target.value.toUpperCase())}
              className="nes-input"
            />
            <button
              className="nes-btn is-error"
              onClick={(e) => setSkipped(true)}
            >
              Skip
            </button>
          </div>
          <div className="flex items-center justify-around w-full space-x-2">
            {showClue ? (
              <div className="w-full">
                <div className="nes-balloon from-left max-w-full max-h-fit">
                  {showClue && fullClues.english[currentClueIndex]}
                </div>
              </div>
            ) : (
              <></>
            )}
            <button
              className="nes-btn is-warning"
              onClick={(e) => handleAsk(e)}
            >
              Clue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
