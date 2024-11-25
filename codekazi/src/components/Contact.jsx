import React from "react";
import './Contact.css'

const Contact = () =>{
    return(
        <section  id="Contact" className="contact">
            <form>
               <h2>Contact Form</h2>  
               <div className="input-box">
                <label>Full Name</label>
                <input type="text"  className="field"placeholder="Enter your name"required/>
               </div>
               <div className="input-box">
                <label>Email Adress</label>
                <input type="email"  className="field"placeholder="Enter your email"required/>
               </div>
               <div className="input-box">
                <label>Your Message</label>
                <textarea name="" id=""className="field mess"placeholder="Enter your message" required>
                </textarea>
               </div> 
               <button type="Submit">Send Message</button>
            </form>

        </section>
    )
}
export default Contact