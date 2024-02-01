
import cal1 from "../../assets/images/cal1.svg"
import cal2 from "../../assets/images/cal2.svg"
import cal3 from "../../assets/images/cal3.svg"
import cal4 from "../../assets/images/cal4.svg"
import cal from "../../assets/images/cal.svg"
import React from "react"

const Event2 = () => {
  return (
    <div>
        <div className="tit row-span-1 flex items-center justify-center font-bold h-9">
          UpComing Events
        </div>
        <div className="tab  row-span-4  h-40 gap-5 overflow-y-clip">
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
  )
}

export default Event2
