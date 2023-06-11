import MovieListItem from 'components/MovieListItem/MovieListItem';

import css from 'components/MovieList/MovieList.module.css';

export const MovieList = ({ movies }) => {
  return (
    <div className={css.moviesContainer}>
      <ul className={css.movieslist}>
        {movies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
