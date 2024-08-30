import React from 'react'
import { SiPayloadcms } from "react-icons/si";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({
    subsets:['latin'],
    variable: '--font-Orbitron',
    weight: '400',
}) 

 
const Navbar = () => {
  return (
    <nav className='flex items-center justify-center pb-5 pt-5'>
        <div className='flex justify-between items-center mt-4 w-[1400px] h-[60px] px-1'>
            <div className='flex px-3 py-2'>
              <a  href='/'><h2 className={`${orbitron.variable} font-sans flex text-4xl text-white`}><SiPayloadcms/>Bill Buddies</h2></a>
            </div>
            <div className='flex space-x-3'>
              <button className={`${orbitron.variable} font-sans text-xl h-[53px] text-white  px-3 py-1 translate hover:translate-y-1`}>
                    Sign In
               </button>   
              <button className={`${orbitron.variable} font-sans text-xl border h-[53px] border-blue-400 text-black  px-3 py-1 rounded-lg translate hover:translate-y-1 bg-white`}>
                    Sign Up
              </button> 
            </div>        
        </div>

    </nav>
  )
}

export default Navbar