import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=36fc399726a5f27b3949cb8beaec3042`,
    )
      .then((response) => response.json())
      .then((data) => setCast(data.cast));
  }, [movieId]);

  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {cast.map((actor) => (
          <li key={actor.cast_id}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
