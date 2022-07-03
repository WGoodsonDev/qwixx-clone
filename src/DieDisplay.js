import React from "react";
import {
    Paper
} from "@material-ui/core";

const DieDisplay = (props) => {


    return (
        <>
            {props.children}
            <Paper elevation={1} xs={12}>
                {props.number}
            </Paper>
        </>
    );
}

export default DieDisplay;