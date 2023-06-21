import { Suspense, useEffect, useRef, useState } from 'react';

import { Outlet, useParams, useLocation } from 'react-router-dom';

import { FaBackward } from 'react-icons/fa';

import Loader from 'components/Loader/Loader';
import Movie from 'components/Movie/Movie';

import { fetchMovie } from 'services/movieApi';

import { Detail, LinkList, LinkStyle, StyledLink } from './MovieDetails.styled';
import { Container } from 'components/MovieList/MovieList.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const locationDetails = useLocation();

  const backUpLink = useRef(locationDetails.state?.from ?? '/movies');

  const [movieData, setMovieData] = useState(null);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);
    fetchMovie(Number(movieId))
      .then(setMovieData)
      .catch(console.log)
      .finally(() => setShowLoader(false));
  }, [movieId]);

  return (
    <section>
      <LinkStyle to={backUpLink.current}>
        <FaBackward style={{ marginRight: '5px' }} />
        Back to
      </LinkStyle>
      {showLoader && <Loader visible={showLoader} />}
      {movieData && <Movie movieData={movieData} />}
      <Container>
        <Detail>Additional information</Detail>
        <LinkList>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </LinkList>

        <Suspense fallback={<div>Please wait. We are in a process...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </section>
  );
};

export default MovieDetails;
