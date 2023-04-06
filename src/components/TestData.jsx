import React from "react";
import Image from "next/image";
import { useAppContext } from "../context/context";

import en from "../../locales/en.js";
import es from "../../locales/es";

function TestData() {
  const { state } = useAppContext();
  const { currentPokemon } = state;
  const { id, name, types, lang } = currentPokemon;

  const t = lang === "en" ? en.testData : es.testData;

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
              <th>{t.name}</th>
              <th>{t.id}</th>
              <th>{t.types}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name.toUpperCase()}</td>
              <td>{id}</td>
              {lang === "en" ? (
                <td>
                  {types.english[0].toUpperCase() +
                    `${
                      types.english[1]
                        ? ", " + types.english[1].toUpperCase()
                        : ""
                    }`}
                </td>
              ) : (
                <td>
                  {types.spanish[0].toUpperCase() +
                    `${
                      types.spanish[1]
                        ? ", " + types.spanish[1].toUpperCase()
                        : ""
                    }`}
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TestData;
