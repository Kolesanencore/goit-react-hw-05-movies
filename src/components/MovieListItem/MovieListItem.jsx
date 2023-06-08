export const MovieListItem = ({ movie }) => {
  return (
    <li key={movie.id}>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <h3>{movie.title}</h3>
      <p>{movie.release_date && movie.release_date.slice(0, 4)}</p>
      <p>{movie.vote_average && movie.vote_average.toFixed(1)}</p>
    </li>
  );
};

export default MovieListItem;
