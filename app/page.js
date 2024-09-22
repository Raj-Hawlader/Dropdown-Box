import React from 'react'
import Background from "./Components/Background"
import Cards from './Components/Cards'
import Foreground from './Components/Foreground'
function page() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
        <Background/>
        <Foreground/>

        
    </div>
  )
}

export default page
