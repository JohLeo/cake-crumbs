import React from 'react';
// import { useNavigate } from 'react-router-dom';
import envelope from '../assets/envelope.png';
import { BackEnvelope, Card, BgEnvImg, HeartBeat } from './style/my-love';


const MyLove: React.FC = () => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/darling');
  // };

  return (
    <BackEnvelope>
      <Card>
        <BgEnvImg src={envelope} alt="A letter" />
        <HeartBeat />
      </Card>
    </BackEnvelope>
  )
}

export default MyLove;
/* <button onClick={handleClick}> CLICK ME </button> */
