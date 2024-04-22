import React, { useContext, useState } from "react";
import "../styles/cart.css";
import { NavLink } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { SlPencil } from "react-icons/sl";
import { TbBuildingStore } from "react-icons/tb";
import { CiCircleMinus } from "react-icons/ci";

import {
  FaFacebook,
  FaInstagramSquare,
  FaPinterest,
  FaSpotify,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import { FaChevronLeft } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";

const Cart = () => {
  const { basketData, setBasketData } = useContext(DataContext);

  const removeItem = (index) => {
    const newBasketData = [...basketData];
    newBasketData.splice(index, 1);
    setBasketData(newBasketData);
  };

  return (
    <div>
      <div className="cart-flex">
        
        <div className="cart-left">
          <div className="img cart-img">

            <NavLink to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/446px-Starbucks_Corporation_Logo_2011.svg.png?20170312192423"
                alt=""
              />
            </NavLink>

            <Link className="bckmenu" to="/Menu">
              <FaChevronLeft />
              Back to menu
            </Link>
          </div>
          <div className="order">

            <h5>Review Order <span>({basketData.length})</span></h5>
            <p>Prep time: 3-6 min</p>
          </div>
          <div className="select-store">
            <span>Pickup store</span>
            <Link to="/store-locator">Oasis Travel Center <IoChevronDownOutline /></Link>
          </div>
          <div className="method">
            <span>Pickup method</span>
            <TbBuildingStore />

            <p>In store</p>
          </div>
        </div>
        <div className="cart-right">
          <div className="basket-items">
          {basketData.map((item, index) => (
              <div className="cart-coffee-items">
                <div className="cart-coffee-item">
                  <div className="cart-coffee-img">
                    <img src={item.img} alt="" />{" "}
                  </div>

                  <div className="coffee-text">
                    <Link>{item.name}</Link>
                    <span>Grande</span>
                    <p>
                      100<span>★</span> item
                    </p>
                    <div className="coffee-buttons">
                      <SlPencil />
                      <div className="plus-minus">
                        <CiCircleMinus onClick={() => removeItem(index)} />
                        <CiCirclePlus />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <footer>
              <div className="cards  cart-cards">
                <div className="accordion cart-block">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <h1>About Us</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Link to="/about-us/">Our Company</Link>
                      <Link to="/coffee/">Our Coffee</Link>
                      <Link>Stories and News</Link>
                      <Link>Starbucks Archive</Link>
                      <Link>Investor Relations</Link>
                      <Link to="/sbux">Customer Service</Link>
                      <Link>Contact Us</Link>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <h1>Careers</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Link>Culture and Values</Link>
                      <Link>Inclusion, Diversity, and Equity</Link>
                      <Link>College Achievement Plan </Link>
                      <Link>Alumni Community</Link>
                      <Link>U.S Careers</Link>
                      <Link>International Careers</Link>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                    >
                      <h1>Social Impact</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Link to="/responsibility/people/">People</Link>
                      <Link to="/responsibility/planet/">Planet</Link>
                      <Link>Environmental and Social Impact Reporting</Link>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                    >
                      <h1>For Business Partners</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Link>Landlord Support Center</Link>
                      <Link>Suppliers</Link>
                      <Link>Corporate Gift Card Sales</Link>
                      <Link>Office and Foodservice Coffee</Link>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                    >
                      <h1>Order and Pick Up</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Link>Order on the App</Link>
                      <Link>Order on the Web</Link>
                      <Link>Delivery</Link>
                      <Link>Order and Pick Up Options</Link>
                      <Link>Explore and Find Coffee for Home</Link>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>

              <div className="social">
                <ul>
                  <li>
                    <FaSpotify />
                  </li>
                  <li>
                    <FaFacebook />
                  </li>
                  <li>
                    <FaPinterest />
                  </li>
                  <li>
                    <FaInstagramSquare />
                  </li>
                  <li>
                    <FaYoutubeSquare />
                  </li>
                  <li>
                    <FaSquareTwitter />
                  </li>
                </ul>
              </div>
              <div className="footer-bottom cart-footer-bottom">
                <ul>
                  <li>
                    <Link className="border-none "> Privacy Notice</Link>
                  </li>
                  <li>
                    <Link> Terms of Use</Link>
                  </li>
                  <li>
                    <Link> Do Not Share My Personal Information</Link>
                  </li>
                  <li>
                    <Link> CA Supply Chain Act</Link>
                  </li>
                  <li>
                    <Link> Accessibility</Link>
                  </li>
                  <li>
                    <Link> Cookie Preferences</Link>
                  </li>
                </ul>
                <p>© 2024 Starbucks Coffee Company. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
