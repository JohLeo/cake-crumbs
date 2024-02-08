import React from 'react';
import FormToLove from './Form';
import { FormContainer, FormLetter } from './style/reply-style';

const Reply: React.FC = () => {

  return (
    <FormContainer>
      <FormLetter>
        <FormToLove />
      </FormLetter>
    </FormContainer>
  )
}

export default Reply;