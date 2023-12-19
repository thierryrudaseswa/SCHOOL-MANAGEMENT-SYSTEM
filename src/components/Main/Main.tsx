
import "./Main.css";
import message from "../../assets/images/messenger.png";
import MaterialChart from "../graphs/Graph";
import ChartComponent from "../graphs/Smgraph";

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
    <div className='lefrightp-0 grid grid-cols-6 max-tablet2:block'>


      <div className="left col-span-4 grid grid-rows-5 ">


        <div className="top flex  gap-8 p-2">
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
            <ChartComponent />
           
            </div>
          </div>
         </div>
          <div className="box h-44 mt-1 w-48 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
          </div>
          <div className="box h-44 mt-1 w-48 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 ">
          </div>
        </div>
        <div className="middlemain row-span-1 grid grid-cols-6 bg-white">
          <div className="middlelef  col col-span-4  grid grid-rows-6">
            <div className="head row-span-1 flex items-center pl-5">
              <h1 className=" text-sm font-bold">Recent Activity</h1>
              </div>
            <div className="text row-span-4  grid pl-2 gap-1">
              <div className="one h-7 grid grid-cols-6">
              <p className=" col-span-1 flex justify-center">thie</p>
              <p className=" col-span-4 text-xs flex items-center  font-semibold bg-white">Thierry is now a new comer on this day</p>
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
              <p className=" col-span-4 text-xs flex items-center  font-semibold bg-white">Thierry is now a new comer on this day</p>
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
      <div className="right col-span-2 p-3 bg-black">thierry</div>
    </div>
  );
};

export default Main;
