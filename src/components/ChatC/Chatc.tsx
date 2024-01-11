import ms from "../../assets/images/ms.png";
import prof from "../../assets/images/prof.png";
import "./ChatC.css";
import three from "../../assets/images/three.png"
import speaker from "../../assets/images/speaker.png"
import snd from "../../assets/images/send2.svg"
import send from "../../assets/images/snd.svg"
import emoji from "../../assets/images/emoj.png"
import Mess from "../Mess/Mess";
import Sound from "../Mess/Sound";
import ImageD from "../Mess/Image";
const Chatc = () => {
  return (
    <div className=" grid-cols-12 grid rounded-3xl bg-white">
      <div
        className="left col-span-4 border-r-2 border-slate-400"
        style={{ height: "660px" }}
      >
        <div
          className="top h-24  p-5
           flex items-center justify-between "
        >
          <p className=" font-extrabold text-2xl">Messages</p>
          <div
            className=" h-14 w-14 flex justify-center items-center rounded-2xl"
            style={{ background: "#2B59FF" }}
          >
            {" "}
            <img src={ms} className="h-8 w-8" alt="" />
          </div>
        </div>
        <div className="middle h-16 flex items-center p-3">
          <form className=" w-full">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="scroll p-3 overflow-y-scroll" style={{ height: "480px", scrollbarColor: "#4A5568 #1A202C" }}>
          <div className="div h-16 bg-slate-200 mb-2 pr-1 pl-1 rounded-2xl grid grid-cols-12 items-center hover:bg-slate-200 active:bg-blue-700 cursor-pointer">
            <img src={prof} alt="" className="col-span-2" />
            <div className="div col-span-8">
              <h2 className="nam text-sm font-extrabold">Thierry Rudaseswa</h2>
              <p className="par text-xs">
                We are having a meeting at 9:00 pm; be there
              </p>
            </div>
            <div className=" div col-span-2">
              <h2 className="am text-sm font-extrabold">Today</h2>
              <p className="am text-xs">7:00 AM</p>
            </div>
          </div>
          <div className="div h-16 bg-slate-50 mb-2 pr-1 pl-1 rounded-2xl grid grid-cols-12 items-center hover:bg-slate-200 active:bg-blue-700 cursor-pointer">
            <img src={prof} alt="" className="col-span-2" />
            <div className="div col-span-8">
              <h2 className="nam text-sm font-extrabold">Thierry Rudaseswa</h2>
              <p className="par text-xs">
                We are having a meeting at 9:00 pm; be there
              </p>
            </div>
            <div className=" div col-span-2">
              <h2 className="am text-sm font-extrabold">Today</h2>
              <p className="am text-xs">7:00 AM</p>
            </div>
          </div>
          <div className="div h-16 bg-slate-50 mb-2 pr-1 pl-1 rounded-2xl grid grid-cols-12 items-center hover:bg-slate-200 active:bg-blue-100 cursor-pointer">
            <img src={prof} alt="" className="col-span-2" />
            <div className="div col-span-8">
              <h2 className="nam text-sm font-extrabold">Thierry Rudaseswa</h2>
              <p className="par text-xs">
                We are having a meeting at 9:00 pm; be there
              </p>
            </div>
            <div className=" div col-span-2">
              <h2 className="am text-sm font-extrabold">Today</h2>
              <p className="am text-xs">7:00 AM</p>
            </div>
          </div>
          <div className="div h-16 bg-slate-50 mb-2 pr-1 pl-1 rounded-2xl grid grid-cols-12 items-center hover:bg-slate-200 active:bg-blue-700 cursor-pointer">
            <img src={prof} alt="" className="col-span-2" />
            <div className="div col-span-8">
              <h2 className="nam text-sm font-extrabold">Thierry Rudaseswa</h2>
              <p className="par text-xs">
                We are having a meeting at 9:00 pm; be there
              </p>
            </div>
            <div className=" div col-span-2">
              <h2 className="am text-sm font-extrabold">Today</h2>
              <p className="am text-xs">7:00 AM</p>
            </div>
          </div>
          <div className="div h-16 bg-slate-50 mb-2 pr-1 pl-1 rounded-2xl grid grid-cols-12 items-center hover:bg-slate-200 active:bg-blue-700 cursor-pointer">
            <img src={prof} alt="" className="col-span-2" />
            <div className="div col-span-8">
              <h2 className="nam text-sm font-extrabold">Thierry Rudaseswa</h2>
              <p className="par text-xs">
                We are having a meeting at 9:00 pm; be there
              </p>
            </div>
            <div className=" div col-span-2">
              <h2 className="am text-sm font-extrabold">Today</h2>
              <p className="am text-xs">7:00 AM</p>
            </div>
          </div>
          <div className="div h-16 bg-slate-50 mb-2 pr-1 pl-1 rounded-2xl grid grid-cols-12 items-center hover:bg-slate-200 active:bg-blue-700 cursor-pointer">
            <img src={prof} alt="" className="col-span-2" />
            <div className="div col-span-8">
              <h2 className="nam text-sm font-extrabold">Thierry Rudaseswa</h2>
              <p className="par text-xs">
                We are having a meeting at 9:00 pm; be there
              </p>
            </div>
            <div className=" div col-span-2">
              <h2 className="am text-sm font-extrabold">Today</h2>
              <p className="am text-xs">7:00 AM</p>
            </div>
          </div>
          <div className="div h-16 bg-slate-50 mb-2 pr-1 pl-1 rounded-2xl grid grid-cols-12 items-center hover:bg-slate-200 active:bg-blue-700 cursor-pointer">
            <img src={prof} alt="" className="col-span-2" />
            <div className="div col-span-8">
              <h2 className="nam text-sm font-extrabold">Thierry Rudaseswa</h2>
              <p className="par text-xs">
                We are having a meeting at 9:00 pm; be there
              </p>
            </div>
            <div className=" div col-span-2">
              <h2 className="am text-sm font-extrabold">Today</h2>
              <p className="am text-xs">7:00 AM</p>
            </div>
          </div>
          <div className="div h-16 bg-slate-50 mb-2 pr-1 pl-1 rounded-2xl grid grid-cols-12 items-center hover:bg-slate-200 active:bg-blue-700 cursor-pointer">
            <img src={prof} alt="" className="col-span-2" />
            <div className="div col-span-8">
              <h2 className="nam text-sm font-extrabold">Thierry Rudaseswa</h2>
              <p className="par text-xs">
                We are having a meeting at 9:00 pm; be there
              </p>
            </div>
            <div className=" div col-span-2">
              <h2 className="am text-sm font-extrabold">Today</h2>
              <p className="am text-xs">7:00 AM</p>
            </div>
          </div>
        </div>
      </div>







      <div className="right col-span-8 bg-black ">

       <div className="top flex h-16 bg-slate-500 items-center justify-between pr-5 pl-5">
        <div className="pro flex items-center gap-3 ">
            <img src={prof} alt="" />
        <div className="name text-sm font-bold">RUDASESWA Thierry</div>
        </div>
       <div className=" h-8 w-8 rounded-full cursor-pointer bg-white flex items-center justify-center hover:bg-slate-200"><img src={three} alt="" /></div>
</div>




       <div className="scroll midd gap-2 overflow-y-scroll" style={{height:"530px",scrollbarColor: "#4A5568 ,#1A202C"}}>
        <div className=" bg-red-600 flex items-center justify-center font-bold">Today</div>

        <div className="friend bg-slate-50 mb-1 flex items-center justify-start">
        <Mess />
        </div>
        <div className="user bg-slate-50 mb-1 flex items-center justify-end">
        <Mess />
        </div>
        <div className="friend bg-slate-50 mb-1 flex items-center justify-start">
        <Mess />
        </div>
        <div className="user bg-slate-50 mb-1 flex items-center justify-start">
        <Sound />
        </div>
        <div className="user bg-slate-50 mb-1 flex items-center justify-start">
        <ImageD />
        </div>

       


       </div>






       <div className="send flex items-center h-20 pl-2 pr-3 rounded-2xl">
        <div className="send2 h-14 grid grid-cols-12 bg-white  rounded-2xl">

<div className="speak col-span-1 flex items-center justify-center">
  <img src={speaker} alt="" className=" cursor-pointer" />
</div>
<div className="input col-span-9 flex items-center ">
  <input type="text" placeholder="Message @john thiery" className="input h-8 border-none overflow-y-scroll overflow-scroll" style={{width:"900px"}} />
</div>
<div className=" h-14 flex items-center">
<div className="but col-span-2  flex h-8 items-center gap-5">
<img src={emoji} alt="" className=" cursor-pointer" />
  <img src={send} alt="" className=" cursor-pointer" />
  <img src={snd} alt="" className=" cursor-pointer" />
</div>
</div>

        </div>
       </div>
      </div>
    </div>
  );
};

export default Chatc;
