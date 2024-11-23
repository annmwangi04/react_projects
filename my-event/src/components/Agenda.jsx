import React from 'react';
import './Agenda.css';

const sessions = [
    {
        id: 1,
        name: 'Opening Keynote',
        time: '09:00 - 10:00 AM',
        location: 'Main Hall',
        description: 'Join us for the opening keynote to kick off the event.',
        speaker: 'John Doe',
        topic: 'Welcome'
    },
    {
        id: 2,
        name: 'Building Scalable Applications',
        time: '10:15 - 11:15 AM',
        location: 'Room A',
        description: 'Learn how to build scalable applications using modern technologies.',
        speaker: 'Jane Smith',
        topic: 'Technology'
    },
    {
        id: 3,
        name: 'Marketing Strategies for 2025',
        time: '11:30 AM - 12:30 PM',
        location: 'Room B',
        description: 'Discover innovative marketing strategies for the upcoming year.',
        speaker: 'Alice Johnson',
        topic: 'Marketing'
    },
    // Add more sessions as needed
];

const Agenda = () => {
    return (
        <section className='agenda'>
            <h2>Event Agenda</h2>
            <div className='sessions'>
                {sessions.map(session => (
                    <div key={session.id} className='session'>
                        <h3>{session.name}</h3>
                        <p><strong>Time:</strong> {session.time}</p>
                        <p><strong>Location:</strong> {session.location}</p>
                        <p><strong>Description:</strong> {session.description}</p>
                        <p><strong>Speaker:</strong> {session.speaker}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Agenda;
