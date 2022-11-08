import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const UserItem = () => {
    const { id } = useParams();
    const [user, setUser] = useState();
    const navigate = useNavigate(null);

    const toUserList = () => navigate(-1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                const user = response.data;
                setUser(user);
            })
    },[id]);

    return(
        <>
            {user && (
                <div>
                    <h3>Full Name: {user.name}</h3>
                    <h4>User Name: {user.username}</h4>
                    <p>E-mail: {user.email}</p>
                    <p>City: {user.address.city}</p>
                    <p>Street: {user.address.street}</p>
                </div>
            )}
            <button
            onClick={toUserList}
            >To User List</button>
        </>
    )
}

export default UserItem;