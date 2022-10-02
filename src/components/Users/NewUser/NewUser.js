import UserForm from "./UserForm";

const NewUser = ({ onAddUser }) => {
  const saveUserDataHandler = (inputUserData) => {
    const userData = {
      ...inputUserData,
      id: Math.random().toString(),
    };
    onAddUser(userData);
  };

  return <UserForm onSaveUserData={saveUserDataHandler} />;
};

export default NewUser;
