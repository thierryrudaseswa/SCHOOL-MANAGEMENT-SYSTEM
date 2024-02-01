import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const Button = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button:any) => {
    setActiveButton(button);
  };

  return (
    <div className=' gap-0 w-72 flex h-14 p-2 m-2 space-x-1 rounded-lg' style={{ backgroundColor: "#EEEEEE" }}>
      <div
        className={`flex flex-1 items-center justify-center font-bold cursor-pointer rounded-lg shadow-cyan-500/50 ${
          activeButton === 'signUp' ? 'bg-white' : ''
        }`}
        onClick={() => handleButtonClick('signUp')}
      >
        <Link to="/register">Sign Up</Link>
      </div>
      <div
        className={`flex flex-1 items-center justify-center cursor-pointer rounded-lg font-bold shadow-cyan-500/50 ${
          activeButton === 'login' ? 'bg-white' : ''
        }`}
        onClick={() => handleButtonClick('login')}
      >
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Button;
