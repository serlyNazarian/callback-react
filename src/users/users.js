import React, { useState } from "react";
import Form from "./form";
import List from "./list";
import "./users.css";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Vardan", surname: "Aramyan" },
  ]);
  const addUser = (item) => {
    setUsers([...users, item]);
  };
  return (
    <div>
      <Form addUser={addUser} />
      <List users={users} />
    </div>
  );
};

export default Users;
