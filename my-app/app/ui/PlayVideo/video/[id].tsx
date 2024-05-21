const VideoId = ({ videoId }: {videoId: string | string[]}) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      title="Video Player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

      allowFullScreen
      
    ></iframe>
  );
};

export default VideoId