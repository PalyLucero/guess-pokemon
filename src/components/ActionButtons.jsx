import React from "react";
import { ACTIONS } from "../context/reducer";
import { useAppContext } from "../context/context";
import Link from "next/link";

export default function ActionButtons({refetch}) {

  return (
    <div className="fixed z-90 bottom-8 right-8">
      <Link target="_blank" href={"https://github.com/PalyLucero/guess-pokemon"} rel="noopener noreferrer" className="nes-icon github is-medium" />
    </div>
  );
}
