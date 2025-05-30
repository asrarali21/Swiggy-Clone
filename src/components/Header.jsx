import React from 'react'
import { ChevronDown, HelpCircle, KeyRoundIcon, PercentCircleIcon, Search, User } from "lucide-react"
import {NavLink}  from "react-router-dom"
import { useState } from 'react';
function Header() {
  
  const [Toggle, setToggle] = useState(false)
   
    function handleOtherClick() {
     setToggle(true)

      
    }
    function handleIconClick() {
     setToggle(true)
      
    }
    function hideSideToggle() {
      setToggle(false)
    }
  return ( 
      <>
      
        <div className='black-overlay w-full h-full fixed  duration-500 ' onClick={hideSideToggle} style={{
          opacity : Toggle ? 1 : 0,
          visibility : Toggle ? "visible" : "hidden"
          
        }}>
          <div onClick={((e)=>
          e.stopPropagation()
        )} className='w-[400px] bg-white h-full absolute duration-700 ' style={{
            left : Toggle ? "0%" : "-100%"
          }}>
      
          <input type="text" className="bg-gray-200 border-2 "  />
      
          </div>
        </div>

      <div className='flex flex-wrap items-center justify-between   ml-30 mr-30'>
        <div className='flex items-center '>
        <img src="https://tse4.mm.bing.net/th?id=OIP.bJhfVlIBmu34pwtR43iefAHaHa&pid=Api&P=0&h=180" alt="" className='h-15 pr-20  object-cover'/>
         <span onClick={handleOtherClick} className='cursor-pointer text-black font-bold hover:text-orange-500'>other</span>  <ChevronDown onClick={handleIconClick} className='cursor-pointer'/>
        </div>
     .
        <div className='flex gap-8 pr-30 '>
       <NavLink to="/search" className="flex items-center gap-1 text-black"><Search/> Search</NavLink>
       <NavLink className="flex items-center gap-1 text-black"><PercentCircleIcon/> Offers</NavLink>
       <NavLink className="flex items-center gap-1 text-black "><HelpCircle/> Help</NavLink>
       <NavLink className="flex items-center gap-1 text-black"><User/> SignIn</NavLink>
       <NavLink className="flex items-center gap-1 text-black"><HelpCircle/> Cart</NavLink>
        </div>
       </div>
 
      </>
  
 
    
   
        
   
  )
}

export default Header