import React from 'react'

import  "../Navbar/navigation.css" 
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineAlignCenter } from "react-icons/ai";
import { AiOutlineMonitor } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";




const Navbar = () => {
  return (
   <>
   <nav className='nav1st'>
    <div className=' list-nav1st' >
        <li>
        </li>

        <li>
            <a href="https://www.aajtak.in/">
                aajtak
            </a>
        </li>
        <li>
            <a href="https://www.gnttv.com/">Gn Tv </a>
        </li>
        <li>
            <a href="https://www.thelallantop.com/">
                LallanTop
            </a>
        </li>
        <li>
            <a href="https://www.indiatoday.in/">Today India</a>
        </li>
        <li>
            <a href="https://www.dailyo.in/">Daily O</a>
        </li>

        <h1 className=' text-red-800'>helo</h1>
    </div>

    <button className='signup'>
        <a href="">Signup  </a>
        <div className='signupIcon'>
        <AiOutlineUser/>
        </div>
    </button>
   </nav>

   <nav className='nav2nd'>
    <div className="nav2-list2nd">
        <li className='text-white' >
            <div>
            <AiOutlineAlignCenter  />
            </div>
        </li>
        <li>
            <a  href="">Home</a>
        </li>
        <li>
            <a href="">Today News </a>
        </li>
        <li>
            <a href="">Latest Top 50 News</a>
        </li>
        <div className='icons-live-notif'>
        <li>
           <div className='icon'>
              <AiOutlineBell/>
           </div>
        </li>
        <li>
            <div >
                <a href=""><AiOutlineMonitor/></a>
            </div>
        </li>
        <li>
           <div>
           <a href="">Live</a>
           </div>
        </li>
        </div>
       
        
    </div>
   </nav>


   <nav className="nav3rd">
    <div className='nav-list3rd'>
        <li><a href="">
            Breaking News</a>
            </li>
            <li className='lightwhite'>
                |
            </li>
        <li>
        गुजरात दौरे पर पीएम मोदी, चिकला में अंबाजी मंदिर में किए दर्शन
        </li>
        <li>
            
        </li>
    </div>
   </nav>
   
   </>
  )
}

export default Navbar
