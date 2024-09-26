import React, { useEffect, useState } from "react";
import Krishnaudio from '../../Assets/audio.mp3';

const AutoPlaySound = () => {
  const [audio] = useState(new Audio(Krishnaudio));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handlePlayAudio = () => {
      audio.muted = false;
      audio.play().catch((error) => {
        console.log("Playback failed after user interaction:", error);
      });
    };

    // Handle audio play/pause based on click
    const toggleAudio = () => {
      if (isPlaying) {
        audio.pause();
      } else {
        handlePlayAudio();
      }
      setIsPlaying(!isPlaying); // Toggle the playing state
    };

    // Attach click event listener to toggle audio
    window.addEventListener("click", toggleAudio);

    return () => {
      // Cleanup event listener
      window.removeEventListener("click", toggleAudio);
    };
  }, [audio, isPlaying]);

  return (
    <div>
      <button 
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from bubbling
          if (isPlaying) {
            audio.pause(); // Pause the audio
          } else {
            audio.muted = false; // Unmute before playing
            audio.play(); // Play the audio
          }
          setIsPlaying(!isPlaying); // Toggle state
        }}
        style={{
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          fontSize: '24px'
        }}
      >
        {/* Bootstrap Icons for play and pause */}
        {isPlaying ? (
          <i className="bi bi-pause-fill" /> // Pause icon
        ) : (
          <i className="bi bi-play-fill" /> // Play icon
        )}
      </button>
    </div>
  );
};

export default AutoPlaySound;
