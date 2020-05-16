import React, { useState } from "react";
import PokeGame from "../PokeGame/PokeGame";
import { randID, digit3 } from "../../staticFunctions";

export default function App() {
  let [hand1, setHand1] = useState([randID(), randID(), randID(), randID()]);
  let [hand2, setHand2] = useState([randID(), randID(), randID(), randID()]);
  let [isGameStart, setIsGameStart] = useState(false);

  function reDeal() {
    setIsGameStart(true);
    setHand1([randID(), randID(), randID(), randID()]);
    setHand2([randID(), randID(), randID(), randID()]);
  }
  return (
    <div>
      <img src="pokemon_logo.svg" />
      <button onClick={reDeal}>{isGameStart ? "Play Again!" : "Play"}</button>
      <PokeGame hand1={hand1} hand2={hand2} isGameStart />
    </div>
  );
}
