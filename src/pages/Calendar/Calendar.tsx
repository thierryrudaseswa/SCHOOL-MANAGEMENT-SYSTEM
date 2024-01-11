
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import MyCalendar from "../../components/calendarCo/CalendarCo";

const Calendar = () => {
  // Example data for initialEvents
  const initialEvents = [
    {
      id: "1",
      title: "Event 1",
      start: new Date(),
      end: new Date(),
      allDay: true,
    },
    // Add more events as needed
  ];

  return (
    <div className="main grid grid-cols-5">
      <div className="sidebar col-span-1">
        <SideBar />
      </div>
      <div className="main col-span-4 bg-slate-900">
        <div className="topbar h-12 bg-white flex ">
          <TopBar />
        </div>
        <div className="mainpart max-h-full bg-white flex justify-center items-center m-5" style={{width:"1300px"}}>
          <MyCalendar initialEvents={initialEvents} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
