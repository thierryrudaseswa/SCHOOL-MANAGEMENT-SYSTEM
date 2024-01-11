import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import Chatc from "../../components/ChatC/Chatc";

const Chat = () => {
  return (
    <div className="main grid grid-cols-5">
      <div className="sidebar col-span-1">
        <SideBar />
      </div>
      <div className="main col-span-4 bg-slate-100">
        <div className="topbar h-12 bg-black flex items-center ">
          <TopBar />
        </div>
        <div className="mainpart flex justify-center items-center mt-4 mr-4 ml-5 rounded-2xl">
        <Chatc />
        </div>
      </div>
    </div>
  );
};

export default Chat;
