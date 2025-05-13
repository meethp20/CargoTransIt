import React from 'react'

function Signout() {
  return (
    <div className='flex items-center justify-center'> 
       
            <h1>are you sure you wanna log out</h1>
              <div className='flex gap-4 '>
            < button className=' bg-gray-800 hover:bg-gray-600 rounded-2xl shadow'>No </button>
            <button className=' bg-gray-800 hover:bg-gray-600 rounded-2xl shadow'> Log out </button>
             </div>
    </div>
  )
}

export default Signout