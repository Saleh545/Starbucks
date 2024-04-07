import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import "../styles/ourcoffee.css";

const Ourcoffee = () => {
  return (
    <div>
      <Header />
      <div className="our-coffee">
        <div className="our-img-text">
          <div className="our-text">
            <h1>Let's talk coffee</h1>
            <p>
              Whether you're searching for something new to warm your mug,
              seeking the best brew method for your favorite blend or exploring
              our rarest offerings, you’ve come to the right place.
            </p>
          </div>

          <div className="our-img">
            <img
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78073.jpg"
              alt=""
            />
          </div>

          <div className="our-text">
            <h2>Find your favorite at-home coffee</h2>
            <p>
              From K-Cup pods to Starbucks® Premium Instant, we offer a wide
              selection of coffee to fill your cup.
            </p>
            <button>Browse our coffees</button>
          </div>
          <div className="our-text">
            <p>
              Still undecided? Our new Coffee Quiz makes it easy to find the
              Starbucks® coffee that's made to be yours. Just answer five
              questions to find the one.
            </p>
            <button>Start Quiz</button>
          </div>
          <div className="our-img">
            <img
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71809.jpg"
              alt=""
            />
          </div>
          <div className="our-text">
            <h2>
              The rarest, most extraordinary coffees Starbucks has to offer
            </h2>
            <p>
              Exceptional coffees from around the world. Sourced for the season,
              roasted at Starbucks Reserve® Roasteries and crafted with care.
            </p>
            <button>Explore Starbucks Reserve®</button>
          </div>
          <div className="our-img">
            <img
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71810.jpg"
              alt=""
            />
          </div>
          <div className="our-text">
            <h2>How to brew</h2>
            <p>
              Whether you’re a coffee novice or a seasoned pro, we have all the
              tools you need to bring your brewing game to the next level.
            </p>{" "}
            <button>Learn to brew your perfect cup</button>
          </div>
          <div className="our-bottom">
            <p>Starbucks and the Starbucks logo are registered trademarks of Starbucks Corporation used under license by Nestlé.</p>
            <p>Keurig, K-Cup, and the Keurig trade dress are trademarks of Keurig Green Mountain, Inc., used with permission. Pike Place is a registered trademark of The Pike Place Market PDA, used under license.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ourcoffee;
