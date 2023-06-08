import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c209603f4e1441562adec7f34b907cef';

const getTrendingMovies = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}trending/movie/week`, {
    params: {
      api_key: API_KEY,
      page: page,
    },
  });

  return response.data;
};

const getSearchMovie = async (movieToSearch, page = 1) => {
  const response = await axios.get(`${BASE_URL}search/movie`, {
    params: {
      api_key: API_KEY,
      query: movieToSearch,
      page: page,
    },
  });

  return response.data;
};

const getMovieById = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
};

const getMovieCredits = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
};

const getMovieReviews = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
};

export {
  getTrendingMovies,
  getSearchMovie,
  getMovieById,
  getMovieCredits,
  getMovieReviews,
};
