import React from 'react';
/* eslint-disable */
import emailjs from 'emailjs-com';

const Mailer = () => { 
    
function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_tq3nvhq','template_tm8bs7o',e.target,'user_jcFLONDPDalYkM7Y4ETEW')
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    });
}
return (
    <div className="post">
    <h1>Contact Form</h1>
    <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" required/>
        <label>Phone</label>
        <input type="text" name="phone" required/>
        <label>Email</label>
        <input type="email" name="sender_email" required/>
        <label>Message</label>
        <input type="text" name="msg" />
        <div className="send-button">
        <input type="submit" value="Send" />
        </div>
    </form>
</div>
    );
}
/* eslint-enable */
export default Mailer;
