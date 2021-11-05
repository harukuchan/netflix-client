import React, { useState } from "react";
import "./navbar.scss";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div class="container">
        <div class="left">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <Link to="/" className="link">
            <span>HomePage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My list</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>KID</span>
          <NotificationsIcon className="icon" />
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="option">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
