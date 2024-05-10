"use client";
import React , {useState} from 'react'
import './dashboard.css'
import SideNav from '../ui/dashboard/navigation/sidenav';
import Navbar from '../ui/dashboard/navigation/navbar';
import Link from 'next/link';

export default function Page() {  
  const [sidebar, setSidebar] = useState(true)
  return (
    <>
    <Navbar />

    
    
    </>
  );
}