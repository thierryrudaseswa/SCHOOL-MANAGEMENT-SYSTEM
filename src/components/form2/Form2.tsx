import { Checkbox, FormControlLabel } from '@mui/material';
import Button from "../button/Button"
interface Props{
  isSignUp:boolean;
  isAdmin:boolean;
}

const Form2:React.FC<Props> = ({isSignUp,isAdmin}) => {
  return (
    <div className="p-0   flex justify-center">
      <div className="flex my-5 bg-white rounded-xl justify-center px-6 lg:px-8">
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
          <input id="email" name="email" type="email" placeholder='Enter school email' autoComplete="email" required className="block w-full rounded-lg border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div className="">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" placeholder='password' type="password" autoComplete="current-password" required className="block w-96 rounded-lg border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
    {isSignUp && (
      <div className="">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
        </div>
        <div className="mt-2">
          <input id="password" name="password" placeholder='confirm password' type="password" autoComplete="current-password" required className="block w-96 rounded-lg border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
    )}  

      <div className="word flex items-center">
      <FormControlLabel
  control={<Checkbox />}
  label=""
  className='bg-white w-9'
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
        <button type="submit" className="flex w-full justify-center rounded-xl px-3 py-1.5 text-sm font-bold tracking-wide leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style={{background:'#2B59FF'}}>Register</button>
      </div>
      <div className=' flex justify-center text-sm font-bold h-6'>
        Or
      </div>
      <div className='flex justify-center items-center text-lg font-semibold cursor-pointer my-4 h-6' style={{color:'#EE780B'}}>
        Continue as client
      </div>

    </form>
  </div>
</div>
    </div>
  )
}

export default Form2;
