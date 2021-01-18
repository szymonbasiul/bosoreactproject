import React from 'react';
import './Contact.css';
import {useState} from 'react';

const Contact = function(){
    let inputFieldCheck = {

        emailField: false,
        textField: false,

    }
    
    const [unblockField, setUnblockField] = useState(inputFieldCheck);

    const [beigeText, setBeigeText] = 
    useState("Bezowy tekst");

    

const testTrigger = (event) => {
    console.log(unblockField)

    if(event.target.value){
        if(event.target.name == "email"){
            console.log(unblockField)
            inputFieldCheck.textField = true;
            setUnblockField(inputFieldCheck);
        }
        console.log(true);
        inputFieldCheck.emailField = true;
        setUnblockField(inputFieldCheck);
    
    }else{console.log(false)}
}
// let labamba = "Dupajaś";
// const labambaChange = () => {

//     labamba = "Bardzo ladnie";
//     console.log("Funkcja uruchomila sie ;)")
// }
const contactForm = (
    
<div>
        <div id="contact-greeter">
            <p>
                Welcome U! Write to us CzłowieniU!
            </p>
        </div>
    
    <div id="contact-container">
        <div id="inputField-container">
            <input className="input-box" type="text" name="name" placeholder="John Doe"
            onChange={testTrigger} />
            <input className="input-box" readOnly={!unblockField.emailField} type="text" name="email" placeholder="John@Doe.Hoe" 
            onChange={testTrigger} />
            <textarea maxLength="150"  rows="3" readOnly={!unblockField.textField}  id="comment-field" type="text" name="message" placeholder="Write to us..." />
        </div>
        <div id="responsive-container">
            <div id="responisive-textField">
                {beigeText}
            </div>
            <div id="button-field" onClick={()=>{setBeigeText("Bezowy owy")}}>
                Button Fajny

            </div>
        </div>
    </div>    
</div>
)
return contactForm;
}




export default Contact;