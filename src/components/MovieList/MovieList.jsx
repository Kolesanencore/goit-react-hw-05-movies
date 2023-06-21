import MovieListItem from 'components/MovieListItem/MovieListItem';

import { NavList } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <NavList>
      {movies.map(movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </NavList>
  );
};

export default MovieList;
