import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ playbackUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMuted(false);
      setIsPlaying(true);
    }, 100);
  }, [playbackUrl]);

  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={playbackUrl}
        playing={isPlaying}
        className="react-player"
        playsinline
        controls
        muted={isMuted}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
