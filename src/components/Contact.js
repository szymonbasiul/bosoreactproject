import React from 'react';
import './Contact.css';
import { useState } from 'react';

const Contact = function () {

    const tempContent = {

        name: '',
        email: '',
        text: ''

    }

    const fieldValueViewer = () => {

        console.log(fieldValue);
    }

    const [lockEmailField, setLockEmailField] = useState(true);
    const [lockTextField, setLockTextField] = useState(true);
    const [fieldValue, setFieldValue] = useState(tempContent);


    const [beigeText, setBeigeText] =
        useState("Bezowy tekst");

    const testTrigger = (event) => {
        console.log(lockEmailField)

        if (event.target.value) {
            switch(event.target.name){
                case 'email':
                    setLockTextField(false);
                    console.log('text field availible')
                    setFieldValue((prevfieldValue)=>{
                    prevfieldValue.email = event.target.value;
                    return prevfieldValue;
                })
                break;
                case 'name':
                    setLockEmailField(false);
                    console.log('you are writing in name field')
                    setFieldValue((prevfieldValue)=>{
                    prevfieldValue.name = event.target.value;
                    return prevfieldValue;
                })
                break;
                case 'message':
                    console.log('you are writing in text field')
                    setFieldValue((prevfieldValue)=>{
                    console.log(prevfieldValue, event.target.value)
                    prevfieldValue.text = event.target.value;
                    return prevfieldValue;
                })
                break;

            }
            console.log(event.target.name)

        } else if (!event.target.value) {
            console.log('cofanko')
            if(event.target.name == 'name') {
                setLockEmailField(true)
            }
         setLockTextField(true)


         }
         console.log(event.target.value)
    }

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
                    <input className="input-box" readOnly={lockEmailField} type="text" name="email" placeholder="John@Doe.Hoe"
                        onChange={testTrigger} />
                    <textarea maxLength="150" rows="3" readOnly={lockTextField} id="comment-field" type="text" name="message" placeholder="Write to us..." onChange={testTrigger}/>
                </div>
                <div id="responsive-container">
                    <div id="responisive-textField">
                        {beigeText}
                    </div>
                    <div id="button-field" onClick={() => { fieldValueViewer() }}>
                        Button Fajny

            </div>
                </div>
            </div>
        </div>
    )
    return contactForm;
}




export default Contact;