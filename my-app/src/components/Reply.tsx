import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reply: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/darling');
  };

  return (
    <div>
      <h1> We at /reply it's final but we click anyway, would be best to click it and send something </h1>
      <button onClick={handleClick}> CLICK ME </button>
    </div>
  )
}

export default Reply;