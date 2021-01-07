import React from 'react';
import './Contact.css';

const Contact = function(){

    const contactForm = (
    <div>
        <div id="contact-greeter">
            <p>
                Welcome U! Write to us CzłowieniU!
            </p>
        </div>
        <div id ="contact-container">
            <input type="text" name="name" placeholder="John Doe" />
            <input type="text" name="email" placeholder="John@Doe.Hoe" />
            <input type="text" name="message" placeholder="Write to us..." />
        </div>
    </div>
)
return contactForm;
}




export default Contact;