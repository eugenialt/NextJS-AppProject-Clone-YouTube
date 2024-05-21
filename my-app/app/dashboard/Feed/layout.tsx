import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface CustomLinkProps {
    category: string;
    id: string;
    thumbnail: string;
    title: string;
    channel: string;
    views: number;
    date: string;
  }
  const CustomLink: React.FC<CustomLinkProps> = ({ category, id, thumbnail, title, channel, views, date }) => {
    const router = useRouter();
  
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      router.push(`/dashboard/Video?category=${category}&id=${id}`);
    };
  
    return (
    <a href={`/dashboard/Video?category=${category}&id=${id}`} className="card" onClick={handleClick}>
      <img className='img-card' src={thumbnail} alt=""/>
      <h2>{title}</h2>
      <h3>{channel}</h3>
      <p>{views} views &bull; {date}</p>
    </a>
  );
};

export default CustomLink;
