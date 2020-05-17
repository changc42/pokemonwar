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
import pokeCardStyles from "./pokeCardStyles";

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
        <p className={classes.PokeNameText}>{name}</p>
        <img className={classes.PokeImg} src={imgURL} alt="pokemon img" />
        <p className={classes.PokeTypeText}>Type: {type}</p>
        <p className={classes.ExpText}>Exp: {exp}</p>
      </div>
    );
  }

  renderPokeball() {
    let { classes } = this.props;
    return (
      <div className={classes.PokeCard}>
        <p className={classes.PokeNameText} style={{ opacity: "0" }}>
          filler name
        </p>
        <img src="pokeball.jpg" className={classes.PokeImg} />
        <p className={classes.PokeTypeText} style={{ opacity: "0" }}>
          Type:{" "}
        </p>
        <p className={classes.ExpText} style={{ opacity: "0" }}>
          Exp:{" "}
        </p>
      </div>
    );
  }

  render() {
    return this.props.isGameStart ? this.renderCard() : this.renderPokeball();
  }
}

export default withStyles(pokeCardStyles)(PokeCard);
