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
`;

export const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #f60606;
  backface-visibility: hidden;
  background: #fbcad6;
  transform: rotateY(0deg);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Back = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #f60606;
  backface-visibility: hidden;
  background: #fbcad6;
  transform: rotateY(180deg);
  box-shadow: 0 8px 20px rgba(27, 0, 229, 0.512);
`;

export const EnvImg = styled.img`
  position: absolute;
`;

export const StampImg = styled.img`
  position: absolute;
  top: 0;
  width: 80px;
  height: 80px;
  margin: 20px 20px 0 0;
`;

export const To = styled.h1`
  margin: 40px 85px 0 0;
  font-family: Limelight;
  font-size: 60px;
`;


