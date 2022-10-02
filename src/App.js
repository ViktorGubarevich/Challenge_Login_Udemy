import { useState } from "react";

import UserList from "./components/Users/UserList/UserList";
import NewUser from "./components/Users/NewUser/NewUser";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <>
      <NewUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </>
  );
};

export default App;
