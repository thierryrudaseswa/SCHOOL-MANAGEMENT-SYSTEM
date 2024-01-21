import "./TopBar.css";
import not from "../../assets/images/not.png";
import person from "../../assets/images/person.png";
import ThemeToggle from "../../DarkMode/ThemeToggle";

const TopBar: React.FC = () => {
  return (
    <div className=" grid grid-cols-6  w-full dark:bg-dark">
      <div className="lefttop col-span-4 flex items-center p-2">
        <form>
         
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="inputtop rounded-2xl bg-slate-200 dark:bg-darklight  block w-72 p-4 ps-10 text-sm h-10 "
              placeholder="Search Mockups, Logos..."
              required
              style={{ background: "0A0A0" }}
            />
          </div>
        </form>
      </div>
      <div className="righttop col-span-2 grid grid-cols-4 items-center">
        <div className="not col-span-1 h-8 flex justify-start items-center">
          <img
            src={not}
            alt=""
            className="not h-6 rounded-xl hover:bg-slate-200 active:bg-slate-400"
          />
        </div>

        <div className="prof col-span-3 h-9 flex items-center justify-between pr-2">
        <ThemeToggle />
        <div className=" flex ">
        <img
            src={person}
            alt=""
            className="account bg-gray-700 rounded-xl p-1 cursor-pointer transition-colors duration-300 hover:bg-slate-400 active:bg-slate-300"
          />

          <div className="namesRole h-9 text-xs grid px-2 py-2 items-center dark:text-white ">
            <h1 className="p-0 font-extrabold">Rudaseswa</h1>
            <h5 className="font-bold">Director</h5>

        
          </div>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default TopBar;
