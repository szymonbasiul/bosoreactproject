import React from 'react';
import './Contact.css';
import { useState } from 'react';

const Contact = function () {

    const tempContent = {

        name: '',
        email: '',
        text: ''

    }


    const contactToServer = (userData) => {
        // const data = { username: "example" };

fetch('http://localhost:8000', {
  method: 'POST', // or 'PUT'
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userData),
})
.then(response => response.text())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});


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


        return (event.target.value) ? {
            return (event.target.name === 'email') ? {
            setLockTextField(false);
            setFieldValue((prevfieldValue) => {
                prevfieldValue.email = event.target.value;
                return prevfieldValue;
            })
        } : (event.target.name === 'name') ? {
            setLockEmailField(false);
            setFieldValue((prevfieldValue) => {
                prevfieldValue.name = event.target.value;
                return prevfieldValue;
            })
        } : (event.target.name === 'message') ? {
            setFieldValue((prevfieldValue) => {
                prevfieldValue.text = event.target.value;
                return prevfieldValue;
            })
        }


    } : (!event.target.value) ? {
            return (event.target.name === 'name') ? {
                setLockEmailField(true)
            } : (event.target.name === 'email') ? {
                setLockTextField(true)
            }
        }
    }

    const contactForm = (

        <div className="contact-page">
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
                </div>
            </div>
            <div id="button-container">
                <div id="button-field" onClick={() => { contactToServer(fieldValue) }}>
                        Button Fajny

                </div>
            </div>
        </div>
    )
    return contactForm;
}




export default Contact;