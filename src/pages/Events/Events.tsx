import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import Main2 from "../../components/Main2/Main2";

const Events = () => {
  return (
    <div className="main grid grid-cols-5">
      <div className="sidebar col-span-1">
        <SideBar />
      </div>
      <div className="main col-span-4 bg-slate-200 dark:bg-darklight">
        <div className="topbar h-14 bg-white flex items-center">
          <TopBar />
        </div>
        <div className="mainpart max-h-full bg-slate-200">
          <Main2 />
        </div>
      </div>
    </div>
  );
};

export default Events;
