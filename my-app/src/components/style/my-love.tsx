import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import heart from '../../assets/heart.svg';
import PasswordInput from '../PassInput';

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

const startHeart = keyframes`
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

const pulsHeart = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.6);
  }
  100% {
    transform: scale(1);
  }
`;

interface HeartProps {
  pulsate: boolean;
}

export const Heart = styled(({ pulsate, ...props }: HeartProps & React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />) <HeartProps>`
  position: absolute;
  top: 290px;
  margin: 25px;
  animation: ${({ pulsate }) => (pulsate ? css`${startHeart} 1s ease` : 'none')};

  &:hover {
    animation: ${pulsHeart} 1s ease infinite;
  }
`;

export const HeartBeat: React.FC = () => {
  const [pulsate, setPulsate] = useState(true);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowPasswordInput(true);
  };

  const handlePasswordSubmit = (password: string) => {
    const correctPassword = process.env.REACT_APP_SECRET_PASSWORD;

    if (password === correctPassword) {
      console.log('Password is correct!');
      navigate('/darling');

    } else {
      console.log('Incorrect password!');
      // Handle incorrect password logic
    }

    setShowPasswordInput(true);
  };

  useEffect(() => {
    setPulsate(true);
  }, []);

  return (
    <>
      <Heart
        src={heart}
        alt="The key"
        pulsate={pulsate}
        onClick={handleClick}
      />
      {showPasswordInput && (
        <PasswordInput onSubmit={handlePasswordSubmit} />
      )}
    </>
  );
};