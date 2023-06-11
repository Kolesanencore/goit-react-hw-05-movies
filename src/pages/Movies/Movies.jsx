import { useState } from 'react';

import Loader from 'components/Loader/Loader';

import { getSearchMovie } from 'services/movieApi';

import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';

export const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const handleSearch = async searchQuery => {
    try {
      setShowLoader(true);
      const data = await getSearchMovie(searchQuery);
      setSearchResults(data.results);
    } catch (error) {
      console.log('Error searching movies:', error);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <section>
      <SearchBar onSearch={handleSearch} />
      <Loader visible={showLoader} />
      {searchResults.length > 0 ? (
        <MovieList movies={searchResults} />
      ) : (
        <p>No search results found</p>
      )}
    </section>
  );
};

export default Movies;
