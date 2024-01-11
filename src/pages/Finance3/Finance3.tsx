
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import FinanceCo from "../../components/Finance3/Finance3";


const Finance3 = () => {
  return (
    <div className="main grid grid-cols-5">
      <div className="sidebar col-span-1">
        <SideBar />
      </div>
      <div className="main col-span-4 bg-slate-100">
        <div className="topbar h-16 bg-white flex items-center ">
          <TopBar />
        </div>
        <div className="mainpart flex justify-center items-center mt-5  rounded-2xl">
      <FinanceCo />
        </div>
      </div>
    </div>
  );
};

export default Finance3;
