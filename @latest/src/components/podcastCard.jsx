import React from "react";

const PodcastCard = ({ show }) => {
  return (
    <div className="podcast-card">
      <img src={show.image} alt={show.title} />
      <div className="podcast-card-content">
        <h3>{show.title}</h3>
        <p>{show.description}</p>
      </div>
    </div>
  );
};

export default PodcastCard;