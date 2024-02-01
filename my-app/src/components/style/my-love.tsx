
import styled from 'styled-components';

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


export const Heart = styled.div`
  position: absolute;
  top: 320px;
  width: 50px;
  height: 50px;
  background-color: red;
  transform: rotate(-45deg);
  margin: 25px;
  box-shadow: 0 5px 10px rgba(95, 2, 47, 0.512);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.3) rotate(-45deg);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50%;
  }

  &::before {
    top: -30px;
    left: 0;
  }

  &::after {
    top: 0;
    left: 30px;
  }
`;