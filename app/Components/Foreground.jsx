'use client'
import React, { useRef, useState } from 'react'
import Cards from './Cards'


function Foreground() {
  const ref = useRef(null);
  const data = [
    {
 
      desc: "Lorem ipsum dolor sit amet adipisicing elit. Quos odio pariatur.",
      filesize: "9mb",
      close: true,
      tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc: "Lorem ipsum dolor sit amet adipisicing elit. Quos odio pariatur.",
      filesize: "9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
    },
    {
      desc: "Lorem ipsum dolor sit amet adipisicing elit. Quos odio pariatur.",
      filesize: "9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
  ];

  return (
    <div ref={ref} className='fixed w-full h-screen top-0 left-0 z-[3] flex gap-5 flex-wrap p-5'>
        {data.map((item, index)=>(
          <Cards data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
