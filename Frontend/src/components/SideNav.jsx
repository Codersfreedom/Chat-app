import React from 'react'
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import './SideNav.css'
import useLogout from '../hooks/useLogout';
const SideNav = () => {

  const {logout} = useLogout ();
  return (
    
      <aside>
        <div className="side-container">
            <div className="top-div">
            <IoLogoWhatsapp className='icon' />
            </div>
            <div className="mid-div">
                <div className="icons-container">
                <MdMessage className='icon' />
                <IoIosNotifications  className='icon' />
                </div>
            </div>
            <div className="bottom-div">
            <CiUser className='icon' />
            <CiLogout className='icon' onClick={logout} />
            </div>
        </div>
      </aside>
    
  )
}

export default SideNav
