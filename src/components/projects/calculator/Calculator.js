import React from 'react';
import '../../styles/_calculator.scss';

export const Calculator = function () {
    console.log(Math.floor(Math.random()).toString)
    const buttonValues = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, 'x', 'C', 0, '=', '/'];
    const calculatorConstructor2 = () => {
        return buttonValues.map(x => {
            if (x === '+' || x === '-' || x === 'x' || x === '=' || x === '/') {
                return <button className="cal-btn math-btn">{x}</button>
            } else if (x === 'C'){
                return <button className="cal-btn clear-btn">{x}</button>;
            } else {
                return <button className="cal-btn" style={{ animationDuration: `Math.floor((Math.random()*10)).toString`}} >{x}</button>
            }
        })
    }

    const calculatorConstructor = (<div className="calculator-container">

        <div className="calculator">
            <div className="calc-body">
                <form name="calc-form">
                    <input id="display" type="text" name="display" placeholder="0" readonly/>
                    <>{calculatorConstructor2()}</>
                </form>
            </div>
        </div>
    </div>)

    return calculatorConstructor;

}