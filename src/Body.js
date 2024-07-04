import React from "react";

function Body(props) {
  return (
    <div className="body">
        <p>{props.comment}</p>
    </div>
  );
}

export default Body;