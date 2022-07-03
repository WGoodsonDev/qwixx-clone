import React from "react";
import {
    Grid,
    Paper
} from "@material-ui/core";

const TotalsDisplay = (props) => {


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