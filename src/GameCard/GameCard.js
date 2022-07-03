import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { Grid, Paper } from '@material-ui/core';
import NumberButton from './NumberButton';
import NumberButtonRow from './NumberButtonRow';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        padding: 20
    },
})


function GameCard() {
    const classes = useStyles();

    const [boardState, setBoardState] = useState({
        red: [],
        yellow: [],
        green: [],
        blue: []
    });

    const resetBoard = () => {
        setBoardState({
            red: [],
            yellow: [],
            green: [],
            blue: []
        });
    };

    const selectNumberButton = (row, number) => {

    };

    let btnRow = Array.from({ length: 11 }, (_, i) => i + 2).map((number) => (
        <NumberButton key={number} number={number} cName={classes.numberBtn} />
    ));

    btnRow.push(
        <NumberButton key={13} number={"LOCK"} disabled={true} cName={classes.numberBtn} />
    );

    return (

        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Grid>
                    <Paper>
                        <NumberButtonRow highestNum={0} color={"red"}/>
                        <NumberButtonRow highestNum={0} color={"yellow"}/>
                        <NumberButtonRow highestNum={0} color={"green"}/>
                        <NumberButtonRow highestNum={0} color={"blue"}/>
                    </Paper>
                </Grid>
                <Button onClick={resetBoard}>RESET BOARD</Button>
            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    )
}

export default GameCard;