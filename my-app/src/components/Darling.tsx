import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LetContainer, Letter } from '../components/style/darling-style';

const Darling: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reply');
  };

  return (
    <LetContainer>

      <Letter>
        <h1> we at /reply, click to move to reply </h1>
        <button onClick={handleClick}> CLICK ME </button>
      </Letter>

    </LetContainer>
  )
}

export default Darling;