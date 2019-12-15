import React, {useEffect, useState} from 'react';
import './App.css';
import {css, cx} from "emotion";
import {questions} from "./Questions";

const App: React.FC = () => {

    let [selectedIndex, setIndex] = useState(0);
    let [wimlts, setWimlts] = useState([] as string[]);

    useEffect(() => {
        setWimlts(shuffle(questions));
    }, []);

    function getNext(): void {
        setIndex(++selectedIndex);

        if (selectedIndex === wimlts.length) {
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
                    <div
                        key={text}
                        className={cx(
                            textStyle,
                            index === selectedIndex && selectedTextStyle
                        )}
                    >
                        {text}
                    </div>
                ))}
            </div>
            <div>
                {selectedIndex < wimlts.length && (
                    <div className={counter}>
                        {selectedIndex + 1}/{wimlts.length}
                    </div>
                )}
            </div>
        </header>
    );
};

const selectedTextStyle = css({
    transition: `opacity 200ms ease 200ms`,
    opacity: 1
});

const textStyle = css({
    transition: `opacity 200ms ease`,
    opacity: 0,
    position: "absolute",
    left: 0,
    top: 360,
    bottom: 0,
    right: 0
});

export default App;
