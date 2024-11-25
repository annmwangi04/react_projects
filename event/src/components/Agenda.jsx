import React from 'react';
import './Agenda.css';

function Agenda() {
const sessions = [
    {
        id: 1,
        name: 'Orientation',
        time: '09:00 - 10:00 AM',
        location: 'Main Hall',
        description: 'Join us for the opening keynote to kick off the event.',
        speaker: 'Kernly Mwaura',
        topic: 'Welcome'
    },
    {
        id: 2,
        name: 'Power BI & Machine Learning',
        time: '10:15 - 11:15 AM',
        location: 'Room A',
        description: 'Tool for visualizing and sharing data.',
        speaker: 'Amos Kuria',
        topic: 'Technology'
    },
    {
        id: 3,
        name: 'Marketing Strategies for 2025',
        time: '11:30 AM - 12:30 PM',
        location: 'Room B',
        description: 'Discover innovative marketing strategies for the upcoming year.',
        speaker: 'Ann Mwangi',
        topic: 'Marketing'
    },
];


    return (
        <section id='agenda' className='agenda'>
            <div className='agenda-header'>
                <img src='/images/images (2).png' alt='Event Agenda' className='agenda-image' />
                <div className='agenda-content'>
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
                </div>
            </div>
        </section>
    );
}

export default Agenda;

