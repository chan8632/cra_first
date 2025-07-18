function Movie({ title, coverImg, summary, genres }) {
  return (
    <div>
      <img alt={title} src={coverImg} />
      <h1>{title}</h1>
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
