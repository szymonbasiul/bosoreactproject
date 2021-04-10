import React from 'react';
import "../../styles/SignIn.css";
import { useState,useEffect } from "react";


const SignInForm = ({currentChildHref, parentState}) => {

    useEffect(() => {
        parentState !== (window.location.href).substr(21) &&
    currentChildHref((window.location.href).substr(21));
    },[currentChildHref, parentState])

    const [signInData, setSignInData] = useState({ "name": "", "surname": "", "email": "" });

    const addFormulaToState = (name, surname, email) => {
        const newState = { "name": name, "surname": surname, "email": email }
        setSignInData(newState);
    }

    const sendDataToDB = () => {

        fetch('http://localhost:8000/signin', {
            method: "POST",
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signInData)
        })
            .then(data=>console.log("wysylam data",data))
            .catch(error=>console.log(error))
    }

    const formula = (

        <div id="signContainer">
            <input className="signInName" type="text" placeholder="Name" onChange={(event)=>{addFormulaToState(event.target.value, signInData.surname, signInData.email)}}/>
            <input className="signInSurname" type="text" placeholder="Surname" onChange={(event) => { addFormulaToState(signInData.name, event.target.value, signInData.email) }}/>
            <input className="signInEMail" type="text" placeholder="EMail" onChange={(e) => { addFormulaToState(signInData.name, signInData.surname, e.target.value) }} />
            <button id="Submit" onClick={()=>{sendDataToDB()}} > Save </button>
        </div>

    )
    return formula;
}

export default SignInForm;
