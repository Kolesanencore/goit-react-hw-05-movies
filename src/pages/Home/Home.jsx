import { useEffect, useState } from 'react';

import Loader from 'components/Loader/Loader';

import { getTrendingMovies } from 'services/movieApi';
import MovieList from 'components/MovieList/MovieList';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    fetchTrendingMovies()
      // .then(setTrendingMovies)
      .catch(console.log)
      .finally(() => setShowLoader(false));
  }, []);

  const fetchTrendingMovies = async () => {
    try {
      const data = await getTrendingMovies();
      setTrendingMovies(data.results);
    } catch (error) {
      console.log('Error fetching trending movies:', error);
    }
  };

  return (
    <section>
      <h2>Tranding today</h2>
      <Loader visible={showLoader} />
      {trendingMovies.length && <MovieList movies={trendingMovies} />}
    </section>
  );
};

export default Home;
