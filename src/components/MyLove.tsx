import React from 'react';
import envelope from '../assets/envelope.png';
import { BackEnvelope, Card, BgEnvImg, HeartBeat } from './style/my-love';


const MyLove: React.FC = () => {

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

