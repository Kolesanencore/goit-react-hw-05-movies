import { useEffect, useState } from 'react';

import Loader from 'components/Loader/Loader';

import { getTrendingMovies } from 'services/movieApi';

import MovieList from 'components/MovieList/MovieList';

import css from 'pages/Home/Home.module.css';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

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

  const fetchTrendingMovies = async () => {
    try {
      const data = await getTrendingMovies();
      setTrendingMovies(data.results);
      console.log('data', data.results);
    } catch (error) {
      console.log('Error fetching trending movies:', error);
    }
  };

  return (
    <section>
      <h2 className={css.homeTitle}>Tranding today</h2>
      <Loader visible={showLoader} />
      {trendingMovies && trendingMovies.length > 0 ? (
        <MovieList movies={trendingMovies} />
      ) : (
        <p className={css.homeTitle}> No trending movies found</p>
      )}
    </section>
  );
};

export default Home;
