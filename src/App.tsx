import React, {useEffect, useState} from 'react';
import './App.css';
import {css, cx} from "emotion";
import {questions} from "./Questions";

const App: React.FC = () => {

    let [selectedIndex, setIndex] = useState(0);
    let [wimlts, setWimlts] = useState([] as string[]);
    let [counterIndex, setCounterIndex] = useState(0);

    useEffect(() => {
        setWimlts(shuffle(questions));
    }, []);

    function getNext(): void {
        setIndex(++selectedIndex);
        setTimeout(function(){
            setCounterIndex(++counterIndex)
        }, animationTime);

        if (selectedIndex === wimlts.length) {
            setIndex(0);
            setCounterIndex(0)
        }
    }

    function shuffle(array: string[]) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        array.push("You have reached the end :)");
        return array;
    }

    return (
        <header
            className="App-header"
            style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gridTemplateRows: "3em auto",
                justifyItems: "center"
            }}
            onClick={() => getNext()}
        >
            <div className="App" style={{position: "relative", width: "100vw"}}>
                {wimlts.map((text, index) => (
                    <>
                        <div
                            key={text}
                            className={cx(
                                textStyle,
                                index === selectedIndex && selectedTextStyle
                            )}
                        >
                            {text}
                        </div>
                        <div
                            className={cx(
                                counterStyle,
                                index === selectedIndex && selectedTextStyle
                            )}>
                            {counterIndex + 1}/{wimlts.length}
                        </div>
                     </>
                ))}
            </div>
        </header>
    );
};

const animationTime = 200;

const selectedTextStyle = css({
    transition: `opacity ${animationTime}ms ease ${animationTime}ms`,
    opacity: 1
});

const textStyle = css({
    transition: `opacity ${animationTime}ms ease`,
    opacity: 0,
    position: "absolute",
    left: 0,
    top: 360,
    bottom: 0,
    right: 0
});

const counterStyle = css({
    transition: `opacity ${animationTime}ms ease`,
    opacity: 0,
    position: "absolute",
    left: 0,
    top: 400,
    bottom: 0,
    right: 0
});

export default App;
