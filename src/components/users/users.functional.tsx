import React, { useEffect, useState } from "react";
import UsersModel from "../../models/users.model";

export default function UsersFunctional() {
  let [users, setUsers] = useState(new Array<UsersModel>());
  useEffect(() => {
    (async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (res.ok) {
        let users: UsersModel[] = await res.json();
        setUsers(users);
      }
    })();
  });
  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}


