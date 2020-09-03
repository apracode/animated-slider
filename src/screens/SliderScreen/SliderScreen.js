import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import SliderItem from "../../components/SliderItem/SliderItem";

const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
`;

const SliderWrapper = styled(Slider)`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  & .slick-prev,
  .slick-next {
    width: 30px;
    height: 30px;
  }
  & .slick-prev:before,
  .slick-next:before {
    color: black;
    font-size: 30px;
  }
`;

const SliderScreen = () => {
  const array = [1, 2, 3];
  const [startAnimation, setStartAnimation] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    pauseOnHover: false,
    beforeChange: () => {
      setStartAnimation(false);
    },
    afterChange: (current) => {
      setStartAnimation(true);
      setActiveSlide(current);
    },
  };

  return (
    <>
      <Wrapper>
        <SliderWrapper {...settings}>
          {array.map((index) => {
            return (
              <div key={index}>
                {activeSlide + 1 === index && (
                  <SliderItem startAnimation={startAnimation} />
                )}
              </div>
            );
          })}
        </SliderWrapper>
      </Wrapper>
    </>
  );
};

export default SliderScreen;
