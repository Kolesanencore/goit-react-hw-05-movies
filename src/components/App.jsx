import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('components/Layout/Layout'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MoviesDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>'Whait Please...'</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="movies"
            element={
              <Suspense fallback={<div>'Whait Please...'</div>}>
                <Movies />
              </Suspense>
            }
          />
          <Route
            path="movies/:movieId"
            element={
              <Suspense fallback={<div>'Whait Please...'</div>}>
                <MovieDetails />
              </Suspense>
            }
          >
            <Route
              path="cast"
              element={
                <Suspense fallback={<div>'Whait Please...'</div>}>
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<div>'Whait Please...'</div>}>
                  <Reviews />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
