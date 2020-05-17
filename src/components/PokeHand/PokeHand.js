import React from "react";
import ReactDom from "react-dom";
import { Grid, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import PokeCard from "../PokeCard/PokeCard";
import pokeHandStyles from "./pokeHandStyles";

class PokeDex extends React.Component {
  static defaultProps = {
    pokemonIDs: [0, 0, 0, 0],
    totalExp: 0,
  };

  renderCards() {
    return this.props.pokemonIDs.map((pokemonID) => (
      <Grid item sm={3} xs={6}>
        <PokeCard pokemonID={pokemonID} isGameStart={this.props.isGameStart} />
      </Grid>
    ));
  }
  render() {
    let { classes } = this.props;
    return (
      <Container>
        <div className={classes.ExpMessage}>
          Total exp: {this.props.totalExp}
        </div>
        <Grid container>{this.renderCards()}</Grid>
      </Container>
    );
  }
}

export default withStyles(pokeHandStyles)(PokeDex);
