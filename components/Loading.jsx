import React from 'react'
// import '../app/globals.css'

import { Bars } from  'react-loader-spinner'

const Loading = () => {
  return (
    <div className='w-screen flex flex-col justify-center h-screen items-center'>
        <Bars
  height="60"
  width="60"
  color="#1ED760"
  ariaLabel="bars-loading"
  wrapperClass={{}}
  visible={true}
/>
<h1 className='text-white text-xl sm:text-2xl font-bold'>Loading</h1>
    </div>
  )
}

export default Loading