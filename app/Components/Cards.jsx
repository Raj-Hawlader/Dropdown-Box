'use client'
import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { FaImagePortrait } from "react-icons/fa6";
import { MdDownloading } from "react-icons/md";
import { motion } from "framer-motion"
function Cards({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileHover={{ scale: 1.1 }} className='relative w-[13rem] h-[17rem] rounded-[30px] bg-zinc-900 text-white px-4 py-5 overflow-hidden'>
        <FaImagePortrait/>
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div>
          <div className=' footer absolute bottom-0 w-full h-13.5 left-0 '>
                <div className='flex items-center justify-between p-3 m-2'>
                     <p className=' text-sm fonts-sans leading-tight'>{data.filesize}</p>
                    <span className='flex justify-between items-center'>
                        {data.close ? <MdDownloading size="1.1rem"/> : <IoMdCloseCircle size="1.1rem"/>}
                    </span>
                </div>
                <div>
                  {data.tag.isOpen ? <div className={`tag w-full h-10 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} tag w-full h-10`}>
                  <h3 className='text-sm flex pt-2 justify-center items-center'>Download now</h3>
                </div> : null}
                </div>
                
                
          </div>
          
        </div>  

    </motion.div>
    
  )
}

export default Cards;
