import React, { useState } from "react";
import { useAppContext } from "../context/context";
import { useAddScoreData } from "../hooks/useScoreData";

export default function SubmitScore() {
  const { state, dispatch } = useAppContext();
  const { remainingTime, totalScore } = state;
  const { mutate } = useAddScoreData();

  const [name, setName] = useState("");

  const parsedTime = () => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes > 9 ? minutes : "0" + minutes}:${
      seconds > 9 ? seconds : "0" + seconds
    }`;
  };

  const handleSubmit = () => {
    if(name.length > 4 || name.length < 1) return <h1>wrong name</h1>
    return mutate({ name, score: parseInt(totalScore) });
  };

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="m-2">
        {totalScore === 0 ? (
          "GAME OVER! Try again pressing the Replay button"
        ) : (
          <div className="flex flex-col items-center justify-between bg-black bg-opacity-20 rounded p-2">
            <div>GAME OVER!</div>
            <div>Remainig Time: {parsedTime()}</div>
            <div>Score: {totalScore}</div>
          </div>
        )}
      </div>
      {totalScore > 0 ? (
        <>
          <input
            placeholder="Enter your name (4 characters)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black bg-opacity-20 w-full m-2 px-4 py-2 rounded placeholder:text-gray-600 placeholder:italic focus:outline-none focus:border-none focus:ring-none focus:ring-none"
          />
          <button
            className="bg-black bg-opacity-20 px-2 py-2 rounded m-2 flex justify-center"
            onClick={(e) => handleSubmit()}
          >
            Submit
          </button>
        </>
      ) : null}
    </div>
  );
}
