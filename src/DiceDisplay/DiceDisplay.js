import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    Grid,
    Button,
    Card
} from "@material-ui/core";
import DieDisplay from "./DieDisplay";
import TotalsDisplay from "./TotalsDisplay";


const useStyles = makeStyles({
    root: {
        padding: 20,
    },
    main: {
        margin: "auto"
    }
})



const DiceDisplay = (props) => {

    const classes = useStyles();

    const { dice, totals, rollDice } = props;


    return (
        <>
            <Card className={classes.root} variant="outlined">
                <Grid className={classes.main} container xs={6}>
                    <h2>Dice</h2>
                    <Grid container spacing={3}>
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
                        <Grid item xs={2}>
                            <Button variant="contained" onClick={rollDice} >Roll Dice</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>

        </>
    );
}

export default DiceDisplay;