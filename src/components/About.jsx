import Link from "next/link";
import React, { useState } from "react";
import { useAppContext } from "../context/context";
import ActionButtons from "./ActionButtons";

import en from "../../locales/en.js";
import es from "../../locales/es";

export default function About() {
  const [modal, setModal] = useState(false);

  const { state } = useAppContext();
  const { lang } = state;

  const t = lang === "en" ? en.about : es.about;

  const copyToClipboard = () => {
    navigator.clipboard.writeTex("luce.paly@gmail.com")
    setModal(true)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-between m-8">
        <div className="w-10/12">
          <p>{t.project[0]}</p>
          <p>{t.project[1]}</p>
          <section className="w-full flex-wrap flex justify-around my-8">
            <a href="https://nextjs.org" className="nes-badge">
              <span className="is-dark">Next.js</span>
            </a>
            <a
              href="https://nostalgic-css.github.io/NES.css/"
              className="nes-badge"
            >
              <span className="is-success">NES.css</span>
            </a>
            <a href="https://react-query-v3.tanstack.com" className="nes-badge">
              <span className="is-error">React Query</span>
            </a>
            <a href="https://www.prisma.io" className="nes-badge">
              <span className="is-primary">Prisma</span>
            </a>
            <a href="https://planetscale.com" className="nes-badge">
              <span className="is-dark">Planetscale</span>
            </a>
          </section>
        </div>
        <div className="nes-container is-dark w-10/12 mt-8">
          <p>{t.me[0]}</p>
          <p>{t.me[1]}</p>
          <section className="w-full flex justify-around my-8">
            <i
              className="nes-icon is-large gmail nes-pointer"
              onClick={() => copyToClipboard()}
            />
            <Link
              target="_blank"
              href={"https://github.com/PalyLucero"}
              rel="noopener noreferrer"
            >
              <i className="nes-icon is-large github" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/pablo-lucero-103b531b7/"}
              rel="noopener noreferrer"
            >
              <i className="nes-icon is-large linkedin" />
            </Link>
          </section>
        </div>
      </div>
      {modal ? (
        <div className="justify-center items-center w-1/2 h-min flex fixed p-4 inset-x-1/4 top-8">
          <div className="bg-slate-100 h-min w-min p-2">
            <div className="nes-container bg-slate-100 flex flex-col relative w-auto max-w-sm items-center">
              <p>&quot;luce.paly@gmail.com&quot;</p>
              <p>{t.copyMsg}</p>
              <button
                className="nes-btn is-error w-1/3"
                onClick={() => setModal(false)}
              >
                {t.closeBtn}
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <ActionButtons />
    </>
  );
}
