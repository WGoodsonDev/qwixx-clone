import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button, Grid } from "@material-ui/core";


const useStyles = makeStyles({
    btn: {
        paddingLeft: 4,
        paddingRight: 4,
        width: "auto"
    }
});

function NumberButton(props) {
    const classes = useStyles();

    const { number, color, disabled, activate, isValidChoice } = props;

    return (
        <Grid item xs={1}>
            <Button className={classes.btn} 
                    size="medium"
                    variant="outlined" 
                    onClick={isValidChoice ? () => activate(color, number) : null} 
                    disabled={disabled}
                    color={isValidChoice ? "primary" : "default"}
            >
                {number}
            </Button>
        </Grid>
    )
}

export default NumberButton;