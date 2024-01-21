
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import MyCalendar from "../../components/calendarCo/CalendarCo";

const Calendar = () => {
  const initialEvents = [
    {
      id: "1",
      title: "Event 1",
      start: new Date(),
      end: new Date(),
      allDay: true,
    },
    
  ];

  return (
    <div className="main grid grid-cols-5">
      <div className="sidebar col-span-1">
        <SideBar />
      </div>
      <div className="main col-span-4 bg-slate-200 dark:bg-darklight">
        <div className="topbar h-14 bg-white flex items-center ">
          <TopBar />
        </div>
        <div className="mainpart max-h-full bg-white rounded-lg flex justify-center items-center ml-10 mt-6" style={{width:"1300px"}}>
          <MyCalendar initialEvents={initialEvents} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
