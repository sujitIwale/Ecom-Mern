import React from 'react';
import './ImageSlider.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    'https://react-slideshow.herokuapp.com/assets/images/slide_7.jpg',
    'https://react-slideshow.herokuapp.com/assets/images/slide_7.jpg',
    'https://react-slideshow.herokuapp.com/assets/images/slide_7.jpg'
];

const ImageSwiper = () => {
    return (
        <div>
            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                        <span>Slide 1</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                        <span>Slide 2</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                        <span>Slide 3</span>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default ImageSwiper;
