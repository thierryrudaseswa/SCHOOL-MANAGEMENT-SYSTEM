import MaterialChart  from "../graphs/Graph";
import "./Finance3.css"
import React from "react"
const FinanceCo = () => {
    const chartData: Array<Array<string | number>> = [
        ["Day", "income", "Expenses"],
        ["Monday", 1000, 800],
        ["Tuesday", 1200, 850],
        ["Wednesday", 800, 1000],
        ["Thursday", 1100, 900],
        ["Friday", 950, 1200],
      ];

  return (
    <div className="allfin grid grid-cols-12 gap-4">
     <div className=" scroll left col-span-8 bg-white dark:bg-dark rounded-xl overflow-y-scroll" style={{height:"90vh"}}>
        <div className="head h-20  grid justify-center items-center">
           <div className=" bg-white dark:bg-dark dark:text-white w-52 grid items-center justify-center"> <h1 className=" font-bold text-lg">Balance</h1>
            <p className=" font-extrabold text-2xl ">$500M</p></div>
        </div>
        <div className="graph h-72 bg-orange-500  flex items-center" >
             {/* <MaterialChart chartData={chartData} /> */}
             </div>
        <div className="income ">
            <div className=" h-12 bg-white dark:bg-dark dark:text-white  flex justify-start items-center font-extrabold p-2">Expenses</div>
            <div className="ex grid grid-cols-3  h-16 items-center justify-center font-bold p-4 rounded-2xl m-4 dark:text-white hover:bg-slate-600" style={{}}>
                <div className="head col-span-1">Salary</div>
                <p className=" col-span-1">Today</p>
                <div className="col-span-1 flex justify-end"><button className=" h-9 rounded-full text-white" style={{background:"#2B59FF",width:"150px"}}> -300$</button></div>
               </div>
               <div className="ex grid grid-cols-3 h-16 items-center justify-center font-bold p-4 rounded-2xl m-4 hover:bg-slate-600 dark:text-white">
                <div className="head col-span-1">Salary</div>
                <p className=" col-span-1">Today</p>
                <div className="col-span-1 flex justify-end"><button className=" h-9 rounded-full text-white" style={{background:"#4CAF50",width:"150px"}}> -300$</button></div>
               </div>
               <div className="grid grid-cols-3 h-16 items-center justify-center font-bold p-4 rounded-2xl m-4 hover:bg-slate-600 dark:text-white">
                <div className="head col-span-1">Salary</div>
                <p className=" col-span-1">Today</p>
                <div className="col-span-1 flex justify-end"><button className=" h-9 rounded-full text-white" style={{background:"#EE780B",width:"150px"}}> -300$</button></div>
               </div>
               <div className="but  h-16  flex justify-end  items-center p-3">
                <button className=" h-14 w-48 rounded-3xl font-bold text-white" style={{background:"#2B59FF"}} >All Expenses</button>
               </div>
               
             </div>
             <div className="expense ">
            <div className=" h-12 bg-white dark:bg-dark dark:text-white  flex justify-start items-center font-extrabold p-2">Income</div>
            <div className=" grid grid-cols-3 h-16 items-center justify-center font-bold p-4 rounded-2xl m-4 hover:bg-slate-600 dark:text-white" style={{}}>
                <div className="head col-span-1">Salary</div>
                <p className=" col-span-1">Today</p>
                <div className="col-span-1 flex justify-end"><button className=" h-9 rounded-full text-white" style={{background:"#2B59FF",width:"150px"}}> -300$</button></div>
               </div>
               <div className=" grid grid-cols-3 h-16 items-center justify-center font-bold p-4 rounded-2xl m-4 hover:bg-slate-600 dark:text-white">
                <div className="head col-span-1">Salary</div>
                <p className=" col-span-1">Today</p>
                <div className="col-span-1 flex justify-end"><button className=" h-9 rounded-full text-white" style={{background:"#4CAF50",width:"150px"}}> -300$</button></div>
               </div>
               <div className=" grid grid-cols-3 h-16 items-center justify-center font-bold p-4 rounded-2xl m-4 hover:bg-slate-600 dark:text-white">
                <div className="head col-span-1">Salary</div>
                <p className=" col-span-1">Today</p>
                <div className="col-span-1 flex justify-end"><button className=" h-9 rounded-full text-white" style={{background:"#EE780B",width:"150px"}}> -300$</button></div>
               </div>
               <div className="but  h-16  flex justify-end  items-center p-3">
                <button className=" h-14 w-48 rounded-3xl font-bold text-white" style={{background:"#2B59FF"}} >All Income</button>
               </div>
               
             </div>

        </div> 
     <div className="scroll right col-span-4 bg-white dark:bg-dark dark:text-white rounded-lg overflow-y-scroll">
        <div className="rec ">
            <h1 className=" h-20 flex items-center justify-center font-extrabold text-lg ">Recent Transactions</h1>
           <div className="">
           <div className=" flex justify-between p-5 items-center mb-1">
                <p className=" font-bold">Salary</p>
                <button className="butfin h-10 w-40 rounded-xl text-lg font-bold text-white" style={{background:"#2B59FF"}}>- 300$</button>
            </div>
            <div className=" flex justify-between p-5 items-center mb-1">
                <p className=" font-bold">School Fees</p>
                <button className="butfin h-10 w-40 rounded-xl text-lg font-bold text-white" style={{background:"#4CAF50"}}>- 300$</button>
            </div>
            <div className=" flex justify-between p-5 items-center mb-1">
                <p className=" font-bold">Salary</p>
                <button className="butfin  h-10 w-40 rounded-xl text-lg font-bold text-white" style={{background:"#2B59FF"}}>- 300$</button>
            </div>
           </div>
            
        </div>
        <div className="fin">
            <h1 className=" h-20 flex items-center justify-center font-extrabold text-lg  ">Finance activities</h1>
            <div className=" h-20 p-2" > <div className=" h-16 p-2 rounded-2xl flex items-center justify-start font-bold" style={{background:"#FAFAFA",color:"#949494"}}>Transaction</div></div>
            <div className=" h-20 p-2" > <div className=" h-16 p-2 rounded-2xl bg-white flex items-center justify-start font-bold" style={{background:"#FAFAFA",color:"#EE780B"}}>School Fees</div></div>
            <div className=" h-20 p-2" > <div className=" h-16 p-2 rounded-2xl bg-white flex items-center justify-start font-bold" style={{background:"#FAFAFA",color:"#4CAF50"}}>Revenue</div></div>
            <div className=" h-20 p-2" > <div className=" h-16 p-2 rounded-2xl bg-white flex items-center justify-start font-bold" style={{background:"#FAFAFA",color:"#949494"}}>Transaction</div></div>   
           

        </div>
     </div>
    </div>
  )
}

export default FinanceCo;
