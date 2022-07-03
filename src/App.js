import { Box, Button, Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import DiceDisplay from "./DiceDisplay/DiceDisplay";
import GameCard from "./GameCard/GameCard";

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
