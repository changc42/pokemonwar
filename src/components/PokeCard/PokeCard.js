import React from "react";
import ReactDom from "react-dom";
import {
  mapIdToProps,
  mapNumToId,
  mapTypeToColor,
  pokemon,
  typeDB,
} from "../../Maps";
import { digit3 } from "../../staticFunctions";
import { withStyles } from "@material-ui/core/styles";
let pokeCardStyles = require("./pokeCardStyles");

class PokeCard extends React.Component {
  static defaultProps = {
    pokemonID: 0,
  };

  renderCard() {
    let { pokemonID, classes } = this.props;
    let { imgID, name, type, exp } = pokemon[pokemonID];
    let imgURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${digit3(
      imgID
    )}.png`;
    console.log(imgURL);
    return (
      <div
        className={classes.PokeCard}
        style={{
          backgroundColor: typeDB[pokemon[pokemonID].type].color,
        }}
      >
        <h2>{name}</h2>
        <img className={classes.PokeImg} src={imgURL} alt="pokemon img" />
        <div className={classes.PokeCard_details}>
          <p>Type: {type}</p>
          <p>Exp: {exp}</p>
        </div>
      </div>
    );
  }

  renderPokeball() {
    let { classes } = this.props;
    return <img src="pokeball.jpg" className={classes.PokeImg} />;
  }

  render() {
    return this.props.isGameStart ? this.renderCard() : this.renderPokeball();
  }
}

export default withStyles(pokeCardStyles)(PokeCard);
