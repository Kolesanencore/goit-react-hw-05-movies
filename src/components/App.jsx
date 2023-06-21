// import { lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';

import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { MovieDetails } from 'pages/MoviesDetails/MovieDetails';
import Layout from './Layout/Layout';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
