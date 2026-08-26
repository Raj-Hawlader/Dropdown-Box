
import React, { useRef, useState } from 'react'
import Cards from './Cards'


function Foreground() {
  


  return (
    <div ref={ref} className='fixed w-full h-screen top-0 left-0 z-[3] flex gap-5 flex-wrap p-5'>
        {data.map((item, index)=>(
          <Cards data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
