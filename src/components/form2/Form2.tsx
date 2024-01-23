import { Checkbox, FormControlLabel } from '@mui/material';
import Button from "../button/Button";
import "./Form.css"
import {Link} from "react-router-dom"
interface Props{
  isSignUp:boolean;
  isAdmin:boolean;
}

const Form2:React.FC<Props> = ({isSignUp,isAdmin}) => {
  return (
    <div className="p-0   flex pl-9 ">
      <div className="flex rounded-x justify-center px-6 PY-4 lg:px-8" style={{height:"670px"}}>
  <div className="mt-10  ">
    <form className="space-y-2  " action="#" method="POST">
<div className="headText h-16">
  <h2 className='flex w-full justify-center px-3 py-1.5 text-2xl font-bold tracking-normal leading-6  shadow-sm' style={{color:'#3E3E3E'}}>Get Started now</h2>

  {isAdmin ? ( 
     <p className='flex w-full justify-center px-3 py-1.5 text-xs font-semibold tracking-normal leading-6  max-phone:text-xs ' style={{color:'#6A6A6A'}}>Enter the required credentials to manage your school
     </p>) : (
  <p className='flex w-full justify-center px-3 py-1.5 text-xs font-semibold tracking-normal leading-6  max-phone:text-xs ' style={{color:'#6A6A6A'}}>Enter the required credentials for your school</p>
  ) }


</div>
<div className="flex justify-center h-16 items-center">
<Button />
</div>
     
      <div>

        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" placeholder='Enter school email' autoComplete="email" required className="block  h-14 w-full rounded-lg border-0 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{width:""}}/>
        </div>
      </div>

      <div className="">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" placeholder='password' type="password" autoComplete="current-password" required className="block  h-14 w-full rounded-lg border-0 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{width:""}}/>
        </div>
      </div>
    {isSignUp && (
      <div className="">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
        </div>
        <div className="mt-2">
          <input id="password" name="password" placeholder='confirm password' type="password" autoComplete="current-password" required className="block w-full h-14 rounded-lg border-0 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{width:""}}/>
        </div>
      </div>
    )}  

      <div className="word flex items-center">
      <FormControlLabel
  control={<Checkbox />}
  label=""
  className='w-9'
/>
<p className='flex gap-2 max-phone:text-xs'>
  <span className='text-black'>Agree to</span>
  <span className='text-gray-700 cursor-pointer'>terms</span>
  <span className='text-black'>and</span>
  <span className='text-gray-700 cursor-pointer'>conditions</span>
  <span className='text-black'>other text</span>
</p>
    
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-xl items-center  h-14 text-sm font-bold tracking-wide leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style={{background:'#2B59FF'}}>Register</button>
      </div>
      <div className=' flex justify-center text-sm font-bold h-6'>
        Or
      </div>
      <Link to="/registerS" className='flex justify-center items-center text-lg font-semibold cursor-pointer my-4 h-6' style={{color:'#EE780B'}}>
        Continue as client
      </Link>

    </form>
  </div>
</div>
    </div>
  )
}

export default Form2;
