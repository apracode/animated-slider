import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import SliderItem from "../../components/SliderItem/SliderItem";

const Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: pink;
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
  const array = [1, 2, 3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: () => {
      setStartNextAnimation(false);
    },
    afterChange: () => {
      setStartNextAnimation(true);
    },
  };

  return (
    <>
      <Wrapper>
        <SliderWrapper {...settings}>
          {array.map((index) => {
            return (
              <div key={index}>
                <SliderItem
                  startNextAnimation={startNextAnimation}
                />
              </div>
            );
          })}
        </SliderWrapper>
      </Wrapper>
    </>
  );
};

export default SliderScreen;
