import React from 'react';
// import { useNavigate } from 'react-router-dom';
import backenvelope from '../assets/bg-envelope.png';
import heart from '../assets/heart.png'
import { BackEnvelope, Card, BgEnvImg, Heart } from './style/my-love';


const MyLove: React.FC = () => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/darling');
  // };

  return (
    <BackEnvelope>
      <Card>
        <BgEnvImg src={backenvelope} alt="A letter" />
        <Heart src={heart} alt="heart" />
      </Card>
    </BackEnvelope>
  )
}

export default MyLove;
/* <button onClick={handleClick}> CLICK ME </button> */
