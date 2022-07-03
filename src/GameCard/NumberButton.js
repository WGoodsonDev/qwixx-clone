import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button, Grid } from "@material-ui/core";


const useStyles = makeStyles({
    btn: {
        paddingLeft: 4,
        paddingRight: 4,
        minWidth: 50,
        width: "auto"
    }
});

function NumberButton(props) {
    const classes = useStyles();

    const { number, color, disabled, activate } = props;

    return (
        <Grid item xs={1}>
            <Button className={classes.btn} variant="outlined" onClick={() => activate(color, number)} disabled={disabled}>{number}</Button>
        </Grid>
    )
}

export default NumberButton;