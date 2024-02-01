import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import heart from '../../assets/heart.svg';

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
  background: #fbcad6;
  box-shadow: 0 8px 20px rgba(27, 0, 229, 0.512);
`;

export const BgEnvImg = styled.img`
  position: absolute;
  margin-top:1px;
`;

const bigHeart = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
`;

export const Heart = styled.img <{ pulsate: boolean }>`
  position: absolute;
  top: 290px;
  margin: 25px;
  animation: ${({ pulsate }) => (pulsate ? css`${bigHeart} 1s ease` : 'none')};

  &:hover {
    animation: ${bigHeart} 1s ease infinite;
  }
`;

export const HeartBeat = () => {
  const [pulsate, setPulsate] = useState(true);

  useEffect(() => {
    setPulsate(true);
  }, []);

  return <Heart src={heart} alt="The key" pulsate={pulsate} />;
};
