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
        red: 1,
        yellow: 1,
        green: 13,
        blue: 13
    });

    const resetBoard = () => {
        setBoardState({
            red: 1,
            yellow: 1,
            green: 13,
            blue: 13
        });
    };

    const selectNumberButton = (color, number) => {

        switch(color) {
            case "red":
                setBoardState(boardState => ({
                    ...boardState,
                    red: number === "LOCK" ? 13 : number
                }));
                break;
            case "yellow":
                setBoardState(boardState => ({
                    ...boardState,
                    yellow: number === "LOCK" ? 13 : number
                }));
                break;
            case "green":
                setBoardState(boardState => ({
                    ...boardState,
                    green: number === "LOCK" ? 1 : number
                }));
                break;
            case "blue":
                setBoardState(boardState => ({
                    ...boardState,
                    blue: number === "LOCK" ? 1 : number
                }));
                break;
        }
        
    };


    return (

        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Grid>
                    <Paper>
                        <NumberButtonRow farthestRightNum={boardState.red} color={"red"} selectButton={selectNumberButton}/>
                        <NumberButtonRow farthestRightNum={boardState.yellow} color={"yellow"} selectButton={selectNumberButton}/>
                        <NumberButtonRow farthestRightNum={boardState.green} color={"green"} selectButton={selectNumberButton}/>
                        <NumberButtonRow farthestRightNum={boardState.blue} color={"blue"} selectButton={selectNumberButton}/>
                    </Paper>
                </Grid>
                
            </CardContent>
            <CardActions>
                <Button onClick={resetBoard}>RESET BOARD</Button>
            </CardActions>
        </Card>
    )
}

export default GameCard;