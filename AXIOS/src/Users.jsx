import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

      // axios.delete("https://api.com/users/1");
      

      // axios.put("https://api.com/users/1", {
      // name: "Updated Name",
      // });

      // axios.post("https://api.com/users", {
      // name: "Ashwin",
      // age: 22,
      // });


  }, []);

  return (
    <>
      {users.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </>
  );
}

export default Users