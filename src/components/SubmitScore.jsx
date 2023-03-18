import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../context/context";
import { useAddScoreData } from "../hooks/useScoreData";

export default function SubmitScore() {
  const { state, dispatch } = useAppContext();
  const { remainingTime, totalScore } = state;
  const { mutate } = useAddScoreData();
  const router = useRouter();

  const [name, setName] = useState("");
  const [inputError, setInputError] = useState("");

  const parsedTime = () => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes > 9 ? minutes : "0" + minutes}:${
      seconds > 9 ? seconds : "0" + seconds
    }`;
  };

  const handleChange = (value) => {
    setName(value);
    console.log({ inputError, name });
    if (value.length < 5 && value.length > 0) {
      return setInputError("is-success");
    }
    return setInputError("is-error");
  };

  const handleSubmit = () => {
    if (inputError !== "is-success") return;
    return mutate(
      { name, score: parseInt(totalScore) },
      {
        onSuccess: router.push("/scoreTable"),
      }
    );
  };

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="m-4">
        {totalScore === 0 ? (
          <div className="nes-container with-title">
            <p className="title">GAME OVER!</p>
            <p>Try again with the New game button</p>
          </div>
        ) : (
          <div className="nes-container with-title is-centered">
            <p className="title">GAME OVER!</p>
            <p>Remainig Time: {parsedTime()}</p>
            <p>Score: {totalScore}</p>
          </div>
        )}
      </div>
      {totalScore > 0 ? (
        <>
          <div className="nes-field">
            <input
              placeholder="Your name"
              value={name.toUpperCase()}
              onChange={(e) => handleChange(e.target.value)}
              className={`nes-input ${inputError}`}
            />
          </div>
          <button
            onClick={(e) => handleSubmit()}
            className={`nes-btn ${inputError}`}
          >
            Submit
          </button>
        </>
      ) : null}
    </div>
  );
}
