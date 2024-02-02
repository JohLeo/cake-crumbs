import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LetContainer, Letter, YesButton } from '../components/style/darling-style';
import NoButton from './Button';

const Darling: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reply');
  };

  return (
    <LetContainer>

      <Letter>
        <h1> we at /reply, click to move to reply </h1>
        <YesButton onClick={handleClick}> CLICK ME </YesButton>
        <NoButton onClick={handleClick}> NO </NoButton>
      </Letter>

    </LetContainer>
  )
}

export default Darling;