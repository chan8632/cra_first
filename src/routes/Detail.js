import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState({});
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovieData(json.data.movie);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <>
          <h1>{movieData.title}</h1>
          <div></div>
          <ul>
            {movieData.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Detail;
