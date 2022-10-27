import React, { useRef } from "react";
import Slider from "react-slick";

const Homepage = () => {
  //creating the ref
  const customeSlider = useRef();

  // setting slider configurations
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };

  const previous = () => {
    customeSlider.current.slickNext();
  };

  const next = () => {
    customeSlider.current.slickPrev();
  };

  return (
    <div>
      <button onClick={next}>Next</button>
      <button onClick={previous}>Previous</button>
      <Slider {...settings} ref={customeSlider}>
        <div>One</div>
        <div>Two</div>
        <div>Theree</div>
        <div>Four</div>
        <div>Five</div>
      </Slider>
    </div>
  );
};

export default Homepage;
