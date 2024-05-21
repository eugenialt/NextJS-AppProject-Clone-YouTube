"use client"
import React from 'react'
import './Feed.css'
import Link from 'next/link'
import Image from 'next/image'
import thumbnail1 from '@/assets/thumbnail1.png'
import thumbnail2 from '@/assets/thumbnail2.png'
import thumbnail3 from '@/assets/thumbnail3.png'
import thumbnail4 from '@/assets/thumbnail4.png'
import thumbnail5 from '@/assets/thumbnail5.png'
import thumbnail6 from '@/assets/thumbnail6.png'
import thumbnail7 from '@/assets/thumbnail7.png'
import thumbnail8 from '@/assets/thumbnail8.png'
import { useCategory } from '../../hooks/useCategory'
import { API_KEY, value_converter } from '../../data'
import { useState, useEffect } from 'react'
import { NextRouter } from 'next/router';
import VideoPlayer from '../../ui/PlayVideo/Videoplayer'
interface VideoSnippet {
   title: string;
   channelTitle: string;
   publishedAt: string;
   thumbnails: {
     medium: {
       url: string;
     };
   };
 }
 
 interface VideoStatistics {
   viewCount: string;
 }
 
 interface Video {
   id: string;
   snippet: VideoSnippet;
   statistics: VideoStatistics;
 }
 
 interface YouTubeAPIResponse {
   items: Video[];
   nextPageToken?: string;
 }


 interface VideoSnippet {
   title: string;
   channelTitle: string;
   publishedAt: string;
   thumbnails: {
     medium: {
       url: string;
     };
   };
 }
 
 interface VideoStatistics {
   viewCount: string;
 }
 
 interface Video {
   id: string;
   snippet: VideoSnippet;
   statistics: VideoStatistics;
 }
 
 interface YouTubeAPIResponse {
   items: Video[];
   nextPageToken?: string;
 }

 interface FeedProps {
  category: string;
}

const Feed: React.FC<FeedProps> = ({ category }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const [data, setData] = useState<Video[]>([]);
  const [pageToken, setPageToken] = useState<string | undefined>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (token = '') => {
    setLoading(true);
    setError(null);
    const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&videoCategoryId=${category}&key=${API_KEY}${token ? `&pageToken=${token}` : ''}`;
    
    try {
      const response = await fetch(videoListUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: YouTubeAPIResponse = await response.json();
      
      if (data.items && Array.isArray(data.items)) {
        setData(data.items);
      } else {
        setError('No videos found');
      }
      
      setPageToken(data.nextPageToken);
    } catch (error) {
      setError('Failed to fetch data: ' );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setData([]); // Reset data when category changes
    fetchData();
  }, [category]);
  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };
  return (
    <div className="feed">
      {error && <p className="error">{error}</p>}
      {data.length > 0 ? (
        data.map((item) => (
          <Link key={item.id}  href={`/dashboard/Video?category=${category}&videoId=${item.id}`} legacyBehavior passHref>

            <a className="card">
              <Image className="img-card" src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} width={320} height={180} priority={true} />
              <h2>{item.snippet.title}</h2>
              <h3>{item.snippet.channelTitle}</h3>
              <p>{value_converter(item.statistics.viewCount)} views &bull; {new Date(item.snippet.publishedAt).toLocaleDateString()}</p>
            </a>
          </Link>
        ))
      ) : (
        !loading && <p>No videos available</p>
      )}
      {pageToken && (
        <button onClick={() => fetchData(pageToken)} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
      
    </div>
  );
};

export default Feed;






//  const Feed = ({ category }: { category: string }) => {
//   const [data, setData] = useState<Video[]>([]);
//   const [pageToken, setPageToken] = useState<string | undefined>('');
//   const [loading, setLoading] = useState(false);

//   const fetchData = async (token = '') => {
//     setLoading(true);
//     const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&videoCategoryId=${category}&key=${API_KEY}${token ? `&pageToken=${token}` : ''}`;
//     const response = await fetch(videoListUrl);
//     const data: YouTubeAPIResponse = await response.json();
//     setData(prevData => [...prevData, ...data.items]);
//     setPageToken(data.nextPageToken);
//     setLoading(false);
//   };

//   useEffect(() => {
//     setData([]); // Reset data when category changes
//     fetchData();
//   }, [category]);

//   return (
//     <div className="feed">
//       {data.map((item) => (
//         <Link key={item.id} href={`/dashboard/Video?category=${category}&id=${item.id}`} legacyBehavior passHref>
//           <a className="card">
//             <Image className="img-card" src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} width={320} height={180} />
//             <h2>{item.snippet.title}</h2>
//             <h3>{item.snippet.channelTitle}</h3>
//             <p>{item.statistics.viewCount} views &bull; {new Date(item.snippet.publishedAt).toLocaleDateString()}</p>
//           </a>
//         </Link>
//       ))}
//       {pageToken && (
//         <button onClick={() => fetchData(pageToken)} disabled={loading}>
//           {loading ? 'Loading...' : 'Load More'}
//         </button>
//       )}
//     </div>
//   );
// };

// export default Feed;