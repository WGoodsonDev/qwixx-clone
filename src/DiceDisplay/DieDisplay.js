import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    Paper
} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        minWidth: 0
    },
})


const DieDisplay = (props) => {

    const classes = useStyles();

    return (
        <>
            {props.children}
            <Paper className={classes.root} elevation={1} xs={12}>
                {props.number}
            </Paper>
        </>
    );
}

export default DieDisplay;