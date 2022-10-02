import styles from "./Card.module.css";

const Card = ({ children, className }) => {
  return (
    <div className={`${styles["login-form"]} ${className}`}>{children}</div>
  );
};

export default Card;
