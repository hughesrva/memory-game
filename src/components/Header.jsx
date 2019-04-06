import React from "react";

// static instructions message
function Header() {
  return (
    <div className="container has-text-centered" id="headerBox">
      <div className="content" id="headerMsg">
        <h1 className="subtitle is-marginless">
          Clicking on an image will earn you a point, but be careful!
        </h1>
        <h1 className="subtitle is-marginless">
          If you click on the same image twice it's game over.
        </h1>
        <h1 className="subtitle is-marginless">Click any image to begin!</h1>
      </div>
    </div>
  );
}

export default Header;
