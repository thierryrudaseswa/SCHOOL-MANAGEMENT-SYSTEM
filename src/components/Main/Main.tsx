import "./Main.css";
import message from "../../assets/images/messenger.png";
import MaterialChart from "../graphs/Graph";
import Event from "../Event/Event";
import BasicDateCalendar from "../Calendar/Calendar";
import mess from "../../assets/images/messenger.png";
import ApexChart from "../graphs/perfGraph";
import GoogleLineChart from "../SmGraph/SmGraph";

import Event2 from "../Event/Event2";

const Main = () => {
  const chartData: Array<Array<string | number>> = [
    ["Day", "income", "Expenses"],
    ["Monday", 1000, 800],
    ["Tuesday", 1200, 850],
    ["Wednesday", 800, 1000],
    ["Thursday", 1100, 900],
    ["Friday", 950, 1200],
  ];
  return (
    <div className="scroll w-full lefright p-0 grid grid-cols-6 bg-slate-200 dark:bg-darklight   max-laptop:block overflow-y-scroll" style={{height:"740px"}}>
      <div className="left space-y-12 col-span-4 bg-white   dark:bg-darklight dark:text-white rounded-xl grid-rows-6 ">
        <div className="top flex  gap-10 p-2.5 pl-8  row-span-1">
          <div className="box h-52  mt-1  w-80 rounded-lg p-2  dark:bg-dark">
            <div className="box2 grid grid-rows-8 p-2">
              <div className="topbox row-span-3 flex justify-between">
                <p className="p-0 text-sm font-bold"> Revenue:</p>
                <img src={message} alt="" className="" />
              </div>
              <div className="middlebox row-span-1">
                <h1 className="p-0 font-extrabold text-sm text-slate-600">
                  $3000
                </h1>
              </div>
              <div className="graph row-span-4   flex items-center  p-3  h-28">
                <GoogleLineChart />
              </div>
            </div>
          </div>
          <div className="box h-52 p-2   mt-1 w-80 rounded-xl dark:bg-dark dark:text-white ">
            <div className="box2 grid grid-rows-8 p-2">
              <div className="topbox row-span-3 flex justify-between">
                <p className="p-0 text-sm font-bold"> Expenses:</p>
                <img src={message} alt="" className="" />
              </div>
              <div className="middlebox row-span-1">
                <h1 className="p-0 font-extrabold text-sm text-slate-600">
                  $3000
                </h1>
              </div>
              <div className="graph row-span-4 flex items-center p-3 h-28">
              <GoogleLineChart />
              </div>
            </div>
          </div>
          <div className="box h-52  mt-1 w-80 rounded-2xl p-2 dark:bg-dark dark:text-white ">
            <div className="box2 grid grid-rows-8 p-2">
              <div className="topbox row-span-3 flex justify-between">
                <p className="p-0 text-sm font-bold"> Expenses:</p>
                <img src={message} alt="" className="" />
              </div>
              <div className="middlebox row-span-1">
                <h1 className="p-0 font-extrabold text-sm text-slate-600">
                  $3000
                </h1>
              </div>
              <div className="graph row-span-4  flex items-center p-3   h-28">
              <GoogleLineChart />
              </div>
            </div>
          </div>
          
        </div>

        <div className="middlemaina  grid grid-cols-6  row-span-2 gap-4  ">
          <div className="middlelef  col col-span-4  grid grid-rows-6 bg-white dark:bg-dark rounded-lg">
            <div className="head row-span-1 flex items-center pl-5">
              <h1 className=" text-sm font-bold">Recent Activity</h1>
            </div>
            <div className="text row-span-4  grid pl-2 gap-1 bg-white dark:bg-dark dark:text-white">
              <div className="one h-7 grid grid-cols-6">
                <p className=" col-span-1 flex justify-center">thie</p>
                <p className=" col-span-4 text-xs flex items-center  font-semibold ">
                  Thierry is now a new comer on this day
                </p>
                <p className=" col-span-1 text-xs flex items-center">
                  07 Jan 2005
                </p>
              </div>
              <div className="one h-7 grid grid-cols-6">
                <p className=" col-span-1 flex justify-center">thie</p>
                <p className=" col-span-4 text-xs flex items-center  font-semibold">
                  Thierry is now a new comer on this day
                </p>
                <p className=" col-span-1 text-xs flex items-center">
                  07 Jan 2005
                </p>
              </div>
              <div className="one h-7 grid grid-cols-6">
                <p className=" col-span-1 flex justify-center">thie</p>
                <p className=" col-span-4 text-xs flex items-center  font-semibold">
                  Thierry is now a new comer on this day
                </p>
                <p className=" col-span-1 text-xs flex items-center ">
                  07 Jan 2005
                </p>
              </div>
              <div className="one h-7 grid grid-cols-6">
                <p className=" col-span-1 flex justify-center">thie</p>
                <p className=" col-span-4 text-xs flex items-center  font-semibold">
                  Thierry is now a new comer on this day
                </p>
                <p className=" col-span-1 text-xs flex items-center ">
                  07 Jan 2005
                </p>
              </div>
            </div>
            <div className="row-span-1  flex justify-end items-center pr-8 text-sm font-bold">
              <p>activity</p>
            </div>
          </div>
          <div className="middleright  col-span-2 p-2 bg-white dark:bg-dark dark:text-white rounded-lg">
            <div className="  h-70">
              {/* academic performance show */}

              <div className="topm row-span-1  text-sm font-bold flex items-center gap-4 pl-4">
                <p>academic performance</p>
                <img src={mess} alt="" />
              </div>
              <div className="middlem h-56 ">
                <ApexChart />
              </div>
              <div className="bottomm row-span-1">
                <div className="bottomm2   flex gap-5">
                  <div className=" gap-2 flex ">
                    <div
                      className=" h-3 w-3 rounded-full"
                      style={{ backgroundColor: "#2B59FF" }}
                    ></div>
                    <div
                      className=" h-3 w-3 rounded-full"
                      style={{ backgroundColor: "#96FCB2" }}
                    ></div>
                    <div
                      className=" h-3 w-3 rounded-full"
                      style={{ backgroundColor: "#FAE2A3" }}
                    ></div>
                  </div>
                  <p className=" text-xs font-bold">Mid Term</p>
                </div>
                <div className="bottomm2  flex gap-5">
                  <div className=" gap-2 flex">
                    <div
                      className=" h-3 w-3 rounded-full"
                      style={{ backgroundColor: "#ED8424" }}
                    ></div>
                    <div
                      className=" h-3 w-3 rounded-full"
                      style={{ backgroundColor: "#39ACF7" }}
                    ></div>
                    <div
                      className=" h-3 w-3 rounded-full"
                      style={{ backgroundColor: "#EB75BC" }}
                    ></div>
                  </div>
                  <p className=" text-xs font-bold">Examination</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom   row-span-3 ">
          <div className="botmain ">
            <div className="upperword grid grid-cols-6 ">
              <h1 className=" col-span-2  pl-5 font-bold flex items-center">
                Earning
              </h1>
              <div className="revex col-span-3  grid grid-cols-2 gap-4">
                <div className="rev flex gap-1 items-center justify-end">
                  <div
                    className=" rounded-full h-2 w-2"
                    style={{ backgroundColor: "#2B59FF" }}
                  ></div>
                  <h1 className=" font-bold">Revenue</h1>
                </div>

                <div className="exp flex gap-1 items-center justify-start">
                  <div
                    className=" rounded-full h-2 w-2"
                    style={{ backgroundColor: "#EE780B" }}
                  ></div>
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

      <div className="right col-span-2 space-y-12 grid grid-rows-3 pl-4 bg-slate-200 dark:bg-darklight dark:text-white rounded-lg">
        <div className="middlec row-span-1 h-72 rounded-xl bg-white dark:bg-dark dark:text-white">
          <BasicDateCalendar />
        </div>
        <div className="topc row-span-1 h-60 bg-white rounded-xl grid-rows-6 p-3 dark:bg-dark dark:text-white ">
          <Event2 />
        </div>

        <div className="topc row-span-1 h-64 bg-white    rounded-xl grid-rows-6 p-3 dark:bg-dark dark:text-white">
          <Event />
        </div>
      </div>
    </div>
  );
};

export default Main;
