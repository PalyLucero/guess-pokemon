import React from "react";
import { useScoreData } from "../hooks/useScoreData";

export default function Table() {
  const { data: scores, isLoading } = useScoreData();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="nes-table-responsive flex w-fit justify-center my-8">
      <table className="nes-table is-bordered is-centered w-1/2">
        <thead>
          <tr>
            <th className="w-1/4">
              <button className="">NAME</button>
            </th>
            <th className="w-1/4">
              <button className="">SCORE</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {scores.length > 0 ? (
            scores.map((score) => {
              return (
                <tr key={score.id}>
                  <td>{score.name.toUpperCase()}</td>
                  <td>{score.score}</td>
                </tr>
              );
            })
          ) : (
            null
          )}
        </tbody>
      </table>
    </div>
  );
}
