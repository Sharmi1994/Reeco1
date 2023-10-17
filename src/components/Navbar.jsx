import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="Label">
        <div className="title"> Reeco</div>
        <div className="sideName"> Store</div>
        <div className="sideName"> Order</div>
        <div className="sideName"> Analysis</div>
      </div>
      <div className="cartitems">
        <div>
        <FaShoppingCart/>
        </div>
        <div> Hello, James</div>{" "}
      </div>
    </nav>
  );
}

export default Navbar;
