import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import Main from "../../components/Main/Main";
// import ThemeToggle from "../../DarkMode/ThemeToggle";

const DashBoard = () => {
  return (
    <div className="main3 grid grid-cols-5  w-full
    ">
      <div className="sidebar col-span-1 bg-slate-500">
        <SideBar />
      </div>
      <div className="main col-span-4 bg-slate-200 dark:bg-darklight w-full ">
        <div className="topbar h-14 flex items-center bg-white">
          <TopBar />
        </div>
        <div className="mainpart mt-5   rounded-x space-y-4  w-full">
          {/* <ThemeToggle />/ */}
          <Main />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
