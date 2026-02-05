import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import PodcastGrid from "../components/PodcastGrid";

const Home = () => {
  const { shows, loading, error } = useContext(PodcastContext);

  if (loading) return <p className="loading">Loading podcasts...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!shows || shows.length === 0) return <p className="empty">No podcasts available.</p>;

  return (
    <main>
      <h1>Podcasts</h1>
      <PodcastGrid shows={shows} />
    </main>
  );
};

export default Home;