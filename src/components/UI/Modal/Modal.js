import ReactDOM from "react-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./Modal.module.css";

const Backdrop = ({ onCloseModal }) => (
  <div className={styles.backdrop} onClick={onCloseModal}></div>
);

const ErrorModal = ({ title, message, onCloseModal }) => (
  <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{title}</h2>
    </header>
    <div className={styles.content}>
      <p>{message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={onCloseModal}>Закрыть</Button>
    </footer>
  </Card>
);

const Modal = ({ title, message, onCloseModal }) => (
  <>
    {ReactDOM.createPortal(
      <Backdrop onCloseModal={onCloseModal} />,
      document.getElementById("backdrop")
    )}
    {ReactDOM.createPortal(
      <ErrorModal
        title={title}
        message={message}
        onCloseModal={onCloseModal}
      />,
      document.getElementById("modal")
    )}
  </>
);

export default Modal;
