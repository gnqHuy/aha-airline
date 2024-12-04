import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./NewsSection.css";

import image1 from '../../assets-test/Images/offer1.png';
import image2 from '../../assets-test/Images/seoul.jpg';
import image3 from '../../assets-test/Images/tokyo.jpg';

const Example = () => {
    const slides = [
        { image: image1, link: "/explore/offer" },
        { image: image2, link: "/explore/destination/seoul" },
        { image: image3, link: "/explore/destination/tokyo" },
    ];

    return (
        <Slide>
            {slides.map((slide, index) => (
                <div className="slide" key={index}>
                    <a href={slide.link} className="block h-full w-full">
                        <div
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "500px",
                            }}
                            className="slide-image"
                        />
                    </a>
                </div>
            ))}
        </Slide>
    );
};

export default Example;
