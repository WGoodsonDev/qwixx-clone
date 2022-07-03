import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button, Grid } from "@material-ui/core";
import NumberButton from "./NumberButton";

const useStyles = makeStyles({
    red: {
        backgroundColor: "rgba(255,0,0,0.8)",
    },
    yellow: {
        backgroundColor: "rgba(255,255,0,0.8)",
    },
    green: {
        backgroundColor: "rgba(0,255,0,0.8)",
    },
    blue: {
        backgroundColor: "rgba(0,0,255,0.8)",
    },
})


function NumberButtonRow(props) {
    const classes = useStyles();

    const { color } = props;

    let btnRow = Array.from({ length: 11 }, (_, i) => i + 2).map((number) => (
        <NumberButton key={number} number={number}  />
    ));

    btnRow.push(
        <NumberButton key={13} number={"LOCK"} disabled={true}  />
    );

    return (
        <Grid className={classes[color]} container item xs={12}>
            {btnRow}
        </Grid>
    )
}

export default NumberButtonRow;