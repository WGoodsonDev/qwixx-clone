import { Box, Button, Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import DieDisplay from "./DieDisplay";
import TotalsDisplay from "./TotalsDisplay";

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
      <h2>Dice</h2>
      <Grid container spacing={4}>


        <Grid item xs={2}>
          <DieDisplay number={dice.common1} >Common 1</DieDisplay>
        </Grid>
        <Grid item xs={2}>
          <DieDisplay number={dice.common2} >Common 2</DieDisplay>
        </Grid>
        <Grid item xs={2}>
          <DieDisplay number={dice.red} >Red</DieDisplay>
        </Grid>
        <Grid item xs={2}>
          <DieDisplay number={dice.yellow} >Yellow</DieDisplay>
        </Grid>
        <Grid item xs={2}>
          <DieDisplay number={dice.green} >Green</DieDisplay>
        </Grid>
        <Grid item xs={2}>
          <DieDisplay number={dice.blue} >Blue</DieDisplay>
        </Grid>






      </Grid>

      <h2>Totals</h2>
      <Grid container spacing={4}>
        <Grid item xs={2}>
          <TotalsDisplay totals={totals.common} >Common</TotalsDisplay>
        </Grid>
        <Grid item xs={2}>
          <TotalsDisplay totals={totals.red} >Red</TotalsDisplay>
        </Grid>
        <Grid item xs={2}>
          <TotalsDisplay totals={totals.yellow} >Yellow</TotalsDisplay>
        </Grid>
        <Grid item xs={2}>
          <TotalsDisplay totals={totals.green} >Green</TotalsDisplay>
        </Grid>
        <Grid item xs={2}>
          <TotalsDisplay totals={totals.blue} >Blue</TotalsDisplay>
        </Grid>
      </Grid>

      <Button variant="contained" onClick={rollDice} >Roll Dice</Button>



    </>

  );
}

export default App;
