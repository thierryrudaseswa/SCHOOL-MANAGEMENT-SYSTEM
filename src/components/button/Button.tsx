import { useState } from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  const [signUpBgColor, setSignUpBgColor] = useState('bg-gray-200');
  const [loginBgColor, setLoginBgColor] = useState('bg-gray-200');

  const handleSignUpClick = () => {
    setSignUpBgColor('bg-white');
    setLoginBgColor('bg-gray-200');
  };

  const handleLoginClick = () => {
    setLoginBgColor('bg-white');
    setSignUpBgColor('bg-gray-200');
  };

  return (
    <div className='w-72 flex h-14 p-2 m-2 space-x-1 rounded-lg bg-gray-200'>
      <button
        className={`signUp flex flex-1 items-center justify-center font-bold cursor-pointer rounded-lg shadow-cyan-500/50  ${signUpBgColor}`}
        onClick={handleSignUpClick}
      >
      
        <Link to="/register">  Sign Up</Link>
      </button>
      <button
        className={`login flex flex-1 items-center justify-center cursor-pointer rounded-lg font-bold shadow-cyan-500/50  ${loginBgColor}`}
        onClick={handleLoginClick}
      >
        <Link to="/login"> Login</Link>
       
      </button>
    </div>
  );
};
export default Button;