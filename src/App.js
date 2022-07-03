import { Box, Button, Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import DiceDisplay from "./DiceDisplay/DiceDisplay";
import GameCard from "./GameCard/GameCard";

function App() {

  const [dice, setDice] = useState({
    common1: 1,
    common2: 1,
    red: 1,
    yellow: 1,
    green: 1,
    blue: 1
  });

  const [totals, setTotals] = useState({
    common: [0],
    red: [0, 0],
    yellow: [0, 0],
    green: [0, 0],
    blue: [0, 0]
  });

  const rollDice = () => {

    let newDice = { ...dice };
    let newTotals = { ...totals };

    for (const die in newDice) {
      newDice[die] = Math.floor(Math.random() * 6) + 1;
    }

    newTotals.common = [newDice["common1"] + newDice["common2"]];
    newTotals.red = [newDice["common1"] + newDice["red"], newDice["common2"] + newDice["red"]];
    newTotals.yellow = [newDice["common1"] + newDice["yellow"], newDice["common2"] + newDice["yellow"]];
    newTotals.green = [newDice["common1"] + newDice["green"], newDice["common2"] + newDice["green"]];
    newTotals.blue = [newDice["common1"] + newDice["blue"], newDice["common2"] + newDice["blue"]];

    setDice(newDice);
    setTotals(newTotals);
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>QWIXX</h1>
      </div>

      <DiceDisplay dice={dice} totals={totals} rollDice={rollDice} />

      <GameCard totals={totals}/>

    </>

  );
}

export default App;
