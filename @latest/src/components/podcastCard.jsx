import { Link } from "react-router-dom";

const PodcastCard = ({ show }) => {
  if (!show) return null;

  return (
    <article>
      <Link to={`/show/${show.id}`}>
        <img src={show.image} alt={show.title} width="200" />
        <h3>{show.title}</h3>
      </Link>
    </article>
  );
};

export default PodcastCard;