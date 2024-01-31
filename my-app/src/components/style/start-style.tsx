// style/start-style.ts
import styled from 'styled-components';

export const Envelope = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;

export const Card = styled.div`
  width: 600px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(27, 0, 229, 0.512);
  transition: transform 1.5s;
  background: #fbcad6;

  &.flipped {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #fff;
    backface-visibility: hidden;
  }

  .front {
    background: #fbcad6;
    transform: rotateY(0deg);
  }

  .back {
    background: #fbcad6;
    transform: rotateY(180deg);
  }
`;
