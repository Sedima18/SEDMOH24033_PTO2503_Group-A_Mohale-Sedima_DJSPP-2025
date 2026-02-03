import { useContext } from "react";
import { AudioContext } from "../context/AudioContext";

const AudioPlayer = () => {
  const { currentEpisode, isPlaying, pause, playEpisode } =
    useContext(AudioContext);

  if (!currentEpisode) return null;

  return (
    <div className="audio-player">
      <span>{currentEpisode.title}</span>
      {isPlaying ? (
        <button onClick={pause}>Pause</button>
      ) : (
        <button onClick={() => playEpisode(currentEpisode)}>
          Play
        </button>
      )}
    </div>
  );
};

export default AudioPlayer;