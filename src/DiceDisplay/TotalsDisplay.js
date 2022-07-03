import React from "react";
import { makeStyles } from "@material-ui/core";
import {
    Grid,
    Paper
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 100
    },
})


const TotalsDisplay = (props) => {

    const classes = useStyles();

    return (
        <>
            {props.children}
            <Grid item xs={12}>
                <Paper elevation={1}>
                    {props.totals[0]}
                </Paper>
            </Grid>
            <Grid item xs={12}>
                {props.totals.length > 1 &&
                    <Paper elevation={1}>
                        {props.totals[1]}
                    </Paper>
                }
            </Grid>
        </>
    );
}

export default TotalsDisplay;