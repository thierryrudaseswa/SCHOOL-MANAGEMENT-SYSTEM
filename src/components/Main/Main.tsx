
import "./Main.css";
import message from "../../assets/images/messenger.png";
import MaterialChart from "../graphs/Graph";
import SmGraph from "../graphs/Smgraph";
import cal1 from "../../assets/images/cal1.svg"
import cal2 from "../../assets/images/cal2.svg"
import cal3 from "../../assets/images/cal3.svg"
import cal4 from "../../assets/images/cal4.svg"
import cal from "../../assets/images/cal.svg"
import BasicDateCalendar from "../Calendar/Calendar";


const Main= () => {
  const chartData: Array<Array<string | number>> = [
    ['Day', 'income', 'Expenses'],
    ['Monday', 1000, 800],
    ['Tuesday', 1200, 850],
    ['Wednesday', 800, 1000],
    ['Thursday', 1100, 900],
    ['Friday', 950, 1200],
  ];
  return (
    <div className='lefright p-0 grid grid-cols-6 max-tablet2:block'>


      <div className="left col-span-4 grid grid-rows-5 bg-black ">


        <div className="top flex  gap-8 p-2 h-48 ">
          <div className="box h-44 text-white mt-1 w-48 rounded-lg bg-slate-200 bg-gradient-to-r from-cyan-500 to-blue-500" >
          <div className="box2 grid grid-rows-6 p-2">
          <div className="topbox row-span-1 flex justify-between">
            <p className="p-0 text-sm font-bold"> Revenue:</p>
            <img src={message} alt="" className=""/>
          </div>
            <div className="middlebox row-span-1">
              <h1 className="p-0 font-extrabold text-sm text-slate-200">$3000</h1>
            </div>
            <div className="graph row-span-3  h-24 bg-white">
            <SmGraph />
           
            </div>
          </div>
         </div>
          <div className="box h-44 mt-1 w-48 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
          </div>
          <div className="box h-44 mt-1 w-48 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 ">
          </div>
        </div>
        <div className="middlemain row-span-1 grid grid-cols-6 bg-white h-48">
          <div className="middlelef  col col-span-4  grid grid-rows-6">
            <div className="head row-span-1 flex items-center pl-5">
              <h1 className=" text-sm font-bold">Recent Activity</h1>
              </div>
            <div className="text row-span-4  grid pl-2 gap-1">
              <div className="one h-7 grid grid-cols-6">
              <p className=" col-span-1 flex justify-center">thie</p>
              <p className=" col-span-4 text-xs flex items-center  font-semibold ">Thierry is now a new comer on this day</p>
              <p className=" col-span-1 text-xs flex items-center">07 Jan 2005</p>
              </div>
              <div className="one h-7 grid grid-cols-6">
              <p className=" col-span-1 flex justify-center">thie</p>
              <p className=" col-span-4 text-xs flex items-center  font-semibold">Thierry is now a new comer on this day</p>
              <p className=" col-span-1 text-xs flex items-center">07 Jan 2005</p>
              </div>
              <div className="one h-7 grid grid-cols-6">
              <p className=" col-span-1 flex justify-center">thie</p>
              <p className=" col-span-4 text-xs flex items-center  font-semibold">Thierry is now a new comer on this day</p>
              <p className=" col-span-1 text-xs flex items-center ">07 Jan 2005</p>
              </div>
              <div className="one h-7 grid grid-cols-6">
              <p className=" col-span-1 flex justify-center">thie</p>
              <p className=" col-span-4 text-xs flex items-center  font-semibold">Thierry is now a new comer on this day</p>
              <p className=" col-span-1 text-xs flex items-center ">07 Jan 2005</p>
              </div>
            </div>
            <div className="row-span-1  flex justify-end items-center pr-8 text-sm font-bold">
              <p>activity</p>
            </div>
          </div>
          <div className="middleright  col-span-2 p-2">
            <div className="calendar bg-slate-500">

            </div>
          </div>
        </div>
        <div className="bottom row-span-2">
          <div className="botmain">
            <div className="upperword grid grid-cols-6 ">
              <h1 className=" col-span-2 bg-slate-400 pl-5 font-bold flex items-center">Earning</h1>
              <div className="revex col-span-3 bg-white grid grid-cols-2 gap-4">
                <div className="rev flex gap-1 items-center justify-end">
                  <div className=" rounded-full h-2 w-2" style={{backgroundColor:'#2B59FF'}}></div>
                  <h1 className=" font-bold">Revenue</h1>
                </div>

                <div className="exp flex gap-1 items-center justify-start">
                  <div className=" rounded-full h-2 w-2" style={{backgroundColor:'#EE780B'}}></div>
                  <h1 className=" font-bold">Expense</h1>
                </div>
                </div>
              <div className="weekly col-span-1 "></div>

            </div>
            <div className="graph flex h-64 items-center">
            <MaterialChart chartData={chartData} />
            </div>
          </div>
        </div>
      </div>
      <div className="right col-span-2 p-3 grid grid-rows-3  pr-5 ">
      <div className="middlec row-span-1 h-72 rounded-xl bg-white">
        <BasicDateCalendar />
       </div>
       <div className="topc row-span-1 h-60 bg-white rounded-xl grid-rows-6 p-3">
        <div className="tit row-span-1 flex items-center justify-center font-bold h-9">
          UpComing Events
        </div>
        <div className="tab  row-span-4  h-40 gap-5">
          <div className="tab2 flex gap-5 font-bold pl-6 mb-2">
            <div><img src={cal2} alt="" /></div>
            <p>Date</p>
            <p>details</p>
          </div>
          <div className="tab2 flex gap-5  pl-6 text-xs mb-1 hover:bg-slate-300 hover:rounded-xl p-1 cursor-pointer">
            <div><img src={cal1} alt="" /></div>
            <p>3 feb</p>
            <p className=" text-xs">visiting day with parents</p>
          </div>
          <div className="tab2 flex gap-5  pl-6 text-xs mb-1 hover:bg-slate-300 hover:rounded-xl p-1 cursor-pointer">
            <div><img src={cal} alt="" /></div>
            <p>3 feb</p>
            <p className=" text-xs">visiting day with parents</p>
          </div>
          <div className="tab2 flex gap-5  pl-6 bg-white text-xs mb-1 hover:bg-slate-300 hover:rounded-xl p-1 cursor-pointer">
            <div><img src={cal3} alt="" /></div>
            <p>5 feb</p>
            <p className=" text-xs h-3">meeting with the school</p>
          </div>
          <div className="tab2 flex gap-5  pl-6 text-xs mb-1 hover:bg-slate-300 hover:rounded-xl p-1 cursor-pointer">
            <div><img src={cal4} alt="" /></div>
            <p>12 ap</p>
            <p className=" ">Remembering day </p>
          </div>
        </div>
        <div className="all row-span-1 h-7 font-bold flex justify-end">All events</div>
       </div>
       
       <div className="topc row-span-1 h-60 bg-white rounded-xl grid-rows-6 p-3">
        <div className="tit row-span-1  flex items-center justify-center font-bold h-9">
        Previous Events
        </div>
        <div className="tab  row-span-4   h-40 gap-5">
          <div className="tab2 flex gap-5 font-bold pl-6 mb-2">
            <div><img src={cal2} alt="" /></div>
            <p>Date</p>
            <p>details</p>
          </div>
          <div className="tab2 flex gap-5  pl-6 text-xs mb-1 hover:bg-slate-300 hover:rounded-xl p-1 cursor-pointer">
            <div><img src={cal1} alt="" /></div>
            <p>3 feb</p>
            <p className=" text-xs">visiting day with parents</p>
          </div>
          <div className="tab2 flex gap-5  pl-6 text-xs mb-1 hover:bg-slate-300 hover:rounded-xl p-1 cursor-pointer">
            <div><img src={cal} alt="" /></div>
            <p>3 feb</p>
            <p className=" text-xs">visiting day with parents</p>
          </div>
          <div className="tab2 flex gap-5  pl-6 bg-white text-xs mb-1 hover:bg-slate-300 hover:rounded-xl p-1 cursor-pointer">
            <div><img src={cal3} alt="" /></div>
            <p>5 feb</p>
            <p className=" text-xs h-3">meeting with the school</p>
          </div>
          <div className="tab2 flex gap-5  pl-6 text-xs mb-1 hover:bg-slate-300 hover:rounded-xl p-1 cursor-pointer">
            <div><img src={cal4} alt="" /></div>
            <p>12 ap</p>
            <p className=" ">Remembering day </p>
          </div>
        </div>
        <div className="all row-span-1 h-7 font-bold flex justify-end">All events</div>
       </div>

      </div>
    </div>
  );
};

export default Main;
