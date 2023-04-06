import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ACTIONS } from "../context/reducer";
import { useAppContext } from "../context/context";
import Image from "next/image";
import Link from "next/link";

export default function ActionButtons() {
  const { dispatch } = useAppContext();
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    dispatch({ type: ACTIONS.CHANGE_LANG, payload: locale });
  }, []);

  const changeLanguage = () => {
    const setLang = locale === "en" ? "es" : "en";
    dispatch({ type: ACTIONS.CHANGE_LANG, payload: setLang });
    return router.push(router.pathname, router.asPath, { locale: setLang });
  };

  return (
    <div className="fixed z-90 bottom-8 right-8 flex flex-col items-end space-y-1">
      <button className="nes-btn" onClick={() => changeLanguage()}>
        <Image src={`/${locale}.png`} width={32} height={32} alt={locale} />
      </button>
      <div className="">
        <Link
          target="_blank"
          href={"https://github.com/PalyLucero/guess-pokemon"}
          rel="noopener noreferrer"
          className="nes-icon github is-large  bg-slate-100 rounded-sm"
        />
      </div>
    </div>
  );
}
