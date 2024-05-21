"use client"
import NavLinks from '../Nav-links/nav-links';
import React, { useState } from 'react';
import Image from 'next/image';
import './sidenav.css';
import home from '@/assets/home.png';
import game_icon from '@/assets/game_icon.png';
import automobiles from '@/assets/automobiles.png';
import sports from '@/assets/sports.png';
import entertainment from '@/assets/entertainment.png';
import tech from '@/assets/tech.png';
import music from '@/assets/music.png';
import blogs from '@/assets/blogs.png';
import news from '@/assets/news.png';
import jack from '@/assets/jack.png';
import simon from '@/assets/simon.png';
import tom from '@/assets/tom.png';
import megan from '@/assets/megan.png';
import cameron from '@/assets/cameron.png';
import { CategoryProvider, useCategory } from '../../../hooks/useCategory';
import { Dispatch, SetStateAction } from 'react';
interface SideNavProps {
  category: string;
  setCategory: (category: string) => void;
}

interface SideNavProps {
  category: string;
  setCategory: (category: string) => void;
}

const SideNav: React.FC<SideNavProps> = ({ category, setCategory }) => {
  return (
    <div className='sidebar'>
      <div className="sortcut-links">
        <div className={`side-link ${category === '0' ? "active" : ""}`} onClick={() => setCategory('0')}>
          <Image width={20} height={20} src={home} alt="" /> <p>Home</p>
        </div>
        <div className={`side-link ${category === '20' ? "active" : ""}`} onClick={() => setCategory('20')}>
          <Image width={20} height={20} src={game_icon} alt="" /> <p>Gaming</p>
        </div>
        <div className={`side-link ${category === '2' ? "active" : ""}`} onClick={() => setCategory('2')}>
          <Image width={20} height={20} src={automobiles} alt="" /> <p>Automobiles</p>
        </div>
        <div className={`side-link ${category === '17' ? "active" : ""}`} onClick={() => setCategory('17')}>
          <Image width={20} height={20} src={sports} alt="" /> <p>Sports</p>
        </div>
        <div className={`side-link ${category === '24' ? "active" : ""}`} onClick={() => setCategory('24')}>
          <Image width={20} height={20} src={entertainment} alt="" /> <p>Entertainment</p>
        </div>
        <div className={`side-link ${category === '28' ? "active" : ""}`} onClick={() => setCategory('28')}>
          <Image width={20} height={20} src={tech} alt="" /> <p>Tech</p>
        </div>
        <div className={`side-link ${category === '10' ? "active" : ""}`} onClick={() => setCategory('10')}>
          <Image width={20} height={20} src={music} alt="" /> <p>Music</p>
        </div>
        <div className={`side-link ${category === '22' ? "active" : ""}`} onClick={() => setCategory('22')}>
          <Image width={20} height={20} src={blogs} alt="" /> <p>Blogs</p>
        </div>
        <div className={`side-link ${category === '25' ? "active" : ""}`} onClick={() => setCategory('25')}>
          <Image width={20} height={20} src={news} alt="" /> <p>News</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default SideNav;