import React from "react";
import PodcastCard from "./PodcastCard";

const PodcastGrid = ({ shows }) => {
  return (
    <div className="podcast-grid">
      {shows.map((show) => (
        <PodcastCard key={show.id} show={show} />
      ))}
    </div>
  );
};

export default PodcastGrid;