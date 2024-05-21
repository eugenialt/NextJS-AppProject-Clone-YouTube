"use client"
import React, { useState } from 'react'
import './dashboard.css'
import Feed from './Feed/page';
import { Metadata } from "next";
import { useCategory } from '../hooks/useCategory';
import SideNav from '../ui/dashboard/Sidenav/sidenav';
// export const metadata: Metadata = {
//   title: "Home | Youtube App",
// };


export default function Page() {  
  const [category, setCategory] = useState<string>('0'); // начальная категория

  return (
    <div className="app">
      <SideNav category={category} setCategory={setCategory} />
      <Feed category={category} />
    </div>
  );

};
