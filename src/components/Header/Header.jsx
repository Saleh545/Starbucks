import React, { useState } from "react";
import "./Header.css";
import { Fade, Fade as Hamburger } from "hamburger-react";
import {  Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    menuOpen
      ? (document.body.style.overflow = "visible")
      : (document.body.style.overflow = "hidden");

    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="parent">
        <div className="container">
          <div className="header">
            <div className="img">
              <NavLink to="/">
              <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/446px-Starbucks_Corporation_Logo_2011.svg.png?20170312192423" alt=""/>

              </NavLink>
            </div>

            <nav
              className={menuOpen ? "navTransformOpen" : "navTransformClose"}
            >
              <ul>
                <li>
                  <NavLink to="/Menu">menu</NavLink>
                </li>
                <li>
                  <NavLink to="/Rewards">rewards</NavLink>
                </li>
                <li>
                  <NavLink to="/Gift">gift cards</NavLink>
                </li>
              </ul>

              <div className="right">
                <div className="location">
                  <button className="loc">
                  <NavLink to="/store-locator">
                    <svg
                      aria-hidden="true"
                      className="valign-middle pr2"
                      focusable="false"
                      preserveAspectRatio="xMidYMid meet"
                      style={{
                        overflow: "visible",
                        fill: "currentColor",
                      }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path>
                    </svg>
                    Find a store
                  </NavLink>
                  </button>
                </div>
                <div className="account">
                  <button className="sign"> <Link to="/account/signin" >Sign in</Link></button>
                  <button className="join"><Link to="/account/create">Join now</Link></button>
                </div>
              </div>
            </nav>
            <div className="resp-bar">
              <Fade size={24} toggled={menuOpen} toggle={handleToggleMenu} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
