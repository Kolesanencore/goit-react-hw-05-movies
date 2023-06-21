import { useState } from 'react';

import Loader from 'components/Loader/Loader';

import { getSearchMovie } from 'services/movieApi';

import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';

export const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [searchExecuted, setSearchExecuted] = useState(false);

  const handleSearch = async searchQuery => {
    try {
      setShowLoader(true);
      const data = await getSearchMovie(searchQuery);
      setSearchResults(data.results);
      setSearchExecuted(true);
    } catch (error) {
      console.log('Error searching movies:', error);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <section>
      <SearchBar onSearch={handleSearch} />
      {showLoader && <Loader visible={showLoader} />}
      {searchExecuted && searchResults.length === 0 && (
        <p style={{ textAlign: 'center' }}>No search results found</p>
      )}
      {searchResults.length > 0 && <MovieList movies={searchResults} />}
    </section>
  );
};

export default Movies;
