import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../src/assets/images/logo_withoutBg.png";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_left_container">
        <img src={logo} alt="logo" />
      </div>
      <div className="header_right_container">
        <div>
          <p>Get Support</p>
        </div>
        <div>
          <Link to="/">
            <p>Log out</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
