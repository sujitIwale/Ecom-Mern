import React from 'react';
import './ImageSlider.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    'https://rukminim1.flixcart.com/flap/844/140/image/ec2ec766d8363efb.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/844/140/image/ec2ec766d8363efb.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/844/140/image/ec2ec766d8363efb.jpg?q=50'
];

const ImageSwiper = () => {
    return (
        <div>
            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>

                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
 
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>

                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default ImageSwiper;
