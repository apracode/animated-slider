import React from "react";
import styled, { keyframes, css } from "styled-components";
import Phone from "../../assets/img/phone.png";
import SlideImage from "../../assets/img/slideImage.jpeg";

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Container = styled.div`
  width: calc((100% / 3) - 2%);
  position: relative;
`;

const appear = keyframes`
  from {
    opacity:0;
    transform: translateY(25%)
  }
  to {
    opacity:1;
    transform: translateY(0%)
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

const animated = css`
  animation: ${(props) =>
    props.startAnimation
      ? css`
          ${appear} 1s forwards
        `
      : css`
          ${hide} 1s forwards
        `};
`;

const Text = styled.p`
  font-size: 50px;
  opacity: 0;
  ${animated}
  animation-delay: ${(props) => (props.startAnimation ? css`2s` : "")};
`;

const BigText = styled(Text)`
  font-size: 80px;
  font-weight: 700;
  opacity: 0;
`;

const Image = styled.img`
  width: 100%;
  display: none;
  opacity: 0;
  ${animated}
`;

const ImageOver = styled.img`
  width: 60%;
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0;
  ${animated}
  animation-delay: ${(props) => (props.startAnimation ? css`1s` : "")};
`;

const SliderItem = ({ startAnimation }) => {
  return (
    <ItemWrapper>
      <Container>
        <BigText startAnimation={startAnimation}>
          I Am a Big Big Big Big Big Text
        </BigText>
      </Container>
      <Container>
        <Image startAnimation={startAnimation} src={SlideImage} />
        <ItemWrapper>
          <ImageOver startAnimation={startAnimation} src={Phone} />
        </ItemWrapper>
      </Container>
      <Container>
        <Text startAnimation={startAnimation}>I Am a Normal Text</Text>
      </Container>
    </ItemWrapper>
  );
};

export default SliderItem;
