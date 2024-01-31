
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Envelope, Card } from './style/start-style';

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
        <div className="front">
          <h1>To: My Love</h1>
        </div>
        <div className="back">
          <p>insert backside</p>
        </div>
      </Card>
    </Envelope>
  );
};

export default Start;
