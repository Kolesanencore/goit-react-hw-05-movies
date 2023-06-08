import MovieListItem from 'components/MovieListItem/MovieListItem';
import css from 'components/MovieList/MovieList.module.css';
export const MovieList = ({ movies }) => {
  return (
    <ul className={css.movieslist}>
      {movies.map(movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
