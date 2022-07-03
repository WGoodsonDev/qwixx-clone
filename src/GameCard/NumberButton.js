import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button, Grid } from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        padding: 20
    },
    redRow: {
        backgroundColor: "rgba(255,0,0,0.8)",
    },
    yellowRow: {
        backgroundColor: "rgba(255,255,0,0.8)",
    },
    greenRow: {
        backgroundColor: "rgba(0,255,0,0.8)",
    },
    blueRow: {
        backgroundColor: "rgba(0,0,255,0.8)",
    },
});

function NumberButton(props) {
    const classes = useStyles();

    const { number, color, disabled, activate } = props;

    return (
        <Grid item xs={1}>
            <Button onClick={() => activate(color, number)} disabled={disabled}>{number}</Button>
        </Grid>
    )
}

export default NumberButton;