import React from "react";
import { useScoreData } from "../hooks/useScoreData";
import { useAppContext } from "../context/context";
import ActionButtons from "./ActionButtons";

import en from "../../locales/en.js";
import es from "../../locales/es";

export default function Table() {
  const { data: scores, isLoading } = useScoreData();

  const { state } = useAppContext();
  const { lang } = state;

  const t = lang === "en" ? en.table : es.table

  if (isLoading)
    return (
      <div className="h-screen w-screen flex flex-col justify-around items-center">
        {t.loading}
      </div>
    );

  return (
    <div className="nes-table-responsive flex w-fit justify-center my-8">
      <table className="nes-table is-bordered is-centered w-1/2">
        <thead>
          <tr>
            <th className="w-1/4">
              <button className="">{t.name}</button>
            </th>
            <th className="w-1/4">
              <button className="">{t.score}</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {scores.length > 0
            ? scores.map((score) => {
                return (
                  <tr key={score.id}>
                    <td>{score.name.toUpperCase()}</td>
                    <td>{score.score}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
      <ActionButtons />
    </div>
  );
}
