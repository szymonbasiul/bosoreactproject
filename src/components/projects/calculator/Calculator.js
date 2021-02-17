import React, { useState, useEffect } from 'react';
import '../../styles/_calculator.scss';
let setRandomizeButtons = true
export const Calculator = function () {
    // const [randomizeButtons, setRandommizeButtons] = useState(true)

    const randomizedNumberPlusS = () => {
        if (setRandomizeButtons) {
            return Math.floor(Math.random() * 10).toString() + "s";
        }
    }
    const buttonClick = () => {
        setRandomizeButtons = false
        console.log('warzywa')
    }
    // useEffect(() => {
    //     setRandommizeButtons(false)
    // }, [])
    const buttonValues = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, 'x', 'C', 0, '=', '/'];
    const calculatorConstructor2 = () => {
        return buttonValues.map(x => {
            if (x === '+' || x === '-' || x === 'x' || x === '=' || x === '/') {
                return <button className="cal-btn math-btn" key={x}
                    style={{ animationDuration: randomizedNumberPlusS() }}
                    onClick={() => buttonClick()}>{x}</button>
            } else if (x === 'C') {
                return <button className="cal-btn clear-btn" key={x}
                    style={{ animationDuration: randomizedNumberPlusS() }} >{x}</button>;
            } else {
                return <button className="cal-btn" key={x}
                    style={{ animationDuration: randomizedNumberPlusS() }} >{x}</button>
            }
        })
    }

    const calculatorConstructor = (<div className="calculator-container">
        <div className="calculator">
            <div className="calc-body">
                <input id="display" type="text" name="display" placeholder="0" readOnly={true} />
                <>{calculatorConstructor2()}</>
            </div>
        </div>
    </div>)

    return calculatorConstructor;

}