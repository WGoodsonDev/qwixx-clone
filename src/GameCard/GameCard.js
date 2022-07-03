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
    board: {
        margin: "auto"
    }
})


function GameCard(props) {
    const classes = useStyles();

    const { totals } = props;

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
                <Grid container item xs={12}>
                    <Paper className={classes.board}>
                        <NumberButtonRow farthestRightNum={boardState.red} 
                                        color={"red"} 
                                        selectButton={selectNumberButton}
                                        totals={totals}
                        />
                        <NumberButtonRow farthestRightNum={boardState.yellow} 
                                        color={"yellow"} 
                                        selectButton={selectNumberButton}
                                        totals={totals}
                        />
                        <NumberButtonRow farthestRightNum={boardState.green} 
                                        color={"green"} 
                                        selectButton={selectNumberButton}
                                        totals={totals}
                        />
                        <NumberButtonRow farthestRightNum={boardState.blue} 
                                        color={"blue"} 
                                        selectButton={selectNumberButton}
                                        totals={totals}
                        />
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