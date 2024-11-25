import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        ticketType: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAttendee = {
            ...formData,
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        };
        // Simulate form submission and payment processing
        processPayment(newAttendee);
        // Simulate sending a confirmation email
        sendConfirmationEmail(newAttendee);
        setFormData({ name: '', email: '', ticketType: '' });
        alert(`Thank you for registering, ${formData.name}! A confirmation email has been sent to ${formData.email}.`);
    };

    const processPayment = (attendee) => {
        console.log('Processing payment for:', attendee);
        // Simulate payment processing logic here
        return true; // Assume payment is successful
    };

    const sendConfirmationEmail = (attendee) => {
        console.log('Sending confirmation email to:', attendee.email);
        // Simulate sending email logic here
        console.log(`Dear ${attendee.name},\n\nThank you for registering!\nYour ticket type: ${attendee.ticketType || 'Standard'}\n\nBest regards,\nEvent Team`);
    };

    return (
        <section id='registration' className='registration'>
            <h2>Join Now</h2>
            <form className='registration-form' onSubmit={handleSubmit}>
                <div className='input-box'>
                    <label>Full Name</label>
                    <input type='text' name='name' value={formData.name} onChange={handleChange} className='field' placeholder='Enter your name' required />
                </div>
                <div className='input-box'>
                    <label>Email Address</label>
                    <input type='email' name='email' value={formData.email} onChange={handleChange} className='field' placeholder='Enter your email' required />
                </div>
                <div className='input-box'>
                    <label>Ticket Type (optional)</label>
                    <select name='ticketType' value={formData.ticketType} onChange={handleChange} className='field'>
                        <option value=''>Select a ticket type</option>
                        <option value='standard'>Standard</option>
                        <option value='vip'>VIP</option>
                    </select>
                </div>
                <button type='submit' className='submit-button'>Register</button>
            </form>
        </section>
    );
};

export default Registration;
