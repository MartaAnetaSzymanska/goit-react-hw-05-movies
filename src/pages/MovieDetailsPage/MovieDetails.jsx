import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "../../components/Button/Button";
import styles from "./MovieDetails.module.scss";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "movies";
  const base_url = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=36fc399726a5f27b3949cb8beaec3042`,
    )
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error(err));
  }, [movieId]);

  return (
    <div>
      <div className={styles.buttonContainer}>
        <Link to={backLinkHref}>
          <Button text="⬅ Go back" />
        </Link>
      </div>

      {movie ? (
        <div className={styles.movieContainer}>
          <img
            src={`${base_url}${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
          <div>
            <h1>{movie.title}</h1>
            <h4>User score: {Math.round(movie.vote_average * 10)}%</h4>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>
              {movie.genres.map((genre) => (
                <span key={genre.id}> {genre.name}</span>
              ))}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div>
        <h3>Additional information</h3>
        <ul className={styles.additionalContainer}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
