import React from "react";
import styled, { keyframes, css } from "styled-components";
import Phone from "../../assets/img/phone.png";
import SlideImage from "../../assets/img/slideImage.jpeg";

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;
const Container = styled.div`
  width: calc((100% / 3) - 2%);
  height: 100%;
  z-index: 0;
  position: relative;
`;

const appear = keyframes`
  from {
    opacity:0;
    margin-bottom:-100px;
  }
  to {
    opacity:1;
    margin:0;
  }
`;

const hide = keyframes`
  from {
   
    opacity:1;
  }
  to {
    opacity:0;
  }
`;

const Text = styled.p`
  font-size: 50px;
  animation: ${(props) =>
    props.startNextAnimation
      ? css`
          ${appear} 1s forwards
        `
      : props.startPrevAnimation
      ? css`
          ${hide} 1s forwards
        `
      : css``};
  animation-delay: ${(props) => (props.startNextAnimation ? css`2s` : css`0s`)};

  opacity: 0;
`;

const BigText = styled(Text)`
  font-size: 80px;
  font-weight: 700;
  opacity: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
  display: none;
  opacity: 0;
  animation: ${(props) =>
    props.startNextAnimation
      ? css`
          ${appear} 1s forwards
        `
      : props.startPrevAnimation
      ? css`
          ${hide} 1s forwards
        `
      : css``};
`;

const appearOver = keyframes`
  from {
    opacity:0;
    bottom:-100px;
  }
  to {
    opacity:1;
    bottom:0
  }
`;

const hideOver = keyframes`
  from {
   
    opacity:1;
  }
  to {
    opacity:0;
  }
`;

const ImageOver = styled.img`
  width: 60%;
  height: 50%;
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0;
  animation: ${(props) =>
    props.startNextAnimation
      ? css`
          ${appearOver} 1s forwards
        `
      : props.startPrevAnimation
      ? css`
          ${hideOver} 1s forwards
        `
      : css``};
  animation-delay: ${(props) => (props.startNextAnimation ? css`1s` : css`0s`)};
`;

const SliderItem = ({ startNextAnimation, startPrevAnimation }) => {
  return (
    <ItemWrapper>
      <Container>
        <BigText
          startNextAnimation={startNextAnimation}
          startPrevAnimation={startPrevAnimation}
        >
          I Am a Big Big Big Big Big Text
        </BigText>
      </Container>
      <Container>
        <Image
          startNextAnimation={startNextAnimation}
          startPrevAnimation={startPrevAnimation}
          src={SlideImage}
        />
        <ItemWrapper>
          <ImageOver
            startPrevAnimation={startPrevAnimation}
            startNextAnimation={startNextAnimation}
            src={Phone}
          />
        </ItemWrapper>
      </Container>

      <Container>
        <Text
          startNextAnimation={startNextAnimation}
          startPrevAnimation={startPrevAnimation}
        >
          I Am a Normal Text
        </Text>
      </Container>
    </ItemWrapper>
  );
};

export default SliderItem;
