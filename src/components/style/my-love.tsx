import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import heart from '../../assets/heart.png';
import PasswordInput from '../PassInput';

export const BackEnvelope = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 17vh;
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
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
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
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

interface HeartProps {
  pulsate: boolean;
}

// eslint-disable-next-line
export const Heart = styled(({ pulsate, ...props }: HeartProps & React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />) <HeartProps>`
  position: absolute;
  margin: 25px;
  padding-top: 70px;
  cursor: pointer;
  animation: ${({ pulsate }) => (pulsate ? css`${startHeart} 0.8s ease` : 'none')};
  filter: blur(0.2px);

  &:hover {
    animation: ${pulsHeart} 1s ease infinite;
  }
`;

export const HeartBeat: React.FC = () => {
  const [pulsate, setPulsate] = useState(true);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowPasswordInput(true);
  };

  const handlePasswordSubmit = (password: string) => {
    const correctPassword = process.env.REACT_APP_SECRET_PASSWORD;

    if (password === correctPassword) {
      navigate('/darling');
    } else if (incorrectAttempts + 1 >= 5) {
      alert('Odd... I belive mylove should know this password!');
    } else if (incorrectAttempts + 1 >= 3) {
      alert('Are you not the one, to whom did I send this?');
      setIncorrectAttempts((prevAttempts) => prevAttempts + 1);
    } else {
      alert('Oh no, incorrect password. Please try again.');
      setIncorrectAttempts((prevAttempts) => prevAttempts + 1);
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