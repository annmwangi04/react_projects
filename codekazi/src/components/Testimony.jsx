import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Testimony.css';

function Testimony() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-4" style={{fontFamily: 'sans-serif', fontSize: '16px', color: 'rgb(234 179 8)'}}>Testimonials</h2>
      <h3 className="text-xl text-gray-700 mb-8" style={{fontSize: '36px', fontFamily: 'sans-serif'}}>What Our Customers Say</h3>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
      >
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-gray-600">Choosing CodeKazi was the best decision we made for our business. Their intuitive software streamlined our operations, saving us time and money. The seamless integration process and top-notch customer service exceeded our expectations!</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-gray-600">We've been using CodeKazi's products for years now, and we couldn't be happier. Their software is robust, reliable, and continually updated with new features. The team behind it is responsive and truly cares about their customers' success.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-gray-600">As a small business owner, finding affordable yet powerful software was crucial. CodeKazi not only met but exceeded our needs. Their user-friendly interface and customizable options have transformed the way we operate. Thank you for such an incredible product!</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Testimony;