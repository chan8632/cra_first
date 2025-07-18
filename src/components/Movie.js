import { Link } from "react-router-dom";

function Movie({ id, title, coverImg, summary, genres }) {
  return (
    <div>
      <img alt={title} src={coverImg} />
      <Link to={`/movie/${id}`}>
        <h1>{title}</h1>
      </Link>
      <div>{summary}</div>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
