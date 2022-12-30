import React from 'react';

const Contact = () => {
return (
<section class="contact-box">
    <h1>Say Hi!</h1>
            <form class="contact-form">

                    <label for="name">Name: </label>
                    <input type="text" id="input-name" placeholder="Your name"/>
                
                    <label for="email">Email: </label>
                    <input type="email" id="input-email" placeholder="email@email.com"/>

                    <label for="message">Message: </label>
                    <textarea type="text"  id="input-message" placeholder="Hi Nassy,"></textarea>
                <button >Submit </button>
                    </form>
    </section>
);
};

export default Contact;
