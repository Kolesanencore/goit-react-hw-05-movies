import { useEffect, useState } from 'react';

import Loader from 'components/Loader/Loader';

import { getTrendingMovies } from 'services/movieApi';

import MovieList from 'components/MovieList/MovieList';

import { Detail } from 'pages/MoviesDetails/MovieDetails.styled';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const fetchTrendingMovies = async () => {
    try {
      const data = await getTrendingMovies();
      setTrendingMovies(data.results);
    } catch (error) {
      console.log('Error fetching trending movies:', error);
    }
  };

  useEffect(() => {
    setShowLoader(true);
    fetchTrendingMovies()
      .then(data => {
        if (data && data.results) {
          setTrendingMovies(data.results);
        }
      })
      .catch(console.log)
      .finally(() => setShowLoader(false));
  }, []);

  return (
    <section>
      <Detail>Tranding today</Detail>
      <Loader visible={showLoader} />
      {trendingMovies && trendingMovies.length > 0 ? (
        <MovieList movies={trendingMovies} />
      ) : (
        <p> No trending movies found</p>
      )}
    </section>
  );
};

export default Home;
