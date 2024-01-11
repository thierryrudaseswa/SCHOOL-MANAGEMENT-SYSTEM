import React from 'react'

const DocGen2 = () => {
  return (
    <div className='maind bg-white rounded-3xl p-4'>

        <div className="headD h-24 flex items-center justify-center text-2xl font-bold text-black">
            Generate Document
        </div>
        <div className="midD h-96 p-5 ">
        <div className="mb-5">
      <label htmlFor="large-input" className="block mb-2 text-sm font-bold text-black">Full Name</label>
      <input type="text" id="large-input" className="block w-full p-4 text-black border border-gray-300 rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{background:"#FAFAFA"}} placeholder='Enter full Name'/>
  </div>
            
<div className="mb-5">
  <label className="block mb-2 text-sm font-bold text-black" htmlFor="user_avatar">Upload file</label>
  <input className="block w-full p-4  border border-gray-300 rounded-lg  sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" type="file" style={{background:"#FAFAFA"}}/>
  <div className="mt-1 text-sm  text-black" id="user_avatar_help">A document to be uploaded </div>
</div>

<div className="mb-5">
  <label htmlFor="countries" className="block mb-2 text-sm font-bold text-black">Year</label>
  <select id="countries" className="block w-full p-4 text-black border border-gray-300 rounded-lg  sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer" style={{background:"#FAFAFA"}}>

    <option>2023</option>
    <option>2022</option>
    <option>2021</option>
    <option>2020</option>
  </select>
</div>


        </div>
        <div className="botD h-24 flex items-center justify-center">
        <button className='h-16 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br dark:shadow-lg dark:shadow-cyan-800/80 rounded-full px-5 py-2.5 text-center me-2 mb-2 text-xl font-extrabold focus:ring-4 focus:outline-none focus:ring-cyan-900 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-300/50 active:bg-light-blue-500"' style={{width:"480px"}} >Generate</button>
        </div>
      
    </div>
  )
}

export default DocGen2
