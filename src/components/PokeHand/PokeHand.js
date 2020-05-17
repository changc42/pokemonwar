import React from "react";
import ReactDom from "react-dom";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import PokeCard from "../PokeCard/PokeCard";
let pokeHandStyles = require("./pokeHandStyles");

class PokeDex extends React.Component {
  static defaultProps = {
    pokemonIDs: ["default", "default", "default", "default"],
    totalExp: 0,
  };

  renderCards() {
    return this.props.pokemonIDs.map((pokemonID) => (
      <Grid item lg={3}>
        <PokeCard pokemonID={pokemonID} isGameStart={this.props.isGameStart} />
      </Grid>
    ));
  }
  render() {
    let { classes } = this.props;
    return (
      <div>
        {this.props.isGameStart ? (
          <div className={classes.ExpMessage}>
            Total exp: {this.props.totalExp}
          </div>
        ) : (
          ""
        )}
        <Grid container>{this.renderCards()}</Grid>
      </div>
    );
  }
}

export default withStyles(pokeHandStyles)(PokeDex);
