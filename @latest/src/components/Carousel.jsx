import PodcastCard from "./podcastCard";

const Carousel = ({ podcasts }) => {
  return (
    <div className="carousel">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
};

export default Carousel;