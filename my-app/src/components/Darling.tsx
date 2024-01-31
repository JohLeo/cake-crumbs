import React from 'react';
import { useNavigate } from 'react-router-dom';

const Darling: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reply');
  };

  return (
    <div>
      <h1> we at /reply, click to move to reply </h1>
      <button onClick={handleClick}> CLICK ME </button>
    </div>
  )
}

export default Darling;