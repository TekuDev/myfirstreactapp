import React from "react";

function Header(props) {
  return (
    <div className="header">
      <img src={props.profileImg} alt={`${props.username}'s profile`} />
      <h1>{props.username}</h1>
    </div>
  );
}

export default Header;
