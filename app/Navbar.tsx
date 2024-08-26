import React from 'react'
import { SiPayloadcms } from "react-icons/si";



 
 
const Navbar = () => {
  return (
    <nav className='flex items-center justify-center pb-5 pt-5'>
        <div className='flex justify-between items-center  border mt-4 w-[750px] h-[60px] rounded-3xl backdrop-blur-sm px-3'>
            <div className='flex px-3 py-2 rounded-sm'>
            <a  href='/'><h2 className='flex text-4xl text-white font-bold font-serif'><SiPayloadcms/>Bill Buddies</h2></a>
            </div>
            <div className='flex justify-evenly space-x-4'>
                <button className='text-xl text-white font-bold font-serif border-gray-400 px-3 py-2 rounded-sm translate hover:translate-y-1'>
                    Sign In
                </button>         
            </div>
        </div>

    </nav>
  )
}

export default Navbar