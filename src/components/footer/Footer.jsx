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
                  <a href="#">Our Company</a>
                  <a href="#">Our Coffee</a>
                  <a href="#">Stories and News</a>
                  <a href="#">Starbucks Archive</a>
                  <a href="#">Investor Relations</a>
                  <a href="#">Customer Service</a>
                  <a href="#">Contact Us</a>
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
                  <a href="#">Culture and Values</a>
                  <a href="#">Inclusion, Diversity, and Equity</a>
                  <a href="#">College Achievement Plan </a>
                  <a href="#">Alumni Community</a>
                  <a href="#">U.S Careers</a>
                  <a href="#">International Careers</a>
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
                  <a href="#">People</a>
                  <a href="#">Planet</a>
                  <a href="#">Environmental and Social Impact Reporting</a>
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
                  <a href="#">Landlord Support Center</a>
                  <a href="#">Suppliers</a>
                  <a href="#">Corporate Gift Card Sales</a>
                  <a href="#">Office and Foodservice Coffee</a>
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
                  <a href="#">Order on the App</a>
                  <a href="#">Order on the Web</a>
                  <a href="#">Delivery</a>
                  <a href="#">Order and Pick Up Options</a>
                  <a href="#">Explore and Find Coffee for Home</a>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="none-card">
              <div className="footer-card">
                <h1>About Us</h1>
                <a href="#">Our Company</a>
                <a href="#">Our Coffee</a>
                <a href="#">Stories and News</a>
                <a href="#">Starbucks Archive</a>
                <a href="#">Investor Relations</a>
                <a href="#">Customer Service</a>
                <a href="#">Contact Us</a>
              </div>
              <div className="footer-card">
                <h1>Careers</h1>
                <a href="#">Culture and Values</a>
                <a href="#">Inclusion, Diversity, and Equity</a>
                <a href="#">College Achievement Plan </a>
                <a href="#">Alumni Community</a>
                <a href="#">U.S Careers</a>
                <a href="#">International Careers</a>
              </div>
              <div className="footer-card">
                <h1>Social Impact</h1>
                <a href="#">People</a>
                <a href="#">Planet</a>
                <a href="#">Environmental and Social Impact Reporting</a>
              </div>
              <div className="footer-card">
                <h1>For Business Partners</h1>
                <a href="#">Landlord Support Center</a>
                <a href="#">Suppliers</a>
                <a href="#">Corporate Gift Card Sales</a>
                <a href="#">Office and Foodservice Coffee</a>
              </div>
              <div className="footer-card">
                <h1>Order and Pick Up</h1>
                <a href="#">Order on the App</a>
                <a href="#">Order on the Web</a>
                <a href="#">Delivery</a>
                <a href="#">Order and Pick Up Options</a>
                <a href="#">Explore and Find Coffee for Home</a>
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
                <a href="" className="border-none">
                  {" "}
                  Privacy Notice
                </a>
              </li>
              <li>
                <a href=""> Terms of Use</a>
              </li>
              <li>
                <a href=""> Do Not Share My Personal Information</a>
              </li>
              <li>
                <a href=""> CA Supply Chain Act</a>
              </li>
              <li>
                <a href=""> Accessibility</a>
              </li>
              <li>
                <a href=""> Cookie Preferences</a>
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