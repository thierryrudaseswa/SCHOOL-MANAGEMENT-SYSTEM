import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <div className=" h-24 grid grid-cols-12">
      <div className="col-span-3 flex items-center justify-center">
        <h1 className="text-lg font-bold h-12 text-white w-32 flex items-center justify-center ">LOGO</h1>
      </div>


      <div className="col-span-9 bg flex items-center justify-end pr-4">
  <nav className="navbar h-12 grid items-center gap-2 grid-cols-6" style={{width:"800px"}}>
    <Link to="/" className="link  h-9 flex items-center justify-center font-bold text-white col-span-1">About</Link>
    <Link to="/about" className="link h-9 flex items-center justify-center font-bold text-white col-span-1">Contact</Link>
    <Link to="/contact" className="link h-9  flex items-center justify-center font-bold text-white col-span-1">Testimonies</Link>
    <Link to="/contact" className="link h-9 flex items-center justify-center font-bold text-white col-span-1">FAQ</Link>
    <Link to="/contact" className="link h-9 flex items-center justify-center font-bold text-white col-span-1 ">Sign In</Link>
    <Link to="/contact" className="link      h-9 flex items-center justify-center rounded-full font-bold text-white col-span-1" style={{ background: "#EE780B" }}>Register</Link>
  </nav>
</div>
    </div>
  );
};

export default NavBar;
