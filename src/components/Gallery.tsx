import React, { useState, useEffect } from 'react';
import groupOne from '../assets/GroupOne.jpg';
import groupTwo from '../assets/GroupTwo.jpg';
import groupThree from '../assets/GroupThree.png';
import groupFour from '../assets/GroupFour.jpg';
import groupFive from '../assets/GroupFive.jpg';
import groupSix from '../assets/GroupSix.jpg';
import './Gallery.css';
import { getAllByTestId } from '@testing-library/react';
// import { Link } from 'react-router-dom';
interface Image {
    src: string;
    alt: string;
  }
  
  interface SlideShowProps {
    images: Image[];
  }
  
  const SlideShow: React.FC<SlideShowProps> = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 3000); // Adjust timing between slides
  
      return () => clearInterval(interval);
    }, [images]);
  
    return (
      <section className="mb-5 slideshow-container">
        <div className="container-fluid pt-1 slides">
          {images.map((image, index) => (
            <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <img src={image.src} alt={image.alt} className="slide-image" />
              <div className="slide-title">{image.alt}</div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  const Gallery = () => {
    const images: Image[] = [
      { src: groupOne, alt: 'BFI' },
      { src: groupTwo, alt: 'BFI' },
      { src: groupThree, alt: 'BFI' },
      { src: groupFour, alt: 'BFI' },
      { src: groupFive, alt: 'BFI' },
      { src: groupSix, alt: '' },
   
    ];
  
    return (
      <div className="gallery-container" style={{ paddingTop: '30px' }}>
        <h1 className="heading text-center font-bold text-4xl">
        <span className="font-black-ops-one text-yellow-300">Alliances</span>
  <span style={{color: '#FFFFFF'}}> And </span>
  <span style={{color: '#B40101'}}>Affiliations</span>
        </h1>
        <div style={{ paddingTop: '20px' }}>
          <SlideShow images={images} />
        </div>
      </div>
    );
  };
  export default Gallery;