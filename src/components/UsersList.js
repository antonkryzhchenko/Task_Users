import UserItem from "./UserItem";
import { Link } from "react-router-dom";

const UsersList = (props) => {
    const {users} = props;

    const allUsers = users.map(user => 
        <UserItem key={user.id} {...user} />
        )

    return (
        <div>
            <h2>User List:</h2>
            {allUsers}
        </div>
    )
}
export default UsersList;