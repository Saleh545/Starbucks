import React from "react";
import "./Main.css";
import {
  FaFacebook,
  FaInstagramSquare,
  FaPinterest,
  FaSpotify,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="left">
            <img
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88612.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <div className="text">
              <h1>You + Starbucks Rewards = ❤️</h1>

              <p>
                Sounds like a perfect match. Everything you need is in the app:
                download and start earning free drinks and more. Plus, enjoy
                mobile ordering and offers made just for you.
              </p>
              <button>Get the app</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card reverse-cart">
          <div className="left pink">
            <img
              className="two-img "
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88614.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <div className="text-two">
              <h1 className="two-text">What the heart wants</h1>

              <p className="two-p">
                Treat yourself and a friend to swirls of happiness and rich java
                chips with the new Chocolate-Covered Strawberry Crème
                Frappuccino® drink. Here for a limited time.
              </p>
              <button className="order">Order now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <div className="left">
            <img
              className="two-img"
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88616.jpg"
              alt=""
            />
          </div>
          <div className="right brown">
            <div className="text">
              <h1 className="total">Totally smitten</h1>

              <p className="pinkp">
                Join your Val pal and indulge in the new Chocolate Hazelnut
                Cookie Cold Brew, a decadent coffee confection with chocolaty
                cookie crumbles. Here for a limited time.
              </p>
              <button className="button-brown">Order now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card reverse-cart">
          <div className="left pink">
            <img
              className="two-img "
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88294.jpg"
              alt=""
            />
          </div>
          <div className="right bck-blue">
            <div className="text-two">
              <h1 className="two-text savory">Savory and satisfying</h1>

              <p className="two-p savory">
              Grab a subtly sweet Chicken, Maple Butter & Egg Sandwich on the way.
              </p>
              <button className="order hover-blue">Order now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <div className="left">
            <img
              className="two-img"
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88701.jpg"
              alt=""
            />
          </div>
          <div className="right blue-dark">
            <div className="text">
              <h1 className="total white ">Protein-packed goodness</h1>

              <p className="pinkp white fs-24">
                Enjoy the fluffy Egg White & Roasted Red Pepper Egg Bites and
                Bacon & Gruyère Egg Bites, both 300 calories or less.
              </p>
              <button className="button-blue white">Order now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card reverse-cart">
          <div className="left">
            <img
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88575.jpg"
              alt=""
            />
          </div>
          <div className="right   green">
            <div className="text">
              <h1 className="white">“A smile makes a big difference.”</h1>

              <p className="white green-brenda">- Brenda, Starbucks Partner (Employee)</p>
              <p className="white">
                Our partners uplift each other and their communities every day.
              </p>
              <button className="white btn-green">Learn more</button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="container">
          <div className="text-center-flex">
            <h5>
              *At participating stores only. Some restrictions apply. Linked
              Card members will earn 2% Cash Back on the full purchase price of
              every Qualifying Purchase. Bonus Star offer excludes taxes and
              tips. Stars may not be earned on purchases of alcohol or on
              reloads of Starbucks Cards that are not registered. For full
              details, visit
              <a href="www.starbucks.com/bofa"> www.starbucks.com/bofa</a>. Bank
              of America, N.A. Member FDIC.
            </h5>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="cards">
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
              <a href="#">College Achievement   Plan </a>
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

          <div className="social">
            <ul>
              <li>
                <FaSpotify />
              </li>
              <li>
                <  FaFacebook />
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
            <li><a href="" className="border-none"> Privacy Notice</a></li>
            <li><a href=""> Terms of Use</a></li>
            <li><a href="">  Do Not Share My Personal Information</a></li>
            <li><a href=""> CA Supply Chain Act</a></li>
            <li><a href="">  Accessibility</a></li>
            <li><a href=""> Cookie Preferences</a></li>
          </ul>
          <p>© 2024 Starbucks Coffee Company. All rights reserved.</p>
        </div>

        </div>
      </footer>
    </>
  );
};

export default Main;
