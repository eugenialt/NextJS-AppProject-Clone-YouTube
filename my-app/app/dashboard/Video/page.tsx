"use client"
import React from 'react'
import PlayVideo from '../../ui/PlayVideo/PlayVideo'
import './video.css'
import Recommended from '../../ui/Recommended/recommended'
import { useParams } from 'next/navigation'
import VideoId from '../../ui/PlayVideo/video/[id]'
function Video() {
  const { videoId } = useParams();
  return (
  
    <div className="play-container">
      {/* <VideoId videoId={videoId} /> */}
    <PlayVideo  />
  <Recommended />
  
</div>


  )
}

export default Video