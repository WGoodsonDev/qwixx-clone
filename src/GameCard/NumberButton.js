import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button, Grid } from "@material-ui/core";


function NumberButton(props) {

    const { number, select, cName } = props;

    return (
        <Grid item xs={1}>
            <Button className={cName}>{number}</Button>
        </Grid>
    )
}

export default NumberButton;