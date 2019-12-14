import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "@material-ui/core";
import {css} from "emotion";
import {questions} from "./Questions";

const App: React.FC = () => {

    let [index, setIndex] = useState(0);
    let [buttonLabel, setButtonLabel] = useState('Next');
    let [wimlts, setWimlts] = useState([] as string[]);

    useEffect(() => {
        setWimlts(shuffle(questions));
    }, []);

    function getNext(): void {
        setIndex(++index);
        setButtonLabel('Next');
        if (index === wimlts.length - 1) {
            setButtonLabel('Start over');
        }

        if (index === wimlts.length) {
            setIndex(0)
        }
    }

    const counter = css`
        padding-top: 15px;
        font-size: 20px;
        color: white;
        text-align: center;
    `;

    function shuffle(array: string[]) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    return (
        <header className="App-header">
            <div className="App">
                <p>{wimlts[index]}</p>
            </div>
            <div>
                <Button variant="contained" onClick={() => getNext()} color="primary" size="large">
                    {buttonLabel}
                </Button>
            </div>
            <div className={counter}>
                {index + 1}/{wimlts.length}
            </div>
        </header>
    );
};

export default App;
