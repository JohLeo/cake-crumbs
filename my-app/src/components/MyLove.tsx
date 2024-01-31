import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyLove: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/darling');
  };

  return (
    <div>
      <h1> We at /mylove press to move to /darling </h1>
      <button onClick={handleClick}> CLICK ME </button>
    </div>
  )
}

export default MyLove;