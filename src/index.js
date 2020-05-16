import React from "react";
import ReactDom from "react-dom";
import PokeCard from "./components/PokeCard/PokeCard";
import { mapIdToProps, mapNumToId } from "./Maps";
import PokeDex from "./components/PokeHand/PokeHand";
import App from "./components/App/App";

ReactDom.render(<App />, document.getElementById("root"));
