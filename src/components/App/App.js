import React, { useState } from "react";
import PokeGame from "../PokeGame/PokeGame";
import { randID } from "../../staticFunctions";
import { Button, Typography } from "@material-ui/core";
import ReplayButton from "../ReplayButton/ReplayButton";
import {
  withStyles,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
let appStyles = require("./appStyles");

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App(props) {
  let { classes } = props;
  let [hand1, setHand1] = useState([randID(), randID(), randID(), randID()]);
  let [hand2, setHand2] = useState([randID(), randID(), randID(), randID()]);
  let [isGameStart, setIsGameStart] = useState(false);

  function reDeal() {
    setIsGameStart(true);
    setHand1([randID(), randID(), randID(), randID()]);
    setHand2([randID(), randID(), randID(), randID()]);
  }
  return (
    <div className={classes.App}>
      <ThemeProvider theme={theme}>
        <div className={classes.PokemonLogo}>
          <img src="pokemon_logo.jpg" />
        </div>
        <ReplayButton
          buttonText={isGameStart ? "Play Again!" : "Play"}
          onClick={reDeal}
          className={classes.replayButton}
        />
        <PokeGame hand1={hand1} hand2={hand2} isGameStart={isGameStart} />
      </ThemeProvider>
    </div>
  );
}

export default withStyles(appStyles)(App);
