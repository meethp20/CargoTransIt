import React from 'react'

function SignIn() {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-100'>
               <div className='w-1/2 h-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8'>
                Sign IN 
                <input type="text" placeholder='username' className='border-2 border-gray-300 rounded-lg p-2 m-2'/>  
                <input type="password" placeholder='password' className='border-2 border-gray-300 rounded-lg p-2 m-2'/>
                   <div    className=' flex gap-4'>
                   <button className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300'>
                google
                </button>
                  <button className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300'>
                Phone 
                </button>
                </div>
               </div>
         
             <div className='w-1/2 h-full'> 
              <img src="/cragoimage/qualitypic2jpg.jpg" alt="logo" className='w-full h-full object-cover' />
             </div>

    </div>
  )
}

export default SignIn