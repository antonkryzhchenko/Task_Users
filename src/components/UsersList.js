import { Link } from "react-router-dom";

const UsersList = (props) => {
    const {users} = props;

    return (
        <>
        {users &&
            users.map(user => (
                <Link key={user.id} to={`/Task_Users/${user.id}`}>
                    <h2>{user.name}</h2>
                </Link>
            ))}
        </>
    )
}
export default UsersList;