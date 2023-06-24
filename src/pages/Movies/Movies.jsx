import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import Loader from 'components/Loader/Loader';

import { getSearchMovie } from 'services/movieApi';

import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';

export const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [searchExecuted, setSearchExecuted] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSearch = searchQuery => {
    setSearchExecuted(true);
    setSearchParams(new URLSearchParams({ query: searchQuery }));
  };

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        try {
          setShowLoader(true);
          const data = await getSearchMovie(query);
          setSearchResults(data.results);
        } catch (error) {
          console.log('Error searching movies:', error);
        } finally {
          setShowLoader(false);
        }
      };

      fetchData();
    }
  }, [query]);

  return (
    <section>
      <SearchBar onSearch={handleSearch} />
      {showLoader && <Loader visible={showLoader} />}
      {searchExecuted && searchResults.length === 0 && (
        <p>No search results found</p>
      )}
      {searchResults.length > 0 && <MovieList movies={searchResults} />}
    </section>
  );
};

export default Movies;
