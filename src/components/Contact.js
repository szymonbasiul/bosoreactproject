import React from 'react';
import './Contact.css';
import { useState } from 'react';

const Contact = function () {

    const [unblockEmailField, setUnblockEmailField] = useState(true);
    const [unblockTextField, setUnblockTextField] = useState(true);

    const [beigeText, setBeigeText] =
        useState("Bezowy tekst");

    const testTrigger = (event) => {
        console.log(unblockEmailField)

        if (event.target.value) {
            if (event.target.name == "email") {
                console.log('text field availible')
                setUnblockTextField(false)

            }
            console.log('email availible');
            setUnblockEmailField(false);

        } else { console.log('something else') }
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
                    <input className="input-box" readOnly={unblockEmailField} type="text" name="email" placeholder="John@Doe.Hoe"
                        onChange={testTrigger} />
                    <textarea maxLength="150" rows="3" readOnly={unblockTextField} id="comment-field" type="text" name="message" placeholder="Write to us..." />
                </div>
                <div id="responsive-container">
                    <div id="responisive-textField">
                        {beigeText}
                    </div>
                    <div id="button-field" onClick={() => { setBeigeText("Bezowy owy") }}>
                        Button Fajny

            </div>
                </div>
            </div>
        </div>
    )
    return contactForm;
}




export default Contact;