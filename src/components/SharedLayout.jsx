import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import styles from "./SharedLayout.module.scss";

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav className={styles.navigation}>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
