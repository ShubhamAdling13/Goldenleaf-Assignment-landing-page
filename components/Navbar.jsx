import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { RiCloseLine } from "react-icons/ri";
import "./Navbar.css";

function Navbar() {
  const [activeNav, setActiveNav] = useState(false);

  const toggleMenu = () => {
    setActiveNav(!activeNav);
  };

  return (
    <>
      {!activeNav ? (
        <IoMenuOutline className="menu-icon" onClick={toggleMenu} />
      ) : (
        <RiCloseLine className="close-icon" onClick={toggleMenu} />
      )}

      {activeNav && (
        <div className="navbar">
          <RiCloseLine className="close-icon" onClick={toggleMenu} />
          <ul>
            <div>
              {" "}
              <li>
                <a href="#home">Home</a>
              </li>
            </div>
            <div>
              {" "}
              <li>
                <a href="#Overview">About Us</a>
              </li>{" "}
            </div>
            <div>
              {" "}
              <li>
                <a href="#Whyhinjewadi">Why Hinjawadi</a>
              </li>
            </div>
            <div>
              {" "}
              <li>
                <a href="#Community">Community of Elites & NRIs</a>
              </li>{" "}
            </div>
            <div>
              {" "}
              <li>
                <a href="#Managedforest">Managed Forest Concept</a>
              </li>{" "}
            </div>
            <div>
              {" "}
              <li>
                <a href="#Workfromforest">Work From Forest</a>
              </li>{" "}
            </div>
            <div>
              {" "}
              <li>
                <a href="#ammenity">Amenities</a>
              </li>
            </div>
            <div>
              {" "}
              <li>
                <a href="#contactus">Contact US</a>
              </li>{" "}
            </div>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
