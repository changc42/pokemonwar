import React from "react";
import ReactDom from "react-dom";
import {
  mapIdToProps,
  mapNumToId,
  mapTypeToColor,
  pokemon,
  typeDB,
} from "../../Maps";
import "./PokeCard.css";
import { digit3 } from "../../staticFunctions";

class PokeCard extends React.Component {
  static defaultProps = {
    pokemonID: 0,
  };

  renderCard() {
    let { pokemonID } = this.props;
    let { imgId, name, type, exp } = pokemon[pokemonID];
    let imgURL =
      pokemonID === "default"
        ? "pokeball.jpg"
        : `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${digit3(
            imgId
          )}.png`;
    return (
      <div
        className="PokeCard"
        style={{
          backgroundColor: typeDB[pokemon[pokemonID].type].color,
        }}
      >
        <h2>{name}</h2>
        <img src={imgURL} />
        <div className="PokeCard_details">
          <p style={{ fontSize: "20px" }}>Type: {type}</p>
          <p>Exp: {exp}</p>
        </div>
      </div>
    );
  }

  renderPokeball() {
    return <img src="pokeball.jpg" />;
  }

  render() {
    return this.props.isGameStart ? this.renderCard() : this.renderPokeball();
  }
}

export default PokeCard;
