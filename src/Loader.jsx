import React from 'react'

const Loader = () => {
  return (
    <div className='bg-black h-[100vh] w-[100%] flex justify-center items-center'>
      <div className=' flex justify-center items-center text-white w-[30vh] h-[30vh]  border-r-2 border-r-white rounded-full' id='loader'>
        <span id='aragosText'>aragos</span>
      </div>
    </div>
  )
}

export default Loader