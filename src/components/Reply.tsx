import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormToLove from './Form';
import { FormContainer, FormLetter } from './style/reply-style';

const Reply: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/darling');
  };

  return (
    <FormContainer>
      <FormLetter>
        <FormToLove />
        <button onClick={handleClick}> CLICK ME </button>
      </FormLetter>
    </FormContainer>
  )
}

export default Reply;