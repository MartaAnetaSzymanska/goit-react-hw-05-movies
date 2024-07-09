import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export const Button = ({ text }) => {
  return (
    <button className={styles.button} type="button">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
