import React from 'react'
import './dashboard.css'
import Feed from './Feed/page';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Youtube App",
};

export default function Page() {  

  return ( 
    <>
      <Feed />
       </>
  );
}