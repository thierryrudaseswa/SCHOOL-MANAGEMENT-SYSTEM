import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import Chatc from "../../components/ChatC/Chatc";
import React from  'react'

const Chat = () => {
  return (
    <>
      <div className="main grid grid-cols-5 bg-orange-900  max-w-full">
        <div className="sidebar col-span-1">
          <SideBar />
        </div>
        <div className="main col-span-4 w-full  dark:bg-darklight">
          <div className="topbar h-14  flex items-center ">
            <TopBar />
          </div>
          <div className="mainpart  flex justify-center items-center dark:bg-black mt-5 ml-5 x`rounded-2xl" style={{height:"820px"}}>
            <Chatc />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
