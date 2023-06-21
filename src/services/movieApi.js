import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c209603f4e1441562adec7f34b907cef';

export const getTrendingMovies = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}trending/movie/week`, {
    params: {
      api_key: API_KEY,
      page: page,
    },
  });

  const results = response.data.results.slice(0, 12);
  return {
    ...response.data,
    results,
  };
};

export const getSearchMovie = async (movieToSearch, page = 1) => {
  const response = await axios.get(`${BASE_URL}search/movie`, {
    params: {
      api_key: API_KEY,
      query: movieToSearch,
      page: page,
    },
  });

  return response.data;
};

export const fetchMovie = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
    );

    const { poster_path, title, vote_average, overview, genres } =
      response.data;
    const src = poster_path
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png';
    const userScore = Math.ceil(vote_average * 10);

    const genresList = genres.map(({ id, name }) => <li key={id}>{name}</li>);

    return { src, title, userScore, overview, genresList };
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
    );

    const reviews = response.data.results.map(({ author, id, content }) => ({
      author,
      id,
      content,
    }));

    return reviews;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchCast = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
    );
    console.log('response.data', response.data);
    const cast = response.data.cast.map(
      ({ name, character, id, profile_path }) => {
        const src = profile_path
          ? `https://image.tmdb.org/t/p/w200/${profile_path}`
          : 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png';
        return {
          name,
          character,
          id,
          src,
        };
      }
    );
    return cast;
  } catch (error) {
    console.log(error.message);
  }
};
