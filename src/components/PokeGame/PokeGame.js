import React from "react";
import ReactDom from "react-dom";

import PokeCard from "../PokeCard/PokeCard";
import PokeHand from "../PokeHand/PokeHand";

import { mapIdToProps, mapNumToId, pokemon } from "../../Maps";
import { randID, digit3 } from "../../staticFunctions";

import "./PokeGame.css";

//PokeGame contains both sides, exp for both sides, and a win/lose title
class PokeGame extends React.Component {
  static defaultProps = {
    hand1: [0, 0, 0, 0],
    hand2: [0, 0, 0, 0],
  };
  render() {
    let { isGameStart } = this.props;
    let { hand1, hand2 } = this.props;
    let reducer = (acc, curr) => acc + pokemon[curr].exp;
    let hand1Total = hand1.reduce(reducer, 0);
    let hand2Total = hand2.reduce(reducer, 0);

    let message1, message2;
    if (hand1Total > hand2Total) {
      message1 = <h1 id="winner">Winner!</h1>;
      message2 = <h1 id="loser">Loser!</h1>;
    } else if (hand1Total < hand2Total) {
      message1 = <h1 id="loser">Loser!</h1>;
      message2 = <h1 id="winner">Winner!</h1>;
    } else {
      message1 = <h1 id="tie">Draw</h1>;
      message2 = <h1 id="tie">Draw</h1>;
    }

    return (
      <div>
        {isGameStart ? "" : message1}
        <PokeHand
          pokemonIDs={hand1}
          totalExp={hand1Total}
          isGameStart={this.props.isGameStart}
        />
        {isGameStart ? "" : message2}
        <PokeHand
          pokemonIDs={hand2}
          totalExp={hand2Total}
          isGameStart={this.props.isGameStart}
        />
      </div>
    );
  }
  // render() {
  //   let cards1 = [];
  //   let totalExp1 = 0;
  //   for (let i = 0; i < 4; i++) {
  //     let x = mapNumToId.get(randID());
  //     totalExp1 += mapIdToProps.get(x)[2];
  //     cards1.push(
  //       <PokeCard
  //         name={mapIdToProps.get(x)[0]}
  //         img={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${digit3(
  //           x
  //         )}.png`}
  //         type={mapIdToProps.get(x)[1]}
  //         exp={mapIdToProps.get(x)[2]}
  //       />
  //     );
  //   }

  //   let cards2 = [];
  //   let totalExp2 = 0;
  //   for (let i = 0; i < 4; i++) {
  //     let x = mapNumToId.get(randID());
  //     totalExp2 += mapIdToProps.get(x)[2];
  //     cards2.push(
  //       <PokeCard
  //         name={mapIdToProps.get(x)[0]}
  //         img={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${digit3(
  //           x
  //         )}.png`}
  //         type={mapIdToProps.get(x)[1]}
  //         exp={mapIdToProps.get(x)[2]}
  //       />
  //     );
  //   }

  //   let message1, message2;
  //   if (totalExp1 > totalExp2) {
  //     message1 = <h1 id="winner">Winner!</h1>;
  //     message2 = <h1 id="loser">Loser!</h1>;
  //   } else if (totalExp1 < totalExp2) {
  //     message1 = <h1 id="loser">Loser!</h1>;
  //     message2 = <h1 id="winner">Winner!</h1>;
  //   } else {
  //     message1 = <h1 id="tie">Draw</h1>;
  //     message2 = <h1 id="tie">Draw</h1>;
  //   }

  //   return (
  //     <div>
  //       {message1}
  //       <PokeDex totalExp={totalExp1} cards={cards1} />
  //       {message2}
  //       <PokeDex totalExp={totalExp2} cards={cards2} />
  //     </div>
  //   );
  // }
}

export default PokeGame;
