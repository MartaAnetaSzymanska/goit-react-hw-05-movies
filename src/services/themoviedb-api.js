import axios from "axios";

const API_KEY = "36fc399726a5f27b3949cb8beaec3042";

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
  );
  return response.data.results;
};
