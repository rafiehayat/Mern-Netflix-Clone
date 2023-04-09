import React, { useState } from "react";
import "./navbar.scss";
import { Search, Notifications, ArrowDropDown  } from "@material-ui/icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false: true)
    return() => (window.onscroll = null)
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
      <div className="left">
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" />
        <span>Homepage</span>
        <span>Series</span>
        <span>Movies</span>
        <span>New and Popular</span>
        <span>My List</span>
      </div>
      <div className="right">
        <Search className="icon"/>
        <span>KID</span>
        <Notifications className="icon"/>
        <img src="https://www.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg" alt="" />

        <div className="profile">
        <ArrowDropDown className="icon"/>
        <div className="options">
          <span>Settings</span>
          <span>Logout</span>
        </div>
        </div>
      </div>
    </div>
    </div>)
};

export default Navbar;
