import React from 'react';
import dashboard from "../../assets/images/dashboard.png";
import calendar from "../../assets/images/calendar.png";
import chat from "../../assets/images/messenger.png";
import finance from "../../assets/images/finance.png";
import document from "../../assets/images/documents.png";
import events from "../../assets/images/events.png";
import academic from "../../assets/images/academics.png";
import staff from "../../assets/images/staff.png";
import setting from "../../assets/images/setting.png";
import person from "../../assets/images/person.png";
import logout from "../../assets/images/logout.png";
import "./SideBar.css"

const SideBar = () => {
  return (
    <div className='mainSidebar' style={{ backgroundColor: "#2B59FF" }}>
      <div className="main2 grid h-screen border-r-2 p-2">
        <div className="logo row-span-1 text-white flex justify-center">
          <h3 className='p-0 text-xs font-semibold'>LOGO</h3>
        </div>
        <div className="menus  grid p-2 row-span-4 w-40">
          {/* Dashboard */}
          <div className="menu flex rounded-lg cursor-pointer hover:bg-blue-700 h-7 items-center gap-2 px-2">
            <img src={dashboard} alt="" className='h-4' />
            <p className='p-0 font-poppins  text-white text-xs'>Dashboard</p>
          </div>
          {/* Calendar */}
          <div className="menu flex rounded-lg cursor-pointer hover:bg-blue-700 h-7 items-center gap-2 w-36  px-2">
            <img src={calendar} alt="" className='h-4' />
            <p className='p-0 font-poppins text-white  text-xs'>Calendar</p>
          </div>
          {/* Chat */}
          <div className="menu flex rounded-lg cursor-pointer hover:bg-blue-700 h-7 items-center gap-2 w-36 px-2">
            <img src={chat} alt="" className='h-4 min-w-5' />
            <p className='p-0  text-white font-poppins text-xs'>Chat</p>
          </div>
          {/* Finance */}
          <div className="menu flex rounded-lg cursor-pointer hover:bg-blue-700 h-7 items-center gap-2 w-36 px-2">
            <img src={finance} alt="" className='h-4 min-w-5' />
            <p className='p-0 font-poppins text-white text-xs'>Finance</p>
          </div>
          {/* Documents */}
          <div className="menu flex rounded-lg cursor-pointer hover:bg-blue-700 h-7 items-center gap-2 w-36 px-2 ">
            <img src={document} alt="" className='h-4 min-w-5' />
            <p className='p-0 font-poppins text-white  text-xs'>Documents</p>
          </div>
          {/* Events */}
          <div className="menu flex rounded-lg cursor-pointer hover:bg-blue-700 h-7 items-center gap-2 w-36 px-2 ">
            <img src={events} alt="" className='h-4 min-w-5' />
            <p className='p-0 font-poppins text-white  text-xs'>Events</p>
          </div>
          {/* Academic */}
          <div className="menu flex rounded-lg cursor-pointer hover:bg-blue-700 h-7 items-center gap-2 w-36 px-2">
            <img src={academic} alt="" className='h-4 min-w-5' />
            <p className='p-0 font-poppins text-white  text-xs'>Academic</p>
          </div>
          {/* Staff */}
          <div className="menu flex rounded-lg cursor-pointer hover:bg-blue-700 h-7 items-center gap-2 w-36 px-2">
            <img src={staff} alt="" className='h-4 min-w-5' />
            <p className='p-0 font-poppins text-white  text-xs'>Staff</p>
          </div>
          {/* Settings */}
          <div className="menu flex rounded-lg cursor-pointer hover:bg-blue-700 h-7 items-center gap-2 w-36 px-2">
            <img src={setting} alt="" className='h-4 min-w-5' />
            <p className='p-0 font-poppins text-white  text-xs'>Settings</p>
          </div>
        </div>

        <div className="logout flex w-40 justify-between">
          
          <div className="log ">
            {/* Accounts */}
            <div className="menu flex rounded-lg cursor-pointer hover:bg-blue-700 h-7 items-center gap-2 w-24 px-2">
              <img src={person} alt="" className='h-3 min-w-5' />
              <p className='p-0  text-white text-xs'>Accounts</p>
            </div>
            {/* Logout */}
            <div className="menu flex rounded-lg cursor-pointer hover:bg-blue-700 h-5 items-center gap-2 w-24 px-2">
              <img src={logout} alt="" className='h-3' />
              <p className='text-white text-xs'>Logout</p>
            </div>
          </div>
          <div className="log2 cursor-pointer h-12 flex items-end">
            <img src={logout} alt="" className='h-4 min-w-4' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
