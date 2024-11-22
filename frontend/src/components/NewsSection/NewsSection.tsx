import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./NewsSection.css";

import image1 from '../../assets-test/demo.png';
import image2 from '../../assets-test/seoul.jpg';
import image3 from '../../assets-test/tokyo.jpg';

const Example = () => {
    const images = [image1, image2, image3];

    return (
        <Slide>
            {images.map((image, index) => (
                <div className="slide" key={index}>
                    <div style={{ backgroundImage: `url(${image})` }} />
                </div>
            ))}
        </Slide>
    );
};

export default Example;
