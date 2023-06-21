import React, { Suspense, useEffect, useRef, useState } from 'react';

import { FaBackward } from 'react-icons/fa';

import { Outlet, useParams, useLocation } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import Movie from 'components/Movie/Movie';

import { fetchMovie } from 'services/movieApi';

import { Detail, LinkList, LinkStyle, StyledLink } from './MovieDetails.styled';
import { Container } from 'components/MovieList/MovieList.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const locationDetails = useLocation();
  // Создаем ссылку с использованием хука useRef и получаем значение из location.state или задаем значение '/movies', если location.state не определен.
  const backUpLink = useRef(locationDetails.state?.from ?? '/movies');

  const [movieData, setMovieData] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

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
      {/* Отображаем ссылку "Back to" с использованием значения из backUpLinkRef.current */}
      {showLoader && <Loader visible={showLoader} />}
      {/* Отображаем компонент Loader, если showLoader равно true */}
      {movieData && <Movie movieData={movieData} />}
      {/* Отображаем компонент Movie, если movieData не является null */}
      <Container>
        <Detail>Additional information</Detail>
        {/* Отображаем текст "Additional information" */}
        <LinkList>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </LinkList>
      </Container>
      <Suspense fallback={<div>Please wait. We are in a process...</div>}>
        <Outlet /> {/* Отображаем дочерние маршруты */}
      </Suspense>
    </section>
  );
};

export default MovieDetails;
