import Card from "../../UI/Card/Card";
import styles from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <Card className={styles["users-form"]}>
      <div className={styles.users}>
        <ul>
          {users.map((user) => (
            <li key={user.id} id={user.id}>
              {user.userName} - {user.userAge} лет
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default UserList;
