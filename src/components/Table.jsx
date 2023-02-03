import React from "react";
import { useScoreData } from "../hooks/useScoreData";

export default function Table() {
  const { data: scores, isLoading } = useScoreData()
  console.log(scores)

  if(isLoading) return <div>Loading...</div>

  return <div>
    {
      scores.length > 0 ? scores.map(score => {
        return <h1 key={score.id}>Name: {score.name} - Score: {score.score}</h1>
      }) : <div>Loading...</div>
    }
  </div>;
}
