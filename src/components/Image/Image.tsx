import React from 'react'
import schoosign from "../../assets/images/schoolSign.svg";

const Image = () => {
  return (
    <div className="p-10 rounded-r-xl">
          <div className=" h-24 text-xl font-bold text-white">
            LOGO
          </div>
        <div className="h-32 flex justify-center items-center">
            <p className='h-24 text-2xl font-extrabold w-4/5 flex justify-center items-center tracking-wider max-laptop:text-xl max-tablet2:text-sm max-tablet2:font-bold' style={{color:'#FFFFFF'}}>Easily Manage Your School Everywhere anywhere anytime</p>
        </div>
        <div className="image h-72 flex justify-center items-center">
        <img src={schoosign} alt="My SVG Image" />
        </div>
      
    </div>
  )
}

export default Image
