import React from "react";

// "navbar" showing game title and dynamic score values
function Navbar(props) {
  return (
    <nav className="navbar is-vcentered">
      <div className="container">
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <h1 className="title">Memory Game</h1>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <h1 className="title">
                Score: {props.score} | High Score: {props.highScore}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
