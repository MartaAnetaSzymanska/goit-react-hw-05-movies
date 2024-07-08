import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

const SharedLayout = lazy(() => import("./SharedLayout"));
const Home = lazy(() => import("../pages/HomePage/Home"));
const Movies = lazy(() => import("../pages/MoviesPage/Movies"));
const MovieDetails = lazy(
  () => import("../pages/MovieDetailsPage/MovieDetails"),
);
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

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
