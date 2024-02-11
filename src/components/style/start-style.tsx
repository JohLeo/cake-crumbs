
import styled from 'styled-components';

export const Envelope = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 17vh;
  
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

  @media (max-width: 602px) {
    &::after {
      content: "Sorry, you'll need a bigger screen to use this. If you're on a phone, you could try tilting it ;)";
      position: absolute;
      width: 280px;
    margin: 10vh auto;

      background-color: white;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      border-style: solid;
      border-width: 10px 10px 0;
      border-color: white transparent transparent;
    }
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
  box-shadow: 0 8px 20px #1b00e582;
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
  text-decoration: underline dotted pink 4px;
`;


export const Heart = styled.img`
  position: absolute;
  top: 160px;
  margin: 28px;
  filter: blur(0.3px);
  
`;

