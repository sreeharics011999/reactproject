import {BrowserRouter as Router,NavLink} from "react-router-dom"
import "./carosel.css"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

let Carosel=()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
      };
      const images = [
        process.env.PUBLIC_URL +  '/images/carosel1.jpg',
        process.env.PUBLIC_URL +  '/images/carosel2.jpg',
        process.env.PUBLIC_URL +  '/images/carosel3.jpg',
        process.env.PUBLIC_URL +  '/images/carosel4.jpg',
        process.env.PUBLIC_URL +  '/images/carosel5.jpg',
        process.env.PUBLIC_URL +  '/images/carosel1.jpg',
        process.env.PUBLIC_URL +  '/images/carosel6.jpg',
        process.env.PUBLIC_URL +  '/images/carosel7.jpg',
        process.env.PUBLIC_URL +  '/images/carosel8.jpg',
        process.env.PUBLIC_URL +  '/images/carosel9.jpg',
        process.env.PUBLIC_URL +  '/images/carosel10.jpg',
        process.env.PUBLIC_URL +  '/images/carosel11.jpg',
        process.env.PUBLIC_URL +  '/images/carosel12.jpg',
        process.env.PUBLIC_URL +  '/images/carosel13.jpg'
      ];
    //   { image: 'image3.jpg', link: 'https://www.example.com/page3' },
    // <a href={imageData.link} target="_blank" rel="noopener noreferrer">
    //         <img
    //           src={getPublicImageUrl(imageData.image)}
    //           alt={`Slide ${index + 1}`}
    //         />
    //       </a>
      return (
        <Slider className="caroselbg" {...settings}>
          {images.map((image, index) => (
            <div className=" caroselimg" key={index}>
              <NavLink><img className="img" src={image} alt={`Slide ${index + 1}`} /></NavLink>
            </div>
          ))}
        </Slider>
      );
    };
export default Carosel