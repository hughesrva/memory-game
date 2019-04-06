import React from "react";

// game body that tiles are filled into
function Body(props) {
  return (
    <div className="columns is-centered">
      <div className="column is-two-thirds">
        <div className="columns is-multiline is-vcentered is-centered" id="bodyBox">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Body;
