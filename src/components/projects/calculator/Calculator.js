import React, { useState, useEffect } from 'react';
import '../../styles/Calculator.css';

let setRandomizeButtons = true
export const Calculator = function () {
    // const [randomizeButtons, setRandommizeButtons] = useState(true)


    const [calculatorDisplay, setCalculatorDisplay] = useState({x:0, y:0});

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

    // const imgButtonGenerator = (props) => {
    //     return require('../img/' + props + '.jpg').default;
    // }

    const buttonTrigger = (event) => {
        const buttonAlt = event.target.alt;

        const additionalState = (vx=0, vy=0) => {
            return { x:  vx , y:  vy }
        }
        console.log(additionalState());
        
        setCalculatorDisplay(additionalState(buttonAlt));

        if (buttonAlt === 'c') {
            setCalculatorDisplay(
                {x:0, y:0}
            )

        }



        




        console.log(event.target.alt)
    }

    const buttonValues = [7, 8, 9, 'plus', 4, 5, 6, 'minus', 1, 2, 3, 'x', 'c', 0, 'equals', 'divide'];
    const calculatorConstructor2 = () => {
        return buttonValues.map(x => {
            return (<div className="cal-btn" key={x}
                style={{ animationDuration: randomizedNumberPlusS() }}>
                <img alt={x} onClick={ (e)=> buttonTrigger(e) } src={require(`../../../img/cb_${x}.jpg`).default } />
            </div>)
            }
        )
    }






    const calculatorConstructor = (<div className="calculator-container">
        <div className="calculator">
            <div className="calc-body">
                <input id="display" type="text" name="display"
                    value={calculatorDisplay.x} readOnly={true} />
                <>{calculatorConstructor2()}</>
            </div>
        </div>
    </div>)

    return calculatorConstructor;

}