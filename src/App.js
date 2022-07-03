import { Box, Button, Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import DiceDisplay from "./DiceDisplay/DiceDisplay";
import DieDisplay from "./DiceDisplay/DieDisplay";
import GameCard from "./GameCard";
import TotalsDisplay from "./DiceDisplay/TotalsDisplay";

function App() {

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>QWIXX</h1>
      </div>
      
      <DiceDisplay/>
      
      <GameCard/>

    </>

  );
}

export default App;
