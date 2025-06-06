import React, { useState } from 'react';
import ImageComponent from './ImageComponent';
import NextIcon from '../assets/ui_icons/next.svg';
import PrevIcon from '../assets/ui_icons/previous.svg';
import './componentStyles/ImgCarousel.css';

const ImgCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(images);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="img-carousel" data-index={`${currentIndex + 1} / ${images.length}`}>
            <button onClick={prevImage} className='carousel-btns'>
                <img src={PrevIcon} className="carousel-btn" alt='previous'/>
            </button>

            <ImageComponent 
                url={images[currentIndex]} 
                context='carousel' 
                className="carousel-img" 
                alt={`Slide ${currentIndex + 1}`} 
            />

            <button onClick={nextImage} className='carousel-btns'>
                <img src={NextIcon} className="carousel-btn" alt='next'/>
            </button>
        </div>
    );
};

export default ImgCarousel;