import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import UsersList from "./components/UsersList";
import UserItem from "./components/UserItem";

import Search from "./components/Search";

const url = 'https://jsonplaceholder.typicode.com/users'

const App = () => {

  const [users, setUsers] = useState(null);
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    axios.get(`${url}`)
    .then((response) => {
      const users = response.data;
      console.log(users);
      setUsers(users);
    })
  }, []);

  const filterUsers = () => {
    if (users) {
      let usersCopy = [...users];
      if (inputValue) {
        let usersFilter = usersCopy.filter((user) => {
          return user.name.toLowerCase().includes(inputValue.toLowerCase());
        })
        return usersFilter;
      }
    }
  }

  const filteredUsers = filterUsers();

  if (!users) {
    return <h1>Loading...</h1>
  }

  return (
    <>
    <div>
    <Search onChange={(e) => setInputValue(e.target.value)} />  
    </div>
    <Routes>
        <Route path='/Task_users' element={<UsersList users={filteredUsers ? filteredUsers : users}/>} />
        <Route path='/Task_users/:id' element={<UserItem />} />
      </Routes>
    </>
  )
}
export default App;