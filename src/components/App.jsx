import { Routes, Route, Navigate, Link } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { Home } from "../pages/HomePage/Home";
import { Movies } from "../pages/MoviesPage/Movies";
import { MovieDetails } from "../pages/MovieDetailsPage/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route patch="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route patch="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
