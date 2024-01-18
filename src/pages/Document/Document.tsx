// Finance.tsx
import React from 'react';
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import InvoiceGrid from "../Finance/Finance";
import { FeeData } from '../Finance/InvoiceData'; 
import BasicModal from '../../components/BasicalModel/BasicModal';
import { useState } from "react";
import DocGen2 from '../../components/DocGen/DocGen2';

const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
  { field: "gender", headerName: "Gender", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "paid", headerName: "Paid", flex: 1 },
  { field: "remaining", headerName: "Remaining", flex: 1 },
];

const Finance = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <BasicModal open={open} handleClose={handleClose} >
        <div className=' bg-white rounded-3xl' style={{width:'600px'}}>
        <DocGen2 />
         
        </div>
      </BasicModal>

      <div className="main grid grid-cols-5">
        <div className="sidebar col-span-1">
          <SideBar />
        </div>
        <div className="main col-span-4 bg-slate-200">
          <div className="topbar h-12 bg-white flex ">
            <TopBar />
          </div>
          <div className="mainpart bg-slate-200 max-h-full p-10 max-tablet2:p-3">
            <div className="mainp2 bg-white rounded-2xl">
              <div className="head h-20 flex justify-center items-center font-extrabold text-2xl">
                SCHOOL FEES
              </div>
              <div className="but h-24 flex items-center justify-end">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br dark:shadow-lg dark:shadow-cyan-800/80 rounded-lg px-5 py-2.5 text-center me-2 mb-2 h-16 w-72 text-sm font-extrabold focus:ring-4 focus:outline-none focus:ring-cyan-700 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-300/50 active:bg-light-blue-500"
                  onClick={handleOpen}
                >
                  New Document
                </button>
              </div>
              <InvoiceGrid columns={columns} rows={FeeData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance;
