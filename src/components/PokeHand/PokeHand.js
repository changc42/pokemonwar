import React from "react";
import ReactDom from "react-dom";

import PokeCard from "../PokeCard/PokeCard";

import { mapIdToProps, mapNumToId } from "../../Maps";
import { randID, digit3 } from "../../staticFunctions";

import "./PokeHand.css";

class PokeDex extends React.Component {
  static defaultProps = {
    pokemonIDs: ["default", "default", "default", "default"],
    totalExp: 0,
  };

  renderCards() {
    return this.props.pokemonIDs.map((pokemonID) => (
      <PokeCard pokemonID={pokemonID} isGameStart={this.props.isGameStart} />
    ));
  }
  render() {
    return (
      <div className="PokeDex">
        {this.props.isGameStart ? (
          <div className="PokeDex_Text">
            <h3>Total exp: {this.props.totalExp}</h3>
          </div>
        ) : (
          ""
        )}
        <div className="PokeDex_Cards">{this.renderCards()}</div>
      </div>
    );
  }
}

export default PokeDex;
