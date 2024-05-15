 import React from 'react'
 import {AiOutlineSearch} from 'react-icons/ai'
 import { navBar } from "../asserts/data/data"
 import profile from "../asserts/images/profile.jpeg"
 import musiclogo from '../asserts/images/musiclogo.png'
import { NavLink } from 'react-router-dom'
 export const Header = () => {
  const activeNavlink =({isActive})=> (isActive ?"active":"NavLink")
   return (
     <>
      <header className='fixed top-1.5 left-0 z-50 w-screen h-[8vh] md:shadow-sm bg-white'>
        {/* desktop */}
        <div className='hidden md:flex justify-between px-7 px-2'>
            <div className='logo flex'>
                <div>
                    <img src={musiclogo} alt='logo' width='50px' height='50px'/>
                </div>
                <h2 className='text-2xl font-semibold ml-3'>MESMERS</h2>
            </div>
            {/* navlinks */}
            <div className='menu'>
              <ul className='flex'>
                {navBar.map((list,i)=>(<li className={`mx-5 py-2 ${activeNavlink}`} key={i} >
                  <NavLink to={list.path}>{list.name}</NavLink>
                </li>))}
              </ul>
            </div>
            
            <div className="profile flex item-center"><AiOutlineSearch size={30}/>
            <button className='bg-primary px-5 h-9 text-white rounded-full  mx-3'>Upload</button>
            <div className='img w-8 h-8 rounded-full'>
              <img src={profile} alt="profile" className='img w-8 h-8 bg-red-300 rounded-full object-cover curser-pointer'/>
            </div>
            </div>
            <div className="flex items-centre justify between md:hidden h-full pl-2 pr-8">
            <div className='logo flex'>
                <div>
                    <img src={musiclogo} alt='logo' width='50px' height='50px'/>
                </div>
                <h2 className='text-2xl font-semibold ml-3'>MESMERS</h2>
            </div>
            </div>
        </div>
        </header> 
     </>
   )
 }
 
 
 