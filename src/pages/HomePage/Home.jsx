import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/themoviedb-api.js";

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async () => {
      try {
        const movies = await fetchTrendingMovies();
        console.log(movies);
        setTrendingMovies(movies);
      } catch (error) {
        console.errog(error);
      }
    };
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
