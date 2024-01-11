import React from 'react';
import pers from "../../assets/images/thierry (3).jpg";
import ss from "../../assets/images/ss.jpg"
import pat from "../../assets/images/pat.png"
import gin from "../../assets/images/fi.png"
import { Carousel as AntCarousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '400px',
  backgroundColor:"#000",
  color: '#EE780B',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  lineHeight: '200px',
  textAlign: 'center',
  background: '#EE780B',
};

const Carousel = () => {
  return (
    <div className='' style={{background:"#2B59FF"}}>
      <div className="h-32 grid justify-center font-bold text-white">
        <h1 className='flex items-center justify-center font-extrabold text-3xl'>Testimonies</h1>
        <p>Read testimonies from customers we have worked with</p>
      </div>
      <div className="flex justify-center">
      <AntCarousel autoplay className='' style={{width:"600px",height:"430px"}}>
      <div className=" bg-white rounded-3xl p-5 h-96" style={contentStyle}>
          <div className="grid justify-center">
            <div className="flex justify-center">
              <img src={gin} alt="" className='h-24 w-24 rounded-full ' style={{ border: '12px solid #2B59FF' }} />
            </div>
            <h1 className='text-xl font-bold'>Rutindakanga</h1>
            <h1 className='text-sm font-semibold flex justify-center'>Director</h1>
          </div>
          <div>
            School management application, often referred to as a School Management System (SMS) or Student Information System (SIS), is a software platform designed to streamline and automate various administrative and academic tasks within an educational institution, such as schools, colleges, and universities. These applications provide a comprehensive solution to manage and organize various aspects of school operations, including student data, teacher information, academic records, and more.
          </div>
        </div>
        <div className=" bg-white rounded-3xl p-5 h-96" style={contentStyle}>
          <div className="grid justify-center">
            <div className="flex justify-center">
              <img src={ss} alt="" className='h-24 w-24 rounded-full ' style={{ border: '12px solid #2B59FF' }} />
            </div>
            <h1 className='text-xl font-bold'>Rutindakanga</h1>
            <h1 className='text-sm font-semibold flex justify-center'>Director</h1>
          </div>
          <div>
            School management application, often referred to as a School Management System (SMS) or Student Information System (SIS), is a software platform designed to streamline and automate various administrative and academic tasks within an educational institution, such as schools, colleges, and universities. These applications provide a comprehensive solution to manage and organize various aspects of school operations, including student data, teacher information, academic records, and more.
          </div>
        </div>
        <div className="bg-white rounded-3xl p-5 h-96" style={contentStyle}>
          <div className="grid justify-center">
            <div className="flex justify-center">
              <img src={pat} alt="" className='h-24 w-24 rounded-full ' style={{ border: '12px solid #2B59FF' }} />
            </div>
            <h1 className='text-xl font-bold'>Rutindakanga</h1>
            <h1 className='text-sm font-semibold flex justify-center'>Director</h1>
          </div>
          <div>
            School management application, often referred to as a School Management System (SMS) or Student Information System (SIS), is a software platform designed to streamline and automate various administrative and academic tasks within an educational institution, such as schools, colleges, and universities. These applications provide a comprehensive solution to manage and organize various aspects of school operations, including student data, teacher information, academic records, and more.
          </div>
        </div>
        <div className=" bg-white rounded-3xl p-5 h-96" style={contentStyle}>
          <div className="grid justify-center">
            <div className="flex justify-center">
              <img src={pers} alt="" className='h-24 w-24 rounded-full ' style={{ border: '12px solid #2B59FF' }} />
            </div>
            <h1 className='text-xl font-bold'>Rutindakanga</h1>
            <h1 className='text-sm font-semibold flex justify-center'>Director</h1>
          </div>
          <div>
            School management application, often referred to as a School Management System (SMS) or Student Information System (SIS), is a software platform designed to streamline and automate various administrative and academic tasks within an educational institution, such as schools, colleges, and universities. These applications provide a comprehensive solution to manage and organize various aspects of school operations, including student data, teacher information, academic records, and more.
          </div>
        </div> 
       
   
  </AntCarousel>
      </div>
    
    </div>
  );
};

export default Carousel;
