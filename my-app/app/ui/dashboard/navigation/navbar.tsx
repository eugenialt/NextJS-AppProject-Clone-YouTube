"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import menu_icon from "@/assets/menu.png"
import logo from "@/assets/logo.png"
import search_icon from "@/assets/search.png"
import upload_icon from "@/assets/upload.png"
import more_icon from "@/assets/more.png"
import notification_icon from "@/assets/notification.png"
import profile_icon from "@/assets/jack.png"
import '../styles/navbar.css';
import SideNav from './sidenav';

const Navbar = () => {

  const [isClick, setisClick] = useState(true);

  const toggleNavbar = () => {
    setisClick(!isClick);
  }
  return (
    <nav className='flex-div'>
      <button className='menu' onClick={toggleNavbar} >
        <Image width={25} height={25} className='menu-icon' src={menu_icon} alt="" />
      </button>

      <div className='nav-left flex-div'>
       <Image className='logo' src={logo} alt="" />
      </div>

      <div className="nav-middle flex-div">
          <input type="text" placeholder="Search"/>
          <Image src={search_icon} alt="" />
      </div>

      <div className="nav-right flex-div">
          <Image src={upload_icon} alt="" />
          <Image src={more_icon} alt="" />
          <Image src={notification_icon} alt="" />
          <Image src={profile_icon} className="user-icon" alt="" />
      </div>
      {isClick && <SideNav />}
      </nav>
  )
}

export default Navbar;