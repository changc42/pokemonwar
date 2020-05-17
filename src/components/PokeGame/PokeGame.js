import React from "react";
import PokeHand from "../PokeHand/PokeHand";
import { withStyles } from "@material-ui/core";
import { pokemon } from "../../Maps";
let pokeGameStyles = require("./pokeGameStyles");

// import "./PokeGame.css";

//PokeGame contains both sides, exp for both sides, and a win/lose title
class PokeGame extends React.Component {
  static defaultProps = {
    hand1: [0, 0, 0, 0],
    hand2: [0, 0, 0, 0],
  };
  render() {
    let { isGameStart, classes } = this.props;
    let { hand1, hand2 } = this.props;
    let reducer = (acc, curr) => acc + pokemon[curr].exp;
    let hand1Total = hand1.reduce(reducer, 0);
    let hand2Total = hand2.reduce(reducer, 0);

    let message1, message2;
    if (hand1Total > hand2Total) {
      message1 = "Winner!";
      message2 = "Loser";
    } else if (hand1Total < hand2Total) {
      message1 = "Loser";
      message2 = "Winner!";
    } else {
      message1 = "Draw";
      message2 = "Draw";
    }

    return (
      <div className={classes.PokeGame}>
        <div className={classes.winLoseMessage}>
          {isGameStart ? message1 : ""}
        </div>
        <PokeHand
          pokemonIDs={hand1}
          totalExp={hand1Total}
          isGameStart={this.props.isGameStart}
        />
        <div className={classes.winLoseMessage}>
          {isGameStart ? message2 : ""}
        </div>

        <PokeHand
          pokemonIDs={hand2}
          totalExp={hand2Total}
          isGameStart={this.props.isGameStart}
        />
      </div>
    );
  }
}

export default withStyles(pokeGameStyles)(PokeGame);
