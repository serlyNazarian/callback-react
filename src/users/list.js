import React from "react";

const List = ({ users }) => {
  return (
    <div>
      <div className="users">
        {users.map((item) => (
          <div key={item.id} className="item-user">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
