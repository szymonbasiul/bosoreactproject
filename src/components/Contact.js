import React from 'react';
import './Contact.css';

const Contact = function(){
const testTrigger = (event) => {
    console.log(event.target.value)

    if(event.target.value){
        console.log(true);
    }else{console.log(false)}
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
            <input className="input-box" readOnly={true} type="text" name="email" placeholder="John@Doe.Hoe" />
            <textarea maxLength="150"  rows="3" readOnly={true}  id="comment-field" type="text" name="message" placeholder="Write to us..." />
        </div>
        <div id="responsive-container">
            <div id="responisive-textField">
                lalalala bamba
            </div>
            <div id="button-field">

            </div>
        </div>
    </div>    
</div>
)
return contactForm;
}




export default Contact;