import React, { useState } from 'react';
import thierry from "../../assets/images/thierry (3).jpg"

const ImageD = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative flex items-start gap-3">
      <div className="flex flex-col gap-1 ">
        <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200  rounded-e-xl rounded-es-xl bg-slate-200 relative ">
          <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
            <span className="text-sm font-semibold text-gray-900">User Name</span>
            <span className="text-sm font-normal text-gray-500">Time</span>
          </div>
          <p className="text-sm font-normal text-gray-900 ">These are the images  at the party</p>
          <div className="grid gap-4 grid-cols-2 my-2.5">
            <div className="group relative">
             
              <img src={thierry} className="rounded-lg" alt="Image 1" />
            </div>
            <div className="group relative">
        
              <img src={thierry} className="rounded-lg" alt="Image 2" />
            </div>
          
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Status</span>
            <button
              className="text-sm text-blue-700 dark:text-blue-500 font-medium inline-flex items-center hover:underline"
              onClick={toggleDropdown}
            >
              <svg
                className="w-3 h-3 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                />
              </svg>
              Save all
            </button>
            {isDropdownOpen && (
              <div className="absolute bottom-0 right-0 left-52 mb-2 w-40 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Reply
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Forward
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Download
                    </a>
                  </li>
                  {/* Add other list items */}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        data-dropdown-placement="bottom-start"
        className="absolute top-0 right-0 inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
        type="button"
        onClick={toggleDropdown}
      >
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button>
    </div>
  );
};

export default ImageD;
