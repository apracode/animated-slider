import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import SliderItem from "../../components/SliderItem/SliderItem";

const Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
`;

const SliderWrapper = styled(Slider)`
  width: 80%;
  height: 100%;
  z-index: 0;
  position: relative;
  display: flex;
  align-items: center;
  /* & .slick-slide {
    width: 50vw;
  } */
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
  const [startNextAnimation, setStartNextAnimation] = useState(true);
  const [startPrevAnimation, setStartPrevAnimation] = useState(true);

  console.log(startPrevAnimation);

  const array = [1, 2, 3];
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    beforeChange: () => {
      setStartNextAnimation(false);
    },
    afterChange: (current) => {
      setStartNextAnimation(true);
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
                {activeSlide + 1 === index ? (
                  <SliderItem
                    startPrevAnimation={startPrevAnimation}
                    startNextAnimation={startNextAnimation}
                  />
                ) : null}
              </div>
            );
          })}
        </SliderWrapper>
      </Wrapper>
    </>
  );
};

export default SliderScreen;
