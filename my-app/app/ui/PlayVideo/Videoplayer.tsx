import React from 'react';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <video src={src} controls />
  );
};

export default VideoPlayer;