import React from "react";
import PokeHand from "../PokeHand/PokeHand";
import { withStyles } from "@material-ui/core";
import { pokemon } from "../../Maps";
import pokeGameStyles from "./pokeGameStyles";

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
      message1 = (
        <div className={classes.winLoseMessage} style={{ color: "green" }}>
          Winner!
        </div>
      );
      message2 = (
        <div className={classes.winLoseMessage} style={{ color: "red" }}>
          Loser
        </div>
      );
    } else if (hand1Total < hand2Total) {
      message1 = (
        <div className={classes.winLoseMessage} style={{ color: "red" }}>
          Loser
        </div>
      );
      message2 = (
        <div className={classes.winLoseMessage} style={{ color: "green" }}>
          Winner!
        </div>
      );
    } else {
      message1 = message2 = <div className={classes.winLoseMessage}>Draw</div>;
    }

    return (
      <div className={classes.PokeGame}>
        {message1}
        <PokeHand
          pokemonIDs={hand1}
          totalExp={hand1Total}
          isGameStart={this.props.isGameStart}
        />

        <div style={{ fontSize: "2vh", opacity: 0 }}>divider</div>

        {message2}
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
