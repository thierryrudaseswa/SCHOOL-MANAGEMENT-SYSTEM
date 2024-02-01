import call from "../../assets/images/call.png"
import ig from "../../assets/images/ig.png";
import link from "../../assets/images/link.png"
import x from "../../assets/images/x.png"
import c from "../../assets/images/c.png";
import loc from "../../assets/images/loc.png"
import face from "../../assets/images/face.png"
import "./Footer.css"
import React from 'react'

const Footer = () => {
  return (
    <div className='  p-8' style={{background:"#2B59FF"}}>
      <div className=" p-4">
        <div className="mainFooter grid grid-cols-6 pb-8 border-b-4" style={{ borderBottom: "8px solid #EE780B" }}>
            <div className="lef col-span-3">
                <h1 className=' font-extrabold text-white h-12'>Logo</h1>
                <p className='txt text-white h-24 text-lg'>Easily Manage your school anywhere anytime as fast as possible with  our system
                </p>
                <p className='txt text-white h-24  text-lg mb-5'>Unlock the true value of education without breaking the bank. Our cost-effective school management system is an investment in your school's success.</p>
                <div className="lnk flex  justify-around text-white font-extrabold  items-center h-32">
                    <h1>About</h1>
                    <h1>Contact</h1>
                    <h1>Testimonies</h1>
                    <h1>FAQS</h1>
                    <h1>Contact</h1>

                </div>
            </div>
            <div className="righ col-span-3 grid p-2 justify-center">
                <div className="grid  h-64  ">
                <div className=" flex gap-4 items-center cursor-pointer">
                    <img src={loc} alt="" />
                    <h1 className=" font-bold text-white">Kigali , Rwanda</h1>
                </div>
                <div className=" flex gap-4 items-center cursor-pointer">
                    <img src={call} alt="" />
                    <h1 className=" font-bold text-white" >+ 250 781215273</h1>
                </div>
                <div className="  grid grid-cols-8  items-center gap-2  justify-between">
                    <img src={link} alt="" className="img cursor-pointer col-span-2" />
                    <img src={x} alt="" className="img cursor-pointer col-span-2"  />
                    <img src={ig} alt="" className="img cursor-pointer col-span-2"  />
                    <img src={face} alt="" className=" cursor-pointer col-span-2"  />
                   
                </div>
                </div>
            </div>

        </div>
        <div className="  h-24 flex items-end justify-between text-white">
            <div className=" flex  items-center font-extrabold gap-5 ">
                <img src={c} alt="" />
                <p>2024  by SMS</p>
            </div>
            <div className=" flex gap-2 font-bold">
                <p>Private Policy</p>
                <p>Terms of Service </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
