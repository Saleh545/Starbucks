import React from "react";
import "../Menu/menu.css";
import { NavLink } from "react-router-dom";
import { Col, Row } from "reactstrap";

const MenuItems = () => {
  return (
    <div>
      <div className="menu-nav">
        <div className="container">
          <ul>
            <li>
              <NavLink>menu</NavLink>
            </li>
            <li>
              <NavLink>featured</NavLink>
            </li>
            <li>
              <NavLink>previous</NavLink>
            </li>
            <li>
              <NavLink>favorites</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="product">
        <div className="container">
          <div className="product-menu">
            <div className="drinks">
              <ul>
                <li className="product-bottom">
                  <span>drinks</span>
                  <ul className="product-flex">
                    <li>
                      <NavLink>Oleato™</NavLink>
                    </li>
                    <li>
                      <NavLink>Hot Coffees</NavLink>
                    </li>
                    <li>
                      <NavLink>Hot Teas</NavLink>
                    </li>
                    <li>
                      <NavLink>Hot Drinks</NavLink>
                    </li>
                    <li>
                      <NavLink>Frappuccino® Blended Beverages</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="product-bottom">
                  <span>drinks</span>
                  <ul className="product-flex">
                    <li>
                      <NavLink>Coffee</NavLink>
                    </li>
                    <li>
                      <NavLink>Coffee</NavLink>
                    </li>
                    <li>
                      <NavLink>Coffee</NavLink>
                    </li>
                    <li>
                      <NavLink>Coffee</NavLink>
                    </li>
                    <li>
                      <NavLink>Coffee</NavLink>
                    </li>
                  </ul>
                </li>{" "}
                <li className="product-bottom">
                  <span>drinks</span>
                  <ul className="product-flex">
                    <li>
                      <NavLink>Coffee</NavLink>
                    </li>
                    <li>
                      <NavLink>Coffee</NavLink>
                    </li>
                    <li>
                      <NavLink>Coffee</NavLink>
                    </li>
                    <li>
                      <NavLink>Coffee</NavLink>
                    </li>
                    <li>
                      <NavLink>Coffee</NavLink>
                    </li>
                  </ul>
                </li>{" "}
                <li className="product-bottom">
                  <span>drinks</span>
                  <ul className="product-flex">
                    <li>
                      <NavLink>Coffee</NavLink>
                    </li>
                    <li>
                      <NavLink>Coffee</NavLink>
                    </li>
                    <li>
                      <NavLink>Coffee</NavLink>
                    </li>
                    <li>
                      <NavLink>Coffee</NavLink>
                    </li>
                    <li>
                      <NavLink>Coffee</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
