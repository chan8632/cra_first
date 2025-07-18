import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieData(json.data.movie);
    setLoading(false);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {loading ? (
        <strong>Loading</strong>
      ) : (
        <div>
          <h1>{movieData.title}</h1>
          <ul>
            {movieData.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Detail;
