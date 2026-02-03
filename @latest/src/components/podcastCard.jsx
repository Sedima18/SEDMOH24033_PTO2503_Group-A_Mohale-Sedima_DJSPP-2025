import { Link } from "react-router-dom";
import { genreMap } from "../utils/GenreMap";

const PodcastCard = ({ podcast }) => {
  const genres = podcast.genres.map((g) => genreMap[g]).join(" • ");

  return (
    <Link to={`/show/${podcast.id}`} className="podcast-card">
      <img src={podcast.image} alt={podcast.title} />
      <h3>{podcast.title}</h3>
      <p>{genres}</p>
    </Link>
  );
};

export default PodcastCard;