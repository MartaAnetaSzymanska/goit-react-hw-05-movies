import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=36fc399726a5f27b3949cb8beaec3042`,
    )
      .then((response) => response.json())
      .then((data) => setTrendingMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.trendingContainer}>
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

export default Home;
