// by doing fetching fetch.() by async and await promises 

import { useState, useEffect } from "react";

function AsyncAwait() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getuser = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      setUsers(data.users);
    };

    getuser();
  }, []);

  return (
    <>
      <h1>AsyncAwait</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.firstName}</h3>
        </div>
      ))}
    </>
  );
}

export default AsyncAwait;