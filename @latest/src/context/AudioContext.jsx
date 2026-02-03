import { createContext, useRef, useState } from "react";

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playEpisode = (episode) => {
    if (!audioRef.current) return;

    if (!currentEpisode || currentEpisode.audio !== episode.audio) {
      audioRef.current.src = episode.audio;
      setCurrentEpisode(episode);
    }

    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <AudioContext.Provider
      value={{ audioRef, currentEpisode, isPlaying, playEpisode, pause }}
    >
      {children}
      <audio ref={audioRef} />
    </AudioContext.Provider>
  );
};