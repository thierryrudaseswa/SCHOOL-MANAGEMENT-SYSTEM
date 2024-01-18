import React from 'react'
import ppl from "../../assets/images/pp.png"
import ppls from"../../assets/images/ppls.png"
import degree from "../../assets/images/degree.png"
import connect from "../../assets/images/connect.png"
import dollar from "../../assets/images/dollar.png"
import house from "../../assets/images/house.png"
import "./About.css"
const About = () => {
  return (
    <div>
      <div className="head h-24 flex justify-center items-center font-bold text-2xl">About</div>
      <div className="mainAbout grid grid-cols-7 gap-10">
        <div className="About2 col-span-3" style={{height:"600px"}}></div>
        <div className="mainPart col-span-4 pr-20 font-semibold gap-2 mb-2">
            <div className="text  p-20">SMS is a digital platform that helps educational institutions efficiently manage student data, academic records, attendance, communication, and administrative tasks. It streamlines operations, enhances communication between teachers, parents, and students, and provides easy access to essential information for improved educational management</div>
               
            <div className="box p-20 mt-10 flex flex-wrap gap-20">
                <div className=" w-28 grid grid-flow-row items-center justify-center bg-white">
                  <div className="  flex justify-center">  <img src={dollar} alt="" className=' h-16 ' /></div>
                    <p className=' flex justify-center'>Financial</p>
                    <p>management</p>
                </div>
                <div className=" w-28 grid grid-flow-row items-center justify-center bg-white">
                  <div className="  flex justify-center">  <img src={degree} alt="" className=' h-16 ' /></div>
                    <p className=' flex justify-center'>academic</p>
                    <p>management</p>
                </div>
                <div className=" w-28 grid grid-flow-row items-center justify-center bg-white">
                  <div className="  flex justify-center">  <img src={ppl} alt="" className=' h-16 ' /></div>
                    <p className=' flex justify-center'>staff</p>
                    <p>management</p>
                </div>
                <div className=" w-28 grid grid-flow-row items-center justify-center bg-white">
                  <div className="  flex justify-center">  <img src={connect} alt="" className=' h-16 ' /></div>
                    <p className=' flex justify-center'>student</p>
                    <p>performance</p>
                </div>
                <div className=" w-28 grid grid-flow-row items-center justify-center bg-white">
                  <div className="  flex justify-center">  <img src={house} alt="" className=' h-16 ' /></div>
                    <p className=' flex justify-center'>school</p>
                    <p>100+</p>
                </div>
                <div className=" w-28 grid grid-flow-row items-center justify-center bg-white">
                  <div className="  flex justify-center">  <img src={ppls} alt="" className=' h-16 ' /></div>
                    <p className=' flex justify-center'>Users</p>
                    <p>10</p>
                </div>
                
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
