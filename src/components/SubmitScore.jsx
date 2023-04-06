import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../context/context";
import { useAddScoreData } from "../hooks/useScoreData";

import en from "../../locales/en.js";
import es from "../../locales/es";

export default function SubmitScore() {
  const { state } = useAppContext();
  const { remainingTime, totalScore, lang } = state;
  const { mutate } = useAddScoreData();
  const router = useRouter();

  const [name, setName] = useState("");
  const [inputError, setInputError] = useState("");

  const t = lang === "en" ? en.submitScore : es.submitScore;

  const parsedTime = () => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes > 9 ? minutes : "0" + minutes}:${
      seconds > 9 ? seconds : "0" + seconds
    }`;
  };

  const handleChange = (value) => {
    setName(value);
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
            <p className="title">{t.gameOverTitle}</p>
            <p>{t.gameOverBadMessage}</p>
          </div>
        ) : (
          <div className="nes-container with-title is-centered">
            <p className="title">{t.gameOverTitle}</p>
            <p>
              {t.time} {parsedTime()}
            </p>
            <p>
              {t.score} {totalScore}
            </p>
          </div>
        )}
      </div>
      {totalScore > 0 ? (
        <>
          <div className="nes-field">
            <input
              placeholder={t.placeholder}
              value={name.toUpperCase()}
              onChange={(e) => handleChange(e.target.value)}
              className={`nes-input ${inputError}`}
            />
          </div>
          <button
            onClick={(e) => handleSubmit()}
            className={`nes-btn ${inputError}`}
          >
            {t.submitBtn}
          </button>
        </>
      ) : null}
    </div>
  );
}
