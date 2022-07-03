import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { Grid, Paper } from '@material-ui/core';
import NumberButton from './NumberButton';

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
    numberBtn: {

    }
})


function GameCard() {
    const classes = useStyles();

    let btnRow = Array.from({ length: 11 }, (_, i) => i + 2).map((number) => (
        <Grid item xs={1}>
            <NumberButton number={number} cName={classes.numberBtn} />
        </Grid>
    ));

    btnRow.push(
        <Grid item xs={1}>
            <Button className={classes.numberBtn}>Lock</Button>
        </Grid>
    );

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Grid containter>
                    <Paper>
                        <Grid className={classes.redRow} container item xs={12}>
                            {btnRow}
                        </Grid>
                        <Grid className={classes.yellowRow} container item xs={12}>
                            {btnRow}
                        </Grid>
                        <Grid className={classes.greenRow} container item xs={12}>
                            {btnRow}
                        </Grid>
                        <Grid className={classes.blueRow} container item xs={12}>
                            {btnRow}
                        </Grid>
                    </Paper>
                </Grid>
            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    )
}

export default GameCard;