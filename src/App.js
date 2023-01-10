import {useState} from "react";

import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";

function App() {

  const[userList, setUserList] = useState([]);
  const handleAddUser = (userName, userAge) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        {
          name: userName, 
          age: userAge,
          id: Math.random().toString()
        }
      ]
    });
  }

  return (
    <div className="App">
      <AddUser onAddUser={handleAddUser}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
