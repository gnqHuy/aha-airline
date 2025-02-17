import React, { useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./NewsSection.css";

import image1 from '../../assets-test/Images/coupon1.jpeg';
import image2 from '../../assets-test/Images/cities/seoul.jpg';
import image3 from '../../assets-test/Images/cities/tokyo.jpg';
import { useFlightContext } from '../../context/FlightContext/FlightContext';

const Example = () => {
    
    const slides = [
        { image: image1, link: "/explore/offer" },
        { image: image2, link: "/explore/destination/seoul" },
        { image: image3, link: "/explore/destination/tokyo" },

        // {imgLink: url1, header: h1, content: c1}
    ];

    const { newsList, setIndex} = useFlightContext();
    

    useEffect(() => {
    }, [newsList]);

    useEffect(() => {
    }, [])

    return (
        <Slide>
            {newsList.map((slide, index) => (
                <div className="slide" key={index}>
                    <a href={slide.link} className="block h-full w-full">
                        <div
                            style={{
                                backgroundImage: `url(${slide.imgLink})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "500px",
                            }}
                            className="slide-image"
                            onClick={() => {
                                setIndex(index);
                                localStorage.setItem('news-index', index.toString());
                            }}
                        />
                    </a>
                </div>
            ))}
        </Slide>
    );
};

export default Example;
