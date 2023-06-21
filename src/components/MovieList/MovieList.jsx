import MovieListItem from 'components/MovieListItem/MovieListItem';

import { Container, NavList } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <Container>
      <NavList>
        {movies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </NavList>
    </Container>
  );
};

export default MovieList;
