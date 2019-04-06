import React from "react";

// reusable tile divs that take in the URL and IDs from the tiles array from App.js
function Tile(props) {
  return (
    <div className="gameTile column is-narrow">
      <div className="card" onClick={props.handleClickEvent} data-id={props.id}>
        <div className="card-image" data-id={props.id}>
          <figure className="image" data-id={props.id}>
            <img src={props.url} alt="Great dog!" data-id={props.id} />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Tile;
