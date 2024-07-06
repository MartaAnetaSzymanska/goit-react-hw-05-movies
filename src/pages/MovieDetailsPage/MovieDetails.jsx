import { Link, Outlet } from "react-router-dom";

export const MovieDetails = () => {
  return (
    <>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast"></Link>
          </li>
          <li>
            <Link to="reviews"></Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
