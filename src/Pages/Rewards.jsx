import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import "../styles/rewards.css";
import { Link, NavLink } from "react-router-dom";

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
          <button className="join-in ">Join in the app</button>
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
            <span className="text1">
              Or <Link>join in the app</Link> for the best experience
            </span>
            <span className="text2">
               <Link>Or join online</Link> 
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
            <button className={activeIndex === 1 ? " tabs active-content" : "tabs"} onClick={() => handleClick1(1)}>
              25 <span>★</span>
            </button>

            <button className={activeIndex === 2 ? " tabs active-content" : "tabs"} onClick={() => handleClick1(2)}>
              100 <span>★</span>
            </button>

            <button className={activeIndex === 3 ? " tabs active-content" : "tabs"} onClick={() => handleClick1(3)}>
              200 <span>★</span>
            </button>

            <button className={activeIndex === 4 ? " tabs active-content" : "tabs"} onClick={() => handleClick1(4)}>
              300 <span>★</span>
            </button>

            <button className={activeIndex === 5 ? " tabs active-content" : "tabs"} onClick={() => handleClick1(5)}>
              400 <span>★</span>
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
                  Enjoy the convenience of in-store, curbside or drive-thru
                  pickup at select stores.
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
                  Earn Stars even quicker with Bonus Star challenges, Double
                  Star Days and exciting games.
                </p>
                <Link>Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cash">
        <div className="container">
          <div className="cash-up">
            <h2>Cash or card, you earn Stars</h2>
            <p>
              No matter how you pay, you can earn Stars with your morning
              coffee. Those Stars add up to (really delicious) Rewards.
            </p>
          </div>

          <div className="cash-flex">
            <div className="cash-text">
              <h5>
                1<span>★</span> per dollar
              </h5>
              <p>Pay as you go</p>
            </div>
            <div className="card1">
              <div className="cash-img">
                <img
                  src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png"
                  alt=""
                />
              </div>
              <div className="card-text">
                <h4>Scan and pay separately</h4>
                <p>Use cash or credit/debit card at the register.</p>
              </div>
            </div>

            <div className="card1">
              <div className="cash-img">
                <img
                  src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png"
                  alt=""
                />
              </div>
              <div className="card-text">
                <h4>Save payment in the app</h4>
                <p>
                  Check-out faster by saving a credit/debit card or PayPal to
                  your account. You’ll be able to order ahead or scan and pay at
                  the register in one step.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="cash-flex">
            <div className="cash-text">
              <h5>
                2<span>★</span> per dollar
              </h5>
              <p>Add funds in the app</p>
            </div>
            <div className="card1">
              <div className="cash-img">
                <img
                  src="	https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png"
                  alt=""
                />
              </div>
              <div className="card-text">
                <h4>Preload</h4>
                <p>
                  To save time and earn Stars twice as fast, add money to your
                  digital Starbucks Card using any payment option. Scan and pay
                  in one step or order ahead in the app.
                </p>
              </div>
            </div>

            <div className="card1">
              <div className="cash-img">
                <img
                  src="	https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png"
                  alt=""
                />
              </div>
              <div className="card-text">
                <h4>Register your gift card</h4>
                <p>
                  Then use it to pay through the app. You can even consolidate
                  balances from multiple cards in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="keep">
        <div className="container">
          <div className="keep-content">
            <div className="keep-img">
              <img
                src="	https://www.starbucks.com/app-assets/7997fb008f368630d3ca3c1194fd8404.svg"
                alt=""
              />
            </div>

            <div className="keep-center">
              <div className="keep-up">
                <h2>Keep the Rewards Coming</h2>
                <p>
                  The Rewards don't stop at your morning coffee. Join Starbucks®
                  Rewards and unlock perks from our partners, all while earning
                  more Stars.
                </p>
              </div>
              <div className="keep-flex">
                <div className="keep-card">
                  <div className="keep-img">
                    <img className="img"
                      src="https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/delta-skymiles.png"
                      alt=""
                    />
                  </div>
                  <p>
                    <Link>Link your Delta SkyMiles® </Link>
                    and Starbucks® Rewards accounts to earn 1 mile per $1 spent
                    at Starbucks and double Stars on Delta travel days.1
                  </p>
                </div>
                <div className="keep-card">
                  <div className="keep-img">
                    <img className="img"
                      src="	https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/bank-of-america.png"
                      alt=""
                    />
                  </div>
                  <p>
                    <Link>Link your Bank of America </Link>
                    eligible card and Starbucks® Rewards account to earn 2% Cash
                    Back and Bonus Stars on qualifying Starbucks in-app
                    purchases.2
                  </p>
                </div>
              </div>
              <button> Join Starbucks® Rewards</button>
            </div>

            <div className="keep-img">
              <img
                src="		https://www.starbucks.com/app-assets/b7e1b20df72e802cb1cf0e97e8fe21d0.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="questions">
        <div className="container">
          <div className="que-text">
            <h2>Questions?</h2>
            <p>
              We want to help in any way we can. You can ask your barista
              anytime or we’ve answered the most commonly asked questions
              <Link> right over here</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="text-bottom">
        <div className="container">
          <div className="bottom-text">
            <p>At participating stores. Restrictions apply.</p>
            <p>
              1Excludes taxes and gratuities. At participating stores. Some
              restrictions apply. Flights purchased close to departure may not
              earn double Stars. Stars and miles may not be earned on purchases
              of alcohol, Starbucks Cards and Starbucks Card reloads. For
              details, visit
              <NavLink>deltastarbucks.com/terms</NavLink>
            </p>
            <p>
              2At participating stores only. Some restrictions apply. Linked
              Card members will earn 2% Cash Back on the full purchase price of
              every Qualifying Purchase. Extra Star offer excludes taxes and
              tips. Stars may not be earned on purchases of alcohol or on
              reloads of Starbucks Cards that are not registered. For details,
              visit Terms and Conditions . Bank of America, N.A. Member FDIC.↩
            </p>

            <div className="bottom-flex">
              <div className="bottom-card">
                <h3>EARNING STARS</h3>
                <p>
                  Stars cannot be earned on purchases of alcohol, Starbucks
                  Cards or Starbucks Card reloads.
                </p>
                <p>
                  Earn 1 Star per $1 spent when you scan your member barcode in
                  the app, then pay with cash, credit/debit cards or mobile
                  wallets at participating stores. You can also earn 1 Star per
                  $1 spent when you link a payment method and pay directly
                  through the app.{" "}
                </p>
                <p>
                  Earn 2 Stars per $1 spent when you load funds and pay with
                  your digital Starbucks Card in the app. You can also earn 2
                  Stars per $1 spent when you pay in-person at a participating
                  store with your registered physical Starbucks Card or scan
                  your member barcode in the app, and then use any physical
                  Starbucks Card (regardless of whether it is registered) to
                  complete the purchase.
                </p>
                <h3>BENEFITS</h3>
                <p>
                  Free refills available during same in-store visit only. To
                  qualify for the Birthday Reward, you must have made at least
                  one Star-earning transaction.
                </p>
              </div>

              <div className="bottom-card">
                <h3>TERMS OF USE</h3>
                <p>
                  For full program details visit
                  <NavLink>starbucks.com/rewards/terms</NavLink>
                </p>
                <p>
                  Starbucks® Rewards benefits are available at participating
                  Starbucks stores. Not all stores have the ability to honor
                  Rewards at this time. Visit the
                  <NavLink>Starbucks Store Locator</NavLink> and search for
                  locations honoring “Redeem Rewards”.
                </p>
                <div className="bottom-card2">
                  
                <h3>REDEEMING REWARDS</h3>
                <p>
                  Rewards cannot be redeemed for alcoholic beverages or
                  multi-serve items. You pay the difference for any beverage
                  customization over $1 and/or merchandise item over $20. Not
                  all stores honor tiered Rewards. Select stores redeem 200
                  Stars for free food or drink items only.
                </p>
              </div>
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
