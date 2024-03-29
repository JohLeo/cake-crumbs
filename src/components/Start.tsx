
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Envelope, Card, Front, Back, StampImg, To, EnvImg, Heart } from './style/start-style';
import stamp from '../assets/stamp.svg';
import envelope from '../assets/envelope.png';
import heart from '../assets/heart.png'

const Start: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();

  const handleFlip = () => {
    setFlipped(true);
    setTimeout(() => {
      navigate('/mylove');
    }, 1000);
  };

  return (
    <Envelope>
      <Card className={flipped ? 'flipped' : ''} onClick={handleFlip}>
        <Front>
          <StampImg src={stamp} alt="Stamp" />
          <To>My Love</To>
        </Front>

        <Back>
          <EnvImg src={envelope} alt="A letter" />
          <Heart src={heart} alt="heart" />
        </Back>
      </Card>
    </Envelope>
  );
};

export default Start;
