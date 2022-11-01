import React, { useState } from "react";

const Form = ({ addUser }) => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
  });
  const eventHandler = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };
  const myBtn = () => {
    let u = { id: Date.now(), name: user.name, surname: user.surname };
    addUser(u);
  };
  return (
    <div className="form-add">
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input id="name" onChange={eventHandler} type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="">Surname</label>
        <input id="surname" onChange={eventHandler} type="text" />
      </div>
      <div className="form-group">
        <button onClick={myBtn}>Add</button>
      </div>
    </div>
  );
};

export default Form;
