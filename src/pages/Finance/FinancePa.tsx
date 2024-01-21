
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import InvoiceGrid from "../Finance/Finance";
import { InvoiceData, FeeData } from './InvoiceData'; // Import InvoiceData and FeeData

const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
  { field: "phone", headerName: "Phone", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "cost", headerName: "Cost", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
  // ... Add other columns as needed
];

const FinancePa = () => {
  return (
    <div className="main grid grid-cols-5">
      <div className="sidebar col-span-1">
        <SideBar />
      </div>
      <div className="main col-span-4 bg-slate-900">
        <div className="topbar h-14 bg-white flex items-center ">
          <TopBar />
        </div>
        <div className="mainpart bg-slate-200 max-h-full p-10 max-tablet2:p-3">
          <div className="mainp2 bg-white rounded-2xl">
            <div className="head h-20 flex justify-center items-center font-extrabold text-2xl">
              ALL TRANSACTIONS
            </div>
            <InvoiceGrid columns={columns} rows={InvoiceData } />
            {/* Use 'as FeeData[]' to cast InvoiceData to FeeData[] */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancePa;
