// fetching an api by using .then()


import { useState, useEffect } from "react";

function FetchAPI() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <>
      <h1>Api</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.firstName}</h3>
        </div>
      ))}
    </>
  );
}

export default FetchAPI;
