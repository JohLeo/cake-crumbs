
import styled, { keyframes } from 'styled-components';

export const BackEnvelope = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;

export const Card = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(27, 0, 229, 0.512);
`;

export const BgEnvImg = styled.img`
  position: absolute;
  margin-top: 8px;
`;

const bigHeart = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`;

export const Heart = styled.img`
  position: absolute;
  top: 290px;
  margin: 25px;

  &:hover {
    animation: ${bigHeart} 1s ease infinite; /* Apply the scale animation */
  }

`;