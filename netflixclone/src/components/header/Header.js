import React, { useEffect, useState } from "react";
import "./header.css";
import Netflix_logo from "../../assets/images/Netflix_logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header_outer_container ${showBackground ? "scrolled" : ""}`}>
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={Netflix_logo} alt="Netflix Logo" className="net_logo" />
            </li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li><SearchIcon className="icon" /></li>
            <li><NotificationsIcon className="icon" /></li>
            <li><PersonIcon className="icon" /></li>
            <li><ArrowDropDownIcon className="icon" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
