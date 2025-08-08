'use client'
import { useRef, useState } from "react";
import { Icon } from '@iconify/react';

const CustomVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={`relative w-full lg:h-120 mx-auto mt-10 overflow-hidden ${isPlaying && 'lg:h-auto'}`}>
      <video
        ref={videoRef}
        className="w-full h-auto object-cover"
        src="/assets/images/ovalen.mp4"
        poster="/assets/images/video-thumbnail.jpg"
        playsInline
        onClick={togglePlayPause}
      />

      {!isPlaying && (
        <button
          onClick={togglePlayPause}
          className="absolute inset-0 flex items-center justify-center text-white bg-black/50 hover:bg-black/10 transition"
        >
          <Icon icon="mdi:play-circle" width="72" height="72" />
        </button>
      )}
    </div>
  );
};

export default CustomVideoPlayer;