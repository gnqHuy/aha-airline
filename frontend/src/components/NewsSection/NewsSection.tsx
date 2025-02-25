import React, { useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./NewsSection.css";

import image1 from "../../assets-test/Images/green2.jpg";
import image2 from "../../assets-test/Images/green4.jpg";
import image3 from "../../assets-test/Images/green3.jpg";

const Example = () => {
  const slides = [
    { image: image1},
    { image: image2},
    { image: image3},
  ];

  return (
    <Slide>
      {slides.map((slide, index) => (
        <div className="slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px",
              }}
              className="slide-image"
              onClick={() => {
                localStorage.setItem("news-index", index.toString());
              }}
            />
        </div>
      ))}
    </Slide>
  );
};

export default Example;
