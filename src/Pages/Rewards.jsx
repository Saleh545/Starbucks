import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import "../styles/rewards.css";
import { Link } from "react-router-dom";

const Rewards = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick1 = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <Header />
      <div className="rewards">
        <div className="rewards-header">
          <h1>Starbucks® Rewards</h1>
        </div>
        <div className="rewards-img">
          <div className="rewards-text">
            <h2>
              free coffee
              <br />
              is a tap away
            </h2>
            <p>Join now to start earning Rewards.</p>
            <button className="rewards-join">Join now</button>
            <span>
              Or <Link>join in the app</Link> for the best experience
            </span>
          </div>
        </div>
      </div>

      <div className="getting-started">
        <div className="container">
          <div className="text-center">
            <h1>Getting started is easy</h1>
            <p>Earn Stars and get rewarded in a few easy steps.</p>
          </div>
          <div className="getting-flex">
            <div className="getting-card">
              <div className="getting-img">
                <img
                  src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg"
                  alt=""
                />
              </div>
              <div className="card-content">
                <h3>Create an account</h3>
                <p>
                  To get started, <Link>join now</Link>. You can also{" "}
                  <Link>join in the app</Link> to get access to the full range
                  of Starbucks® Rewards benefits.
                </p>
              </div>
            </div>{" "}
            <div className="getting-card">
              <div className="getting-img">
                <img
                  src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg"
                  alt=""
                />
              </div>
              <div className="card-content">
                <h3>Order and pay how you’d like</h3>
                <p>
                  Use cash, credit/debit card or save some time and pay right
                  through the app. You’ll collect Stars all ways.{" "}
                  <Link>Learn how</Link>
                </p>
              </div>
            </div>{" "}
            <div className="getting-card">
              <div className="getting-img">
                <img
                  src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg"
                  alt=""
                />
              </div>
              <div className="card-content">
                <h3>Earn Stars, get Rewards</h3>
                <p>
                  As you earn Stars, you can redeem them for Rewards—like free
                  food, drinks, and more. Start redeeming with as little as 25
                  Stars!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="favorites">
        <div className="container">
          <h1>Get your favorites for free</h1>
          <div className="favorites-button">
            <button
              className={activeIndex === 1 ? " tabs active-content" : "tabs"}
              onClick={() => handleClick1(1)}
            >
              25 <span>★</span>{" "}
            </button>

            <button
              className={activeIndex === 2 ? " tabs active-content" : "tabs"}
              onClick={() => handleClick1(2)}
            >
              100 <span>★</span>{" "}
            </button>

            <button
              className={activeIndex === 3 ? " tabs active-content" : "tabs"}
              onClick={() => handleClick1(3)}
            >
              200 <span>★</span>{" "}
            </button>

            <button
              className={activeIndex === 4 ? " tabs active-content" : "tabs"}
              onClick={() => handleClick1(4)}
            >
              300 <span>★</span>{" "}
            </button>

            <button
              className={activeIndex === 5 ? " tabs active-content" : "tabs"}
              onClick={() => handleClick1(5)}
            >
              400 <span>★</span>{" "}
            </button>
          </div>
        </div>

        <div className="favorite-content">
          <div
            className={activeIndex === 1 ? " favorite-flex " : "active-content"}
          >
            <div className="favorite-img">
              <img
                src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/25.png"
                alt=""
              />
            </div>
            <div className="favorite-text">
              <h2>Customize your drink</h2>
              <p>
                Make your drink just right with an extra espresso shot, nondairy
                milk or a dash of your favorite syrup.
              </p>
            </div>
          </div>

          <div
            className={activeIndex === 2 ? " favorite-flex " : "active-content"}
          >
            <div className="favorite-img">
              <img
                src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png"
                alt=""
              />
            </div>
            <div className="favorite-text">
              <h2>
                Brewed hot or iced coffee or tea, bakery item, packaged snack
                and more
              </h2>
              <p>
                Treat yourself to an iced coffee, buttery croissant, bag of
                chips and more.
              </p>
            </div>
          </div>

          <div
            className={activeIndex === 3 ? " favorite-flex " : "active-content"}
          >
            <div className="favorite-img">
              <img
                src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png"
                alt=""
              />
            </div>
            <div className="favorite-text">
              <h2>
                Handcrafted drink (Cold Brew, lattes and more) or hot breakfast
              </h2>
              <p>
                Turn good mornings great with a delicious handcrafted drink of
                your choice, breakfast sandwich or oatmeal on us.
              </p>
            </div>
          </div>

          <div
            className={activeIndex === 4 ? " favorite-flex " : "active-content"}
          >
            <div className="favorite-img">
              <img
                src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png"
                alt=""
              />
            </div>
            <div className="favorite-text">
              <h2>Sandwich, protein box or at-home coffee</h2>
              <p>
                Enjoy a PM pick-me-up with a lunch sandwich, protein box or a
                bag of coffee—including Starbucks VIA Instant®.
              </p>
            </div>
          </div>

          <div
            className={activeIndex === 5 ? " favorite-flex " : "active-content"}
          >
            <div className="favorite-img">
              <img
                src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png"
                alt=""
              />
            </div>
            <div className="favorite-text">
              <h2>Select Starbucks® merchandise</h2>
              <p>
                Take home a signature cup, drink tumbler or your choice of
                coffee merch up to $20.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Endless">
        <div className="container">
          <div className="endless-up">
            <h1>Endless Extras</h1>
            <p>
              Joining Starbucks® Rewards means unlocking access to exclusive
              benefits. Say hello to easy ordering, tasty Rewards and—yes, free
              coffee.
            </p>
          </div>
          <div className="endless-flex">
            <div className="endless-card">
              <div className="endless-img">
                <img
                  src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg"
                  alt=""
                />
              </div>
              <div className="endless-content">
                <h2>Fun freebies</h2>
                <p>
                  Not only can you earn free coffee, look forward to a birthday
                  treat plus coffee and tea refills.
                </p>
                <Link>Learn more</Link>
              </div>
            </div>
            <div className="endless-card">
              <div className="endless-img">
                <img
                  src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
                  alt=""
                />
              </div>
              <div className="endless-content">
                <h2>Order & pay ahead</h2>
                <p>
                Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.


                </p>
                <Link>Learn more</Link>
              </div>
            </div>
            <div className="endless-card">
              <div className="endless-img">
                <img
                  src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"
                  alt=""
                />
              </div>
              <div className="endless-content">
                <h2>Get to free faster</h2>
                <p>
                Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.


                </p>
                <Link>Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rewards;
