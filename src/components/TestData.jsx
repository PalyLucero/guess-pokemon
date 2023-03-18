import React from "react";
import Image from "next/image";
import { useAppContext } from "../context/context";

function TestData() {
  const { state } = useAppContext();
  const { currentPokemon } = state;
  const { id, name, types } = currentPokemon;

  if (!id) return;

  return (
    <div className="nes-container flex items-center m-4 space-x-4">
      <div className="">
        {id && (
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            width={64}
            height={64}
            alt="Skip this"
            priority
            className={"h-24 w-auto"}
          />
        )}
      </div>
      <div className="nes-table-responsive w-full">
        <table className="nes-table is-centered">
          <thead>
            <tr>
              <th>Name</th>
              <th>DexID</th>
              <th>Type(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name.toUpperCase()}</td>
              <td>{id}</td>
              <td>
                {types.english[0].toUpperCase() +
                  `${
                    types.english[1]
                      ? ", " + types.english[1].toUpperCase()
                      : ""
                  }`}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TestData;
