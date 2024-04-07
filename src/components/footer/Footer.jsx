import React from 'react'
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
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
          <footer>
        <div className="container">
          <div className="cards">
            <div className="accordion">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header">
                  <h1>About Us</h1>
                </AccordionSummary>
                <AccordionDetails>
                <Link to="/about-us/">Our Company</Link>
                <Link to="/coffee/">Our Coffee</Link>
                  <Link>Stories and News</Link>
                  <Link>Starbucks Archive</Link>
                  <Link>Investor Relations</Link>
                  <Link>Customer Service</Link>
                  <Link>Contact Us</Link>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header">
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
                  <Link>People</Link>
                  <Link>Planet</Link>
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
            <div className="none-card">
              <div className="footer-card">
                <h1>About Us</h1>
                <Link to="/about-us/">Our Company</Link>
                <Link to="/coffee/">Our Coffee</Link>
                <Link>Stories and News</Link>
                <Link>Starbucks Archive</Link>
                <Link>Investor Relations</Link>
                <Link>Customer Service</Link>
                <Link>Contact Us</Link>
              </div>
              <div className="footer-card">
                <h1>Careers</h1>
                <Link>Culture and Values</Link>
                <Link>Inclusion, Diversity, and Equity</Link>
                <Link>College Achievement Plan </Link>
                <Link>Alumni Community</Link>
                <Link>U.S Careers</Link>
                <Link>International Careers</Link>
              </div>
              <div className="footer-card">
                <h1>Social Impact</h1>
                <Link>People</Link>
                <Link>Planet</Link>
                <Link>Environmental and Social Impact Reporting</Link>
              </div>
              <div className="footer-card">
                <h1>For Business Partners</h1>
                <Link>Landlord Support Center</Link>
                <Link>Suppliers</Link>
                <Link>Corporate Gift Card Sales</Link>
                <Link>Office and Foodservice Coffee</Link>
              </div>
              <div className="footer-card">
                <h1>Order and Pick Up</h1>
                <Link>Order on the App</Link>
                <Link>Order on the Web</Link>
                <Link>Delivery</Link>
                <Link>Order and Pick Up Options</Link>
                <Link>Explore and Find Coffee for Home</Link>
              </div>
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
          <div className="footer-bottom">
            <ul>
              <li>
                <Link  className="border-none">
                  {" "}
                  Privacy Notice
                </Link>
              </li>
              <li>
                <Link > Terms of Use</Link>
              </li>
              <li>
                <Link > Do Not Share My Personal Information</Link>
              </li>
              <li>
                <Link > CA Supply Chain Act</Link>
              </li>
              <li>
                <Link > Accessibility</Link>
              </li>
              <li>
                <Link > Cookie Preferences</Link>
              </li>
            </ul>
            <p>© 2024 Starbucks Coffee Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer