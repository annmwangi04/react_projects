import './About.css';

function About() {
    return (
        <div id='about' className='about'>
            <div className='about-content'>
                <img src='/images/carlos-muza-hpjSkU2UYSU-unsplash_jx4mn8.jpg' alt='About Us' className='about-image' />
                <div className='about-text'>
                    <h1 className='about-title'>About Us</h1>
                    <h2 className='about-subtitle'>Why Work with Us?</h2>
                    <p>
                        Partner with us to unlock the full potential of your digital presence. Our expertise lies in creating seamlessly integrated mobile and web solutions that guarantee a strong return on investment. By leveraging our proven strategies, we drive substantial traffic to your website and mobile applications, amplifying your online presence.
                    </p>
                    <ul className='about-list'>
                        <li>✔ Trustworthy</li>
                        <li>✔ Guaranteed Results</li>
                        <li>✔ Fast and Reliable Services</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;






// function About() {
//     return(
//         <div>
//           <h1>About us</h1>
//           <h2>Why Work with Us?</h2>

// Partner with us to unlock the full potential of your digital presence. Our expertise lies in creating seamlessly integrated mobile and web solutions that guarantee a strong return on investment. By leveraging our proven strategies, we drive substantial traffic to your website and mobile applications, amplifying your online presence.


// ✔
// Trustworthy
// ✔
// Guaranteed Results
// ✔
// Fast and Reliable
// Services
//         </div>
//     )
    
// }
// export default About;