import PodcastCard from "./PodcastCard";

const PodcastGrid = ({ shows }) => {
  if (!shows || shows.length === 0) {
    return <p>No podcasts available.</p>;
  }

  return (
    <section>
      {shows.map((show) => (
        <PodcastCard key={show.id} show={show} />
      ))}
    </section>
  );
};

export default PodcastGrid;