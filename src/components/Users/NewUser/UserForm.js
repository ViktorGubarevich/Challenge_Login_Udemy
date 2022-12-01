import { useRef, useState } from "react";

import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Modal from "../../UI/Modal/Modal";
import styles from "./UserForm.module.css";

const UserForm = ({ onSaveUserData }) => {
  const inputNameRef = useRef();
  const inputAgeRef = useRef();
  const [error, setError] = useState();

  // const [inputName, setInputName] = useState("");
  // const [inputAge, setInputAge] = useState("");

  // const nameChangeHandler = (event) => {
  //   setInputName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setInputAge(event.target.value);
  // };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const inputName = inputNameRef.current.value;
    const inputAge = inputAgeRef.current.value;

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Неккоректный ввод",
        message: "Эти поля не могут быть пустыми",
      });
      return;
    }

    if (+inputAge < 1) {
      setError({
        title: "Неккоректный возраст",
        message: "Возраст должен быть больше 0",
      });
      return;
    }

    const userData = {
      userName: inputName,
      userAge: inputAge,
    };

    onSaveUserData(userData);
    inputNameRef.current.value = "";
    inputAgeRef.current.value = "";

    // setInputName("");
    // setInputAge("");
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onCloseModal={errorHandler}
        />
      )}
      <Card>
        <form onSubmit={formSubmitHandler}>
          <div className={styles["form-control"]}>
            <label>Имя</label>
            <input
              type="text"
              ref={inputNameRef}
              // value={inputName}
              // onChange={nameChangeHandler}
            />
            <label>Возраст</label>
            <input
              type="number"
              step="1"
              ref={inputAgeRef}
              // value={inputAge}
              // onChange={ageChangeHandler}
            />
            <Button type="submit">Добавить Пользователя</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
