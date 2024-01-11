import "./Main2.css";
import Event from "../Event/Event";
import BasicDateCalendar from "../Calendar/Calendar";
import EventData from "../../pages/Events/EventData";
import EventGrid from "../../pages/Events/EventGrid";


import Event2 from "../Event/Event2";
const columns = [
  { field: "id", headerName: "ID" },
  {field:"name", headerName:"Name", flex: 1, cellClassName: "name-column--cell" },
  {field:"Date", headerName:"Date",flex: 1,},
  {field:"Time",headerName:"Start Time",flex:1},
  {field:"end",headerName:"End Time", flex:1}
 
];

const Main2 = () => {
 
  return (
    <div className="lefright p-0 grid max-h-screen grid-cols-6 max-tablet2:block bg-slate-200">
      <div className="left col-span-4 bg-white mt-3 overflow-scroll ml-4 rounded-t-xl ">
      <div className="head h-20 flex justify-center items-center font-extrabold text-2xl">
           Events
            </div>
            <EventGrid columns={columns} rows={EventData } />

       
      </div>

      <div className="right bg-slate-200 col-span-2 p-3 grid grid-rows-3 gap-y-80" style={{height:'600px'}}>
        <div className="middlec row-span-1 h-72 rounded-xl bg-white">
          <BasicDateCalendar />
        </div>
        <div className="topc row-span-1 h-60 bg-white rounded-xl grid-rows-6 p-3">
          <Event2 />
        </div>

        {/* <div className="topc row-span-1 h-64 bg-white    rounded-xl grid-rows-6 p-3">
          <Event />
        </div> */}
      </div>
    </div>
  );
};

export default Main2;