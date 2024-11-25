import React from 'react';
import './Speakers.css';

function Speakers() {
const speakers = [
    {
        id: 1,
        name: 'Steve Harvey',
        photo: '/images/download.jpg',
        bio: 'Failure is a great teacher, and I think when you make mistakes and you recover from them and you treat them as valuable learning experiences, then you have something to share.',
        twitter: 'https://twitter.com/steveharvey',
        linkedin: 'https://www.linkedin.com/in/steveharvey',
        video: 'https://www.youtube.com/watch?v=GjioyBXSX7Q&pp=ygUgc3RldmUgaGFydmV5IG1vdGl2YXRpb25hbCBzcGVlY2g%3D'
    },
    {
        id: 2,
        name: 'Nelson Mandela',
        photo: '/images/images (1).jpg',
        bio: 'Education is the most powerful weapon which you can use to change the world.That is if the tools to educate are in the right place, at the right time and available for the student to learn and grow.',
        twitter: 'https://twitter.com/nelsonmandela',
        linkedin: 'https://www.linkedin.com/in/nelsonmnandela',
        video: 'https://www.youtube.com/watch?v=qiHtROcjd6M&pp=ygUibmVsc29uIG1hbmRlbGEgbW90aXZhdGlvbmFsIHNwZWVjaA%3D%3D'
    },
    {
        id: 3,
        name: 'Nicholas James Vujicic',
        photo: '/images/images (2).jpg',
        bio: 'I may have absolutely no control over what happens to us, but we can control how we respond. If we choose the right attitude, we can rise above whatever challenges we face. I am gonna try and try again, because the moment I give up, is the moment I fail',
        twitter: 'https://twitter.com/nickvujicic',
        linkedin: 'https://www.linkedin.com/in/nickvujicic',
        video: 'https://www.youtube.com/watch?v=wBCfxhyEDB0&pp=ygUMbmljayB2dWppY2lj'
    },
    {
        id: 4,
        name: 'Oprah Winfrey',
        photo: '/images/images2.jpg',
        bio: 'Create the highest, grandest vision possible for your life because you become what you believe',
        twitter: 'https://twitter.com/oprahwinfrey',
        linkedin: 'https://www.linkedin.com/in/oprahwinfrey',
        video: 'https://www.youtube.com/watch?v=pBIXfK2pDPk&pp=ygUNb3ByYWggd2luZnJleQ%3D%3D'
    }
];

    return (
        <section id='speakers' className='speakers'>
            <h2>Featured Speakers</h2>
            <div className='speakers-list'>
                {speakers.map(speaker => (
                    <div key={speaker.id} className='speaker'>
                        <img src={speaker.photo} alt={speaker.name} className='speaker-photo' />
                        <div className='speaker-info'>
                            <h3>{speaker.name}</h3>
                            <p>{speaker.bio}</p>
                            <div className='social-links'>
                                <a href={speaker.twitter} target='_blank' rel='noopener noreferrer'>Twitter</a>
                                <a href={speaker.linkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                            </div>
                            {speaker.video && (
                                <div className='speaker-video'>
                                    <a href={speaker.video} target='_blank' rel='noopener noreferrer'>Watch Previous Talk</a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Speakers;
