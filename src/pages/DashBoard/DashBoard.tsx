import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import Main from "../../components/Main/Main";
import ThemeToggle from "../../DarkMode/ThemeToggle";

const DashBoard = () => {
  return (
    <div className="main grid grid-cols-5 h-screen">
      <div className="sidebar col-span-1 bg-slate-200">
        <SideBar />
      </div>
      <div className="main col-span-4  bg-slate-200">
        <div className="topbar h-14  flex items-center bg-white">
          <TopBar />
        </div>
        <div className="mainpart max-h-full mt-5 ml-5 rounded-xl ">
          {/* <ThemeToggle /> */}
          <Main />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
