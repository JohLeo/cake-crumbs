import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LetContainer, Letter, LetTitle, LetP, Buttons, ButtOne, ButtTwo, YesButton } from '../components/style/darling-style';
import NoButton from './Button';

const Darling: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reply');
  };

  const handleNoClick = () => {
    alert('Well ok, have a nice day then!');
    window.close();
  };

  return (
    <LetContainer>

      <Letter>
        <LetTitle> My dear,</LetTitle>
        <LetP>
          You are all the good things!
          <br />
          <br />
          Would you like to go on a  <br />
          date with me on the 14th  <br />
          of February?

        </LetP>
        <Buttons>
          <ButtOne>
            <YesButton onClick={handleClick}> YES </YesButton>
          </ButtOne>

          <ButtTwo>
            <NoButton onClick={handleNoClick} closeWindow={true}> NO </NoButton>
          </ButtTwo>
        </Buttons>

      </Letter>

    </LetContainer>
  )
}

export default Darling;